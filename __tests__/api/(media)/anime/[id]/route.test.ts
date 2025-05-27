import { GET, DELETE, PATCH } from '@/app/api/(media)/anime/[id]/route';
import { prisma } from '@/lib/prisma';

import { buildUniqueOrConditions } from '@/utils/buildUniqueOrConditions';

afterEach(() => jest.clearAllMocks());

describe('/api/anime/[id] GET', () => {
    it('повертає аніме за id (200)', async () => {
        (prisma.anime.findUnique as jest.Mock).mockResolvedValue({
            id: 42,
            titleUa: 'Тайтл UA',
            titleEn: 'Title EN',
            titleJp: 'タイトルJP',
            description: 'desc',
            kind: 'tv',
            episodes: 12,
            status: 'ongoing',
            dateRelease: new Date('2021-01-01'),
            imageUrl: 'url',
            rating: 'PG',
            studio: {id: 1, logoUrl: 'logo', name: 'Studio1'},
            genres: [{genre: {id: 5, name: 'Comedy'}}],
        });

        const params = Promise.resolve({id: '42'});
        const response = await GET({} as Request, {params});
        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data.titleEn).toBe('Title EN');
        expect(data.genres[0].genre.name).toBe('Comedy');
    });

    it('повертає 404 якщо не знайдено', async () => {
        (prisma.anime.findUnique as jest.Mock).mockResolvedValue(null);
        const params = Promise.resolve({id: '999'});
        const response = await GET({} as Request, {params});
        expect(response.status).toBe(404);
        const data = await response.json();
        expect(data.error).toMatch(/не знайдено/i);
    });
})

describe('/api/anime/[id] DELETE', () => {
    it('успішно видаляє аніме (200)', async () => {
        (prisma.animeGenreOnAnime.deleteMany as jest.Mock).mockResolvedValue(undefined);
        (prisma.anime.delete as jest.Mock).mockResolvedValue(undefined);

        const params = Promise.resolve({ id: '77' });
        const response = await DELETE({} as Request, { params });
        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data.success).toBe(true);
    });

    it('повертає 500 при помилці при видаленні', async () => {
        (prisma.animeGenreOnAnime.deleteMany as jest.Mock).mockRejectedValue(new Error('err'));
        const params = Promise.resolve({ id: '77' });
        const response = await DELETE({} as Request, { params });
        expect(response.status).toBe(500);
        const data = await response.json();
        expect(data.error).toMatch(/не вдалося видалити/i);
    });
})

describe('/api/anime/[id] PATCH', () => {
    afterEach(() => jest.clearAllMocks());

    const makeRequest = (body: unknown) =>
        ({ json: async () => body } as unknown as Request);

    it('успішно оновлює аніме (200)', async () => {
        (buildUniqueOrConditions as jest.Mock).mockReturnValue([]);
        (prisma.animeGenreOnAnime.deleteMany as jest.Mock).mockResolvedValue(undefined);
        (prisma.animeGenreOnAnime.createMany as jest.Mock).mockResolvedValue(undefined);
        (prisma.anime.update as jest.Mock).mockResolvedValue({
            id: 13, titleEn: 'Updated!', genres: [],
        });

        const params = Promise.resolve({ id: '13' });
        const req = makeRequest({ titleEn: 'Updated!', genreIds: [] });
        const response = await PATCH(req, { params });
        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data.success).toBe(true);
        expect(data.anime.titleEn).toBe('Updated!');
    });

    it('повертає 400 якщо дублікат', async () => {
        (buildUniqueOrConditions as jest.Mock).mockReturnValue(['x']);
        (prisma.anime.findFirst as jest.Mock).mockResolvedValue({ id: 999 });
        const params = Promise.resolve({ id: '13' });
        const req = makeRequest({ titleEn: 'Dub!', genreIds: [] });
        const response = await PATCH(req, { params });
        expect(response.status).toBe(400);
        const data = await response.json();
        expect(data.error).toMatch(/вже існує/);
    });

    it('повертає 500 при помилці', async () => {
        (buildUniqueOrConditions as jest.Mock).mockReturnValue([]);
        (prisma.animeGenreOnAnime.deleteMany as jest.Mock).mockRejectedValue(new Error('fail'));
        const params = Promise.resolve({ id: '13' });
        const req = makeRequest({ titleEn: 'err', genreIds: [] });
        const response = await PATCH(req, { params });
        expect(response.status).toBe(500);
        const data = await response.json();
        expect(data.error).toBe('Не вдалося оновити аніме');
    });
})