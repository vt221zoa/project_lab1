import { POST } from '@/app/api/auth/register/route';
import { NextRequest } from 'next/server';
import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prisma';

type RegisterPayload = {
    email: string;
    password: string;
    name: string;
};

afterEach(() => jest.clearAllMocks());

function createNextRequest(body: RegisterPayload) {
    return {
        json: async () => body,
    } as unknown as NextRequest;
}

describe('POST /auth/register', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('Повертає 400 коли не всі поля задано', async () => {
        const req = createNextRequest({ email: '', password: '', name: '' });
        const res = await POST(req);
        expect(res.status).toBe(400);
        const data = await res.json();
        expect(data.message).toMatch(/Всі поля обов'язкові/);
    });

    it('Повертає 409 коли вже існує користувач з поштою та ім\'ям', async () => {
        const existingUser = { id: 2, email: 'test@mail.com', name: 'tester', password: 'pw' };
        (prisma.user.findFirst as jest.Mock).mockResolvedValue(existingUser);

        const req = createNextRequest({ email: existingUser.email, password: 'any', name: existingUser.name });
        const res = await POST(req);
        expect(res.status).toBe(409);
        const data = await res.json();
        expect(data.message).toMatch(/з такою поштою і нікнеймом вже існує/);
    });

    it('Повертає 409 коли вже існує користувач з поштою', async () => {
        const existingUser = { id: 3, email: 'exist@mail.com', name: 'other', password: 'pw' };
        (prisma.user.findFirst as jest.Mock).mockResolvedValue(existingUser);

        const req = createNextRequest({ email: existingUser.email, password: 'abc', name: 'freshname' });
        const res = await POST(req);
        expect(res.status).toBe(409);
        const data = await res.json();
        expect(data.message).toMatch(/з такою поштою вже існує/);
    });

    it('Повертає 409 коли вже існує користувач з іменем', async () => {
        const existingUser = { id: 5, email: 'other@mail.com', name: 'dupl', password: 'pw' };
        (prisma.user.findFirst as jest.Mock).mockResolvedValue(existingUser);

        const req = createNextRequest({ email: 'fine@mail.com', password: 'pass', name: existingUser.name });
        const res = await POST(req);
        expect(res.status).toBe(409);
        const data = await res.json();
        expect(data.message).toMatch(/з таким нікнеймом вже існує/);
    });

    it('Користувач створюється, пароль хешується, повертається 201', async () => {
        (prisma.user.findFirst as jest.Mock).mockResolvedValue(null);
        (bcrypt.hash as jest.Mock).mockResolvedValue('hashedpass321');
        (prisma.user.create as jest.Mock).mockResolvedValue({
            id: 22, email: 'cool@mail.ua', name: 'TopUser', password: 'hashedpass321'
        });
        const req = createNextRequest({ email: 'cool@mail.ua', password: 'realpass', name: 'TopUser' });

        const res = await POST(req);
        expect(bcrypt.hash).toHaveBeenCalledWith('realpass', 10);
        expect(res.status).toBe(201);
        const data = await res.json();
        expect(data.message).toMatch(/створений/);
        expect(data.user).toEqual({
            id: 22,
            email: 'cool@mail.ua',
            name: 'TopUser',
        });
    });

    it('Повертає 500 при помилці', async () => {
        (prisma.user.findFirst as jest.Mock).mockRejectedValue(new Error('fail'));
        const req = createNextRequest({ email: 'fail@mail.com', password: 'fail', name: 'failname' });
        const res = await POST(req);
        expect(res.status).toBe(500);
        const data = await res.json();
        expect(data.message).toMatch(/server/i);
    });

});