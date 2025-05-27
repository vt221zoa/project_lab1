import { prisma } from '@/lib/prisma';
import { MangaCardType2, MangaFullType } from '@/types/types';

export async function getAllMangas(): Promise<MangaCardType2[]> {
    const raw = await prisma.manga.findMany({
        include: { publisher: true },
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
        publisher: a.publisher ? { name: a.publisher.name ?? null } : undefined
    }));
}

export async function getMangaById(mangaId: number): Promise<MangaFullType | null> {
    const a = await prisma.manga.findUnique({
        where: { id: mangaId },
        include: { publisher: true, genres: { include: { genre: true } } }
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
        chapters: a.chapters ?? null,
        volumes: a.volumes ?? null,
        dateRelease: a.dateRelease ? a.dateRelease.toISOString() : null,
        imageUrl: a.imageUrl ?? null,
        studio: a.publisher
            ? {
                id: a.publisher.id,
                name: a.publisher.name ?? null
            }
            : undefined,
        genres: a.genres?.map(g => ({
            genre: g.genre
                ? {
                    id: String(g.genre.id),
                    name: g.genre.name ?? null
                }
                : undefined
        }))
    } as MangaFullType;
}

export async function getOngoingMangas(): Promise<MangaCardType2[]> {
    const result = await prisma.manga.findMany({
        where: { status: 'Випускається' },
        include: { publisher: true },
    });
    const shuffled = result.sort(() => Math.random() - 0.5).slice(0, 6);
    return shuffled.map(m => ({
        id: m.id,
        titleUa: m.titleUa ?? '',
        titleEn: m.titleEn,
        imageUrl: m.imageUrl ?? '',
        kind: m.kind,
        dateRelease: m.dateRelease ? m.dateRelease.toISOString() : '',
        publisher: m.publisher ? { name: m.publisher.name ?? '' } : undefined,
    }));
}
