import { middleware } from '@/middleware';
import { jwtVerify } from 'jose';
import { NextRequest } from 'next/server';

function makeReq({
                     pathname,
                     token,
                     url = 'https://localhost:3000' + pathname,
                 }: {
    pathname: string;
    token?: string;
    url?: string;
}) {
    return {
        nextUrl: { pathname, search: '', searchParams: {}, href: url },
        url,
        cookies: {
            get: () => token ? { value: token } : undefined,
        },
    } as unknown as NextRequest;
}

const isNext = (resp: unknown) =>
    typeof resp === 'object' &&
    resp !== null &&
    'headers' in resp &&
    typeof (resp as { headers: Map<string, string> | { get(key: string): unknown } }).headers.get === 'function' &&
    (resp as { headers: { get(key: string): unknown } }).headers.get('x-middleware-next') === '1';

describe('middleware', () => {

    it('гостевий роут без токена дозволяє доступ', async () => {
        const req = makeReq({ pathname: '/auth/login' });
        const result = await middleware(req);
        expect(isNext(result)).toBe(true);
    });

    it('гостевий роут з валідним токеном — редіректить на /', async () => {
        (jwtVerify as jest.Mock).mockResolvedValue({ payload: { userId: 7, isAdmin: false } });
        const req = makeReq({ pathname: '/auth/login', token: 'tok' });
        const result = await middleware(req);
        expect(result?.status).toBe(307);
        // Перевіряємо, що кінець редіректу це /
        expect(result?.headers.get('location')).toBe('https://localhost:3000/');
    });

    it('гостевий роут з невалідним токеном — дозволяє доступ', async () => {
        (jwtVerify as jest.Mock).mockRejectedValue(new Error('bad'));
        const req = makeReq({ pathname: '/auth/register', token: 'tok' });
        const result = await middleware(req);
        expect(isNext(result)).toBe(true);
    });

    it('непротектед сторінка — дає доступ', async () => {
        const req = makeReq({ pathname: '/not-protected' });
        const result = await middleware(req);
        expect(isNext(result)).toBe(true);
    });

    it('protected route БЕЗ токена — редірект на /access-denied', async () => {
        const req = makeReq({ pathname: '/anime/create' });
        const res = await middleware(req);
        expect(res?.status).toBe(307);
        expect(res?.headers.get('location')).toBe('https://localhost:3000/access-denied');
    });

    it('protected route — невалидний токен, редірект на /access-denied', async () => {
        (jwtVerify as jest.Mock).mockRejectedValue(new Error('fail'));
        const req = makeReq({ pathname: '/anime/edit', token: 'tokx' });
        const res = await middleware(req);
        expect(res?.status).toBe(307);
        expect(res?.headers.get('location')).toBe('https://localhost:3000/access-denied');
    });

    it('protected route — не-адмін токен, редірект на /access-denied', async () => {
        (jwtVerify as jest.Mock).mockResolvedValue({ payload: { userId: 3, isAdmin: false } });
        const req = makeReq({ pathname: '/anime/create', token: 't' });
        const res = await middleware(req);
        expect(res?.status).toBe(307);
        expect(res?.headers.get('location')).toBe('https://localhost:3000/access-denied');
    });

    it('protected route — адмін токен, дозволяє доступ', async () => {
        (jwtVerify as jest.Mock).mockResolvedValue({ payload: { userId: 10, isAdmin: true } });
        const req = makeReq({ pathname: '/manga/edit/5', token: 'admin-token' });
        const res = await middleware(req);
        expect(isNext(res)).toBe(true);
    });
});