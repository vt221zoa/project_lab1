import { GET } from '@/app/api/(media)/publisher/[id]/route';
import { prisma } from '@/lib/prisma';
import { NextRequest } from 'next/server';

afterEach(() => jest.clearAllMocks());

describe('/api/publisher/[id]/manga GET', () => {
    it('повертає список манги для видавництва', async () => {
        (prisma.manga.findMany as jest.Mock).mockResolvedValue([
            { id: 9, title: 'One Piece', publisher: { id: 1, name: 'Shueisha' } }
        ]);

        const req: NextRequest = new NextRequest('http://localhost');
        const params: { params: Promise<{ id: string }> } = { params: Promise.resolve({ id: '1' }) };

        const response = await GET(req, params);

        expect(response.status).toBe(200);
        const data = await response.json();
        expect(Array.isArray(data)).toBe(true);
        expect(data[0].title).toBe('One Piece');
        expect(prisma.manga.findMany).toHaveBeenCalledWith({
            where: { publisherId: 1 },
            include: { publisher: true },
            orderBy: { id: 'asc' },
        });
    });
});