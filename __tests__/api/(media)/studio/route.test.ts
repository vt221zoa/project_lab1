import { GET } from '@/app/api/(media)/studio/route';
import { prisma } from '@/lib/prisma';

afterEach(() => jest.clearAllMocks());

describe('/api/studio GET', () => {
    it('повертає список студій', async () => {
        (prisma.studio.findMany as jest.Mock).mockResolvedValue([
            { id: 1, name: 'Trigger' },
            { id: 4, name: 'GAINAX' },
        ]);
        const response = await GET();
        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data).toEqual([
            { id: 1, name: 'Trigger' },
            { id: 4, name: 'GAINAX' },
        ]);
        expect(prisma.studio.findMany).toHaveBeenCalledWith({
            select: { id: true, name: true },
            orderBy: { name: 'asc' },
        });
    });

    it('повертає 500 при помилці', async () => {
        (prisma.studio.findMany as jest.Mock).mockRejectedValue(new Error('DB error'));
        const response = await GET();
        expect(response.status).toBe(500);
        const data = await response.json();
        expect(data.message).toBe('Щось пішло не так');
    });
});