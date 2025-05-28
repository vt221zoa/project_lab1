import { GET, DELETE, PATCH } from '@/app/api/(media)/manga/[id]/route';
import { prisma } from '@/lib/prisma';

import { buildUniqueOrConditions } from '@/utils/buildUniqueOrConditions';

afterEach(() => jest.clearAllMocks());

describe('/api/manga/[id] GET', () => {
    it('повертає мангу за id (200)', async () => {
        (prisma.manga.findUnique as jest.Mock).mockResolvedValue({
            id: 13,
            titleEn: 'Berserk',
            publisher: { id: 2, name: 'Hakusensha' },
            genres: [{ genre: { id: 1, name: 'Dark Fantasy' } }],
            dateRelease: new Date('2020-01-01'),
        });
        const params = Promise.resolve({id: '13'});
        const response = await GET({} as Request, {params});
        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data.titleEn).toBe('Berserk');
        expect(data.genres[0].genre.name).toBe('Dark Fantasy');
    });

    it('повертає 404 якщо не знайдено', async () => {
        (prisma.manga.findUnique as jest.Mock).mockResolvedValue(null);
        const params = Promise.resolve({id: '999'});
        const response = await GET({} as Request, {params});
        expect(response.status).toBe(404);
        const data = await response.json();
        expect(data.error).toMatch(/не знайдено/i);
    });
});

describe('/api/manga/[id] DELETE', () => {
    it('успішно видаляє мангу (200)', async () => {
        (prisma.mangaGenreOnManga.deleteMany as jest.Mock).mockResolvedValue(undefined);
        (prisma.manga.delete as jest.Mock).mockResolvedValue(undefined);
        const params = Promise.resolve({ id: '77' });
        const response = await DELETE({} as Request, { params });
        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data.success).toBe(true);
    });

    it('повертає 500 при помилці при видаленні жанрів', async () => {
        (prisma.userMangaList.deleteMany as jest.Mock).mockResolvedValue(undefined);
        (prisma.mangaGenreOnManga.deleteMany as jest.Mock).mockRejectedValue(new Error('err'));
        const params = Promise.resolve({ id: '77' });
        const response = await DELETE({} as Request, { params });
        expect(response.status).toBe(500);
        const data = await response.json();
        expect(data.error).toMatch(/не вдалося видалити/i);
    });

    it('повертає 500 при помилці при видаленні userMangaList', async () => {
        (prisma.userMangaList.deleteMany as jest.Mock).mockResolvedValue(undefined);
        (prisma.mangaGenreOnManga.deleteMany as jest.Mock).mockRejectedValue(new Error('err'));
        const params = Promise.resolve({ id: '77' });
        const response = await DELETE({} as Request, { params });
        expect(response.status).toBe(500);
        const data = await response.json();
        expect(data.error).toMatch(/не вдалося видалити/i);
    });

    it('повертає 500 при помилці при видаленні манги', async () => {
        (prisma.mangaGenreOnManga.deleteMany as jest.Mock).mockResolvedValue(undefined);
        (prisma.userMangaList.deleteMany as jest.Mock).mockResolvedValue(undefined);
        (prisma.manga.delete as jest.Mock).mockRejectedValue(new Error('mangaErr'));
        const params = Promise.resolve({ id: '77' });
        const response = await DELETE({} as Request, { params });
        expect(response.status).toBe(500);
        const data = await response.json();
        expect(data.error).toMatch(/не вдалося видалити/i);
    });
});

describe('/api/manga/[id] PATCH', () => {
    afterEach(() => jest.clearAllMocks());

    const makeRequest = (body: unknown) =>
        ({ json: async () => body } as unknown as Request);


    it('успішно оновлює мангу (200)', async () => {
        (buildUniqueOrConditions as jest.Mock).mockReturnValue([]);
        (prisma.mangaGenreOnManga.deleteMany as jest.Mock).mockResolvedValue(undefined);
        (prisma.mangaGenreOnManga.createMany as jest.Mock).mockResolvedValue(undefined);
        (prisma.manga.update as jest.Mock).mockResolvedValue({
            id: 44, titleEn: 'Updated!', genres: []
        });

        const params = Promise.resolve({ id: '44' });
        const req = makeRequest({ titleEn: 'Updated!', genreIds: [] });
        const response= await PATCH(req, { params });
        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data.success).toBe(true);
        expect(data.manga.titleEn).toBe('Updated!');
    });

    it('повертає 400 якщо дублікат', async () => {
        (buildUniqueOrConditions as jest.Mock).mockReturnValue(['x']);
        (prisma.manga.findFirst as jest.Mock).mockResolvedValue({ id: 999 });
        const params = Promise.resolve({ id: '44' });
        const req = makeRequest({ titleEn: 'Dub!', genreIds: [] });
        const response = await PATCH(req, { params });
        expect(response.status).toBe(400);
        const data = await response.json();
        expect(data.error).toMatch(/вже існує/);
    });

    it('повертає 500 при помилці', async () => {
        (buildUniqueOrConditions as jest.Mock).mockReturnValue([]);
        (prisma.mangaGenreOnManga.deleteMany as jest.Mock).mockRejectedValue(new Error('fail'));
        const params = Promise.resolve({ id: '44' });
        const req = makeRequest({ titleEn: 'err', genreIds: [] });
        const response = await PATCH(req, { params });
        expect(response.status).toBe(500);
        const data = await response.json();
        expect(data.error).toBe('Не вдалося оновити мангу');
    });
});