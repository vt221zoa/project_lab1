import { GET, DELETE, PATCH } from '@/app/api/(media)/manga/[id]/route';
import { prisma } from '@/lib/prisma';
import { buildUniqueOrConditions } from '@/utils/buildUniqueOrConditions';

afterEach(() => jest.clearAllMocks());

describe('/api/manga/[id] GET', () => {
    it('повертає мангу за id (200)', async () => {
        (prisma.manga.findUnique as jest.Mock).mockResolvedValue({
            id: 101,
            titleUa: 'Манга UA',
            titleEn: 'Manga EN',
            titleJp: 'マンガJP',
            description: 'опис манги',
            volumes: 7,
            chapters: 70,
            status: 'ongoing',
            dateRelease: new Date('2020-05-01'),
            imageUrl: 'url',
            rating: 'PG-13',
            magazine: {id: 2, name: 'Magazine1', logoUrl: 'maglogo'},
            genres: [{ genre: { id: 15, name: 'Adventure' } }],
        });
        const params = Promise.resolve({ id: '101' });
        const response = await GET({} as Request, { params });
        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data.titleEn).toBe('Manga EN');
        expect(data.genres[0].genre.name).toBe('Adventure');
    });

    it('повертає 404 якщо не знайдено', async () => {
        (prisma.manga.findUnique as jest.Mock).mockResolvedValue(null);
        const params = Promise.resolve({ id: '999' });
        const response = await GET({} as Request, { params });
        expect(response.status).toBe(404);
        const data = await response.json();
        expect(data.error).toMatch(/не знайдено/i);
    });
});

describe('/api/manga/[id] DELETE', () => {
    it('успішно видаляє мангу (200)', async () => {
        (prisma.mangaGenreOnManga.deleteMany as jest.Mock).mockResolvedValue(undefined);
        (prisma.manga.delete as jest.Mock).mockResolvedValue(undefined);
        const params = Promise.resolve({ id: '55' });
        const response = await DELETE({} as Request, { params });
        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data.success).toBe(true);
    });

    it('повертає 500 при помилці при видаленні', async () => {
        (prisma.mangaGenreOnManga.deleteMany as jest.Mock).mockRejectedValue(new Error('err'));
        const params = Promise.resolve({ id: '55' });
        const response = await DELETE({} as Request, { params });
        expect(response.status).toBe(500);
        const data = await response.json();
        expect(data.error).toMatch(/не вдалося видалити/i);
    });
});

describe('/api/manga/[id] PATCH', () => {
    afterEach(() => jest.clearAllMocks());

    const makeRequest = (body: unknown) => ({
        json: async () => body
    } as unknown as Request);

    it('успішно оновлює мангу (200)', async () => {
        (buildUniqueOrConditions as jest.Mock).mockReturnValue([]);
        (prisma.mangaGenreOnManga.deleteMany as jest.Mock).mockResolvedValue(undefined);
        (prisma.mangaGenreOnManga.createMany as jest.Mock).mockResolvedValue(undefined);
        (prisma.manga.update as jest.Mock).mockResolvedValue({
            id: 33,
            titleEn: 'Updated Manga!',
            genres: [],
        });
        const params = Promise.resolve({ id: '33' });
        const req = makeRequest({ titleEn: 'Updated Manga!', genreIds: [] });
        const response = await PATCH(req, { params });
        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data.success).toBe(true);
        expect(data.manga.titleEn).toBe('Updated Manga!');
    });

    it('повертає 400 якщо дублікат', async () => {
        (buildUniqueOrConditions as jest.Mock).mockReturnValue(['x']);
        (prisma.manga.findFirst as jest.Mock).mockResolvedValue({ id: 888 });
        const params = Promise.resolve({ id: '33' });
        const req = makeRequest({ titleEn: 'Dub Manga!', genreIds: [] });
        const response = await PATCH(req, { params });
        expect(response.status).toBe(400);
        const data = await response.json();
        expect(data.error).toMatch(/вже існує/);
    });

    it('повертає 500 при помилці', async () => {
        (buildUniqueOrConditions as jest.Mock).mockReturnValue([]);
        (prisma.mangaGenreOnManga.deleteMany as jest.Mock).mockRejectedValue(new Error('fail'));
        const params = Promise.resolve({ id: '33' });
        const req = makeRequest({ titleEn: 'err', genreIds: [] });
        const response = await PATCH(req, { params });
        expect(response.status).toBe(500);
        const data = await response.json();
        expect(data.error).toBe('Не вдалося оновити мангу');
    });
});