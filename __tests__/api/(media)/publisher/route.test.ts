import { GET } from '@/app/api/(media)/publisher/route';
import { prisma } from '@/lib/prisma';

afterEach(() => jest.clearAllMocks());

describe('/api/publisher GET', () => {
    it('повертає список видавництв', async () => {
        (prisma.publisher.findMany as jest.Mock).mockResolvedValue([
            { id: 1, name: 'Shueisha' },
            { id: 2, name: 'Kodansha' },
        ]);
        const response = await GET();
        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data).toEqual([
            { id: 1, name: 'Shueisha' },
            { id: 2, name: 'Kodansha' },
        ]);
        expect(prisma.publisher.findMany).toHaveBeenCalledWith({
            select: { id: true, name: true },
            orderBy: { name: 'asc' },
        });
    });

    it('повертає 500 при помилці', async () => {
        (prisma.publisher.findMany as jest.Mock).mockRejectedValue(new Error('DB error'));
        const response = await GET();
        expect(response.status).toBe(500);
        const data = await response.json();
        expect(data.message).toBe('Щось пішло не так');
    });
});