import { GET } from '@/app/api/(media)/genre/route';
import { prisma } from '@/lib/prisma';

jest.mock('@/lib/prisma', () => ({
    prisma: {
        genre: {
            findMany: jest.fn(),
        },
    },
}));

afterEach(() => jest.clearAllMocks());

describe('/api/genres GET', () => {
    it('повертає список жанрів', async () => {
        (prisma.genre.findMany as jest.Mock).mockResolvedValue([
            { id: 1, name: 'Comedy' },
            { id: 2, name: 'Drama' },
        ]);
        const response = await GET();
        expect(response.status).toBe(200);
        const data = await response.json();
        expect(Array.isArray(data)).toBe(true);
        expect(data[0].name).toBe('Comedy');
        expect(prisma.genre.findMany).toHaveBeenCalledWith({
            select: { id: true, name: true },
            orderBy: { name: 'asc' },
        });
    });

    it('повертає 500 при помилці', async () => {
        (prisma.genre.findMany as jest.Mock).mockRejectedValue(new Error('Fail'));
        const response = await GET();
        expect(response.status).toBe(500);
        const data = await response.json();
        expect(data.message).toBe('Щось пішло не так');
    });
});