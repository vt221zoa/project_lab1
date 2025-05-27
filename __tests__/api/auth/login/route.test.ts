import { POST } from '@/app/api/auth/login/route';
import { NextRequest } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';

type LoginPayload = {
    email: string;
    password: string;
};

afterEach(() => jest.clearAllMocks());

function createNextRequest(body: LoginPayload) {
    return {
        json: async () => body,
    } as unknown as NextRequest;
}

describe('POST /auth/login', () => {
    const FAKE_USER = {
        id: 1,
        email: 'test@mail.com',
        password: 'hashedpass',
        name: 'FAKE TAXI',
        isAdmin: false,
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('повертає 400 якщо не введено email або password', async () => {
        const req = createNextRequest({ email: '', password: '' });

        const res = await POST(req);
        expect(res.status).toBe(400);
        const data = await res.json();
        expect(data.message).toMatch(/обов'язкові/i);
    });

    it('повертає 401 для неіснуючого користувача', async () => {
        const findUnique = prisma.user.findUnique as jest.Mock;
        findUnique.mockResolvedValue(null);

        (bcrypt.compare as jest.Mock).mockResolvedValue(false);

        const req = createNextRequest({ email: 'notuser@mail.com', password: '123456' });

        const res = await POST(req);
        expect(res.status).toBe(401);
        const data = await res.json();
        expect(data.message).toMatch(/email або пароль/i);
    });

    it('повертає 401 якщо пароль не підходить', async () => {
        const findUnique = prisma.user.findUnique as jest.Mock;
        findUnique.mockResolvedValue({ ...FAKE_USER });
        (bcrypt.compare as jest.Mock).mockResolvedValue(false);

        const req = createNextRequest({ email: FAKE_USER.email, password: 'wrongpass' });

        const res = await POST(req);
        expect(res.status).toBe(401);
        const data = await res.json();
        expect(data.message).toMatch(/email або пароль/i);
    });

    it('повертає токен і коректні дані при вдалому логіні', async () => {
        const findUnique = prisma.user.findUnique as jest.Mock;
        findUnique.mockResolvedValue({ ...FAKE_USER });
        (bcrypt.compare as jest.Mock).mockResolvedValue(true);
        (jwt.sign as jest.Mock).mockReturnValue('token123');

        const req = createNextRequest({ email: FAKE_USER.email, password: 'testpass' });

        const res = await POST(req);
        expect(res.status).toBe(200);
        const data = await res.json();

        expect(data.token).toBe('token123');
        expect(data.message).toMatch(/успішний/i);
        expect(data.user).toEqual({
            id: FAKE_USER.id,
            email: FAKE_USER.email,
            name: FAKE_USER.name,
            isAdmin: FAKE_USER.isAdmin,
        });
    });

    it('повертає 500 при помилці', async () => {
        const findUnique = prisma.user.findUnique as jest.Mock;
        findUnique.mockRejectedValue(new Error('Unexpected'));

        const req = createNextRequest({ email: 'err@mail.com', password: 'err' });

        const res = await POST(req);
        expect(res.status).toBe(500);
        const data = await res.json();
        expect(data.message).toMatch(/server/i);
    });
});