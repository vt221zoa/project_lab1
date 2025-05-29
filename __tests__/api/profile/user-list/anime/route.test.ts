import { POST, GET, DELETE } from '@/app/api/profile/user-list/anime/route';
import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import jwt from 'jsonwebtoken';

const mockedUserId = 123;

afterEach(() => jest.clearAllMocks());

function createNextRequest(method: 'GET' | 'POST' | 'DELETE', options?: {
    body?: Record<string, unknown>,
    searchParams?: Record<string, string>,
    token?: string
}): NextRequest {
    const { body, searchParams, token } = options || {};

    const url = new URL('http://localhost');
    if (searchParams) {
        Object.entries(searchParams).forEach(([key, val]) => url.searchParams.set(key, val));
    }

    return {
        method,
        url: url.toString(),
        json: async () => body,
        cookies: {
            get: (key: string) => key === 'token' && token ? { value: token } : undefined
        }
    } as unknown as NextRequest;
}

describe('POST /api/user/anime', () => {
    it('Повертає 401 коли немає токена', async () => {
        const req = createNextRequest('POST');
        const res = await POST(req);
        expect(res.status).toBe(401);
    });

    it('Оновлює або створює запис користувача', async () => {
        (jwt.verify as jest.Mock).mockReturnValue({ userId: mockedUserId });
        (prisma.userAnimeList.upsert as jest.Mock).mockResolvedValue({ id: 1 });

        const req = createNextRequest('POST', {
            body: {
                animeId: 12,
                status: 'watching',
                score: 8,
                comment: 'Cool anime',
                episodesWatched: 5
            },
            token: 'valid-token'
        });

        const res = await POST(req);
        expect(res.status).toBe(200);
        const data = await res.json();
        expect(data).toEqual({ id: 1 });
    });
});

describe('GET /api/user/anime', () => {
    it('Повертає 401 коли немає токена', async () => {
        const req = createNextRequest('GET');
        const res = await GET(req);
        expect(res.status).toBe(401);
    });

    it('Повертає 400 коли не передано animeId', async () => {
        (jwt.verify as jest.Mock).mockReturnValue({ userId: mockedUserId });

        const req = createNextRequest('GET', {
            token: 'valid-token'
        });
        const res = await GET(req);
        expect(res.status).toBe(400);
    });

    it('Повертає null якщо запис не знайдено', async () => {
        (jwt.verify as jest.Mock).mockReturnValue({ userId: mockedUserId });
        (prisma.userAnimeList.findUnique as jest.Mock).mockResolvedValue(null);

        const req = createNextRequest('GET', {
            searchParams: { animeId: '15' },
            token: 'valid-token'
        });
        const res = await GET(req);
        expect(res.status).toBe(200);
        const data = await res.json();
        expect(data).toBeNull();
    });

    it('Повертає знайдений запис', async () => {
        const mockEntry = { animeId: 15, status: 'completed' };
        (jwt.verify as jest.Mock).mockReturnValue({ userId: mockedUserId });
        (prisma.userAnimeList.findUnique as jest.Mock).mockResolvedValue(mockEntry);

        const req = createNextRequest('GET', {
            searchParams: { animeId: '15' },
            token: 'valid-token'
        });
        const res = await GET(req);
        const data = await res.json();
        expect(data).toEqual(mockEntry);
    });
});

describe('DELETE /api/user/anime', () => {
    it('Повертає 401 коли немає токена', async () => {
        const req = createNextRequest('DELETE');
        const res = await DELETE(req);
        expect(res.status).toBe(401);
    });

    it('Повертає 400 коли не передано animeId', async () => {
        (jwt.verify as jest.Mock).mockReturnValue({ userId: mockedUserId });
        const req = createNextRequest('DELETE', {
            token: 'valid-token'
        });
        const res = await DELETE(req);
        expect(res.status).toBe(400);
    });

    it('Видаляє запис і повертає ok: true', async () => {
        (jwt.verify as jest.Mock).mockReturnValue({ userId: mockedUserId });
        (prisma.userAnimeList.delete as jest.Mock).mockResolvedValue({});

        const req = createNextRequest('DELETE', {
            searchParams: { animeId: '15' },
            token: 'valid-token'
        });
        const res = await DELETE(req);
        expect(res.status).toBe(200);
        const data = await res.json();
        expect(data).toEqual({ ok: true });
    });
});