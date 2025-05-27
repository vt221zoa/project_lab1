import { GET } from '@/app/api/(media)/studio/[id]/route';
import { prisma } from '@/lib/prisma';
import { NextRequest } from 'next/server';

afterEach(() => jest.clearAllMocks());

describe('/api/studio/[id]/anime GET', () => {
    it('повертає список манги для видавництва', async () => {
        (prisma.anime.findMany as jest.Mock).mockResolvedValue([
            { id: 9, title: 'Cyberpunk: Edgerunners', studio: { id: 3, name: 'Trigger' } }
        ]);

        const req: NextRequest = new NextRequest('http://localhost');
        const params: { params: Promise<{ id: string }> } = { params: Promise.resolve({ id: '3' }) };

        const response = await GET(req, params);

        expect(response.status).toBe(200);
        const data = await response.json();
        expect(Array.isArray(data)).toBe(true);
        expect(data[0].title).toBe('Cyberpunk: Edgerunners');
        expect(prisma.anime.findMany).toHaveBeenCalledWith({
            where: { studioId: 3 },
            include: { studio: true },
            orderBy: { id: 'asc' },
        });
    });
});