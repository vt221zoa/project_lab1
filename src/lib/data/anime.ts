import { prisma } from '@/lib/prisma';
import { AnimeCardType2, AnimeFullType } from '@/types/types';

export async function getAllAnimes(): Promise<AnimeCardType2[]> {
    const raw = await prisma.anime.findMany({
        include: { studio: true },
        orderBy: { dateRelease: 'desc' }
    });

    return raw.map(a => ({
        id: a.id,
        titleUa: a.titleUa ?? undefined,
        titleEn: a.titleEn,
        kind: a.kind,
        status: a.status,
        dateRelease: a.dateRelease ? a.dateRelease.toISOString() : undefined,
        imageUrl: a.imageUrl ?? undefined,
        studio: a.studio ? { name: a.studio.name ?? null } : undefined
    }));
}

export async function getAnimeById(animeId: number): Promise<AnimeFullType | null> {
    const a = await prisma.anime.findUnique({
        where: { id: animeId },
        include: { studio: true, genres: { include: { genre: true } } }
    });
    if (!a) return null;
    return {
        id: a.id,
        titleUa: a.titleUa ?? null,
        titleEn: a.titleEn,
        titleJp: a.titleJp ?? null,
        description: a.description ?? null,
        kind: a.kind,
        status: a.status,
        episodes: a.episodes ?? null,
        rating: a.rating ?? null,
        dateRelease: a.dateRelease ? a.dateRelease.toISOString() : null,
        imageUrl: a.imageUrl ?? null,
        studio: a.studio
            ? {
                id: a.studio.id,
                logoUrl: a.studio.logoUrl ?? null,
                name: a.studio.name ?? null
            }
            : undefined,
        genres: a.genres?.map(g => ({
            genre: g.genre
                ? {
                    id: Number(g.genre.id),
                    name: g.genre.name ?? null
                }
                : undefined
        }))
    } as AnimeFullType;
}

export async function getOngoingAnimes(): Promise<AnimeCardType2[]> {
    const result = await prisma.anime.findMany({
        where: { status: 'Онгоїнг' },
        include: { studio: true },
    });
    const shuffled = result.sort(() => Math.random() - 0.5).slice(0, 6);

    return shuffled.map(a => ({
        id: a.id,
        titleUa: a.titleUa ?? '',
        titleEn: a.titleEn,
        imageUrl: a.imageUrl ?? '',
        kind: a.kind,
        dateRelease: a.dateRelease ? a.dateRelease.toISOString() : '',
        studio: a.studio ? { name: a.studio.name ?? '' } : undefined,
    }));
}
