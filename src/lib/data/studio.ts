import { prisma } from '@/lib/prisma';
import { AnimeCardType2 } from "@/types/types";

export async function getAllStudios() {
    return prisma.studio.findMany();
}

export async function getAnimeByStudioId(studioId: number): Promise<AnimeCardType2[]> {
    const result = await prisma.anime.findMany({
        where: { studioId },
        include: { studio: true },
        orderBy: { dateRelease: 'desc' }
    });
    return result.map(m => ({
        id: m.id,
        titleUa: m.titleUa ?? '',
        titleEn: m.titleEn,
        kind: m.kind,
        dateRelease: m.dateRelease ? m.dateRelease.toISOString() : '',
        imageUrl: m.imageUrl ?? '',
        studio: m.studio ? { name: m.studio.name } : undefined
    }));
}