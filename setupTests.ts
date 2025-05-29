jest.mock('@/lib/prisma', () => ({
    prisma: {
        anime: {
            findMany: jest.fn(),
            findUnique: jest.fn(),
            findFirst: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
        manga: {
            findMany: jest.fn(),
            findUnique: jest.fn(),
            findFirst: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
        mangaGenreOnManga: {
            deleteMany: jest.fn(),
            createMany: jest.fn(),
        },
        animeGenreOnAnime: {
            deleteMany: jest.fn(),
            createMany: jest.fn(),
        },
        userAnimeList: {
            deleteMany: jest.fn(),
            upsert: jest.fn(),
            findUnique: jest.fn(),
            findMany: jest.fn(),
            delete: jest.fn(),
        },
        userMangaList: {
            deleteMany: jest.fn(),
            upsert: jest.fn(),
            findUnique: jest.fn(),
            findMany: jest.fn(),
            delete: jest.fn(),
        },
        studio: {
            findMany: jest.fn(),
        },
        publisher: {
            findMany: jest.fn(),
        },
        user: {
            findUnique: jest.fn(),
            findFirst: jest.fn(),
            create: jest.fn(),
        },
    },
}));
jest.mock('@/utils/buildUniqueOrConditions', () => ({
    buildUniqueOrConditions: jest.fn(() => []),
}));
jest.mock('bcrypt');
jest.mock('jsonwebtoken');
jest.mock("jose", () => ({
    jwtVerify: jest.fn(),
}));
