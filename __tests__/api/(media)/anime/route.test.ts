import { GET, POST } from '@/app/api/(media)/anime/route';
import { buildUniqueOrConditions } from '@/utils/buildUniqueOrConditions';
import { prisma } from '@/lib/prisma';

afterEach(() => jest.clearAllMocks());

describe('/api/anime GET', () => {
    it('повертає список аніме', async () => {
        (prisma.anime.findMany as jest.Mock).mockResolvedValue([
            { id: 1, titleEn: 'Cowboy Bebop', studio: { id: 1, name: 'Sunrise' } },
        ]);
        const response = await GET();
        const data = await response.json();
        expect(data).toEqual([
            { id: 1, titleEn: 'Cowboy Bebop', studio: { id: 1, name: 'Sunrise' } },
        ]);
        expect(prisma.anime.findMany).toHaveBeenCalled();
    });

    it('повертає 500 при помилці', async () => {
        (prisma.anime.findMany as jest.Mock).mockRejectedValue(new Error('DB Error'));
        const response = await GET();
        expect(response.status).toBe(500);
        const data = await response.json();
        expect(data.message).toBe('Щось пішло не так');
    });
});

describe('/api/anime POST', () => {
    const makeRequest = (body: object) =>
        ({ json: jest.fn().mockResolvedValue(body) } as unknown as Request);

    afterEach(() => jest.clearAllMocks());

    it('створює аніме та повертає результат', async () => {
        (prisma.anime.findFirst as jest.Mock).mockResolvedValue(null);
        (prisma.anime.create as jest.Mock).mockResolvedValue({ id: 3, titleEn: 'New' });
        (prisma.anime.findUnique as jest.Mock).mockResolvedValue({ id: 3, titleEn: 'New', genres: [] });

        const request = makeRequest({ titleEn: 'New', genreIds: [] }) as unknown as Request;

        const response = await POST(request);
        const json = await response.json();
        expect(json.success).toBe(true);
        expect(json.anime.titleEn).toBe('New');
        expect(prisma.anime.create).toHaveBeenCalled();
    });

    it('повертає 400 якщо дублікат', async () => {
        (buildUniqueOrConditions as jest.Mock).mockReturnValue(['x']);
        (prisma.anime.findFirst as jest.Mock).mockResolvedValue({ id: 1 });

        const request = makeRequest({ titleEn: 'Cowboy Bebop', genreIds: [] });
        const response = await POST(request);

        expect(response.status).toBe(400);
        const json = await response.json();
        expect(json.error).toBeDefined();
    });

    it('повертає 500 при помилці', async () => {
        (buildUniqueOrConditions as jest.Mock).mockReturnValue(['x']);
        (prisma.anime.findFirst as jest.Mock).mockRejectedValue(new Error('fail'));
        const request = makeRequest({ titleEn: 'ERR', genreIds: [] });
        const response = await POST(request);
        expect(response.status).toBe(500);
        const json = await response.json();
        expect(json.error).toBe('Не вдалося створити аніме');
    });
});