import { prisma } from '@/lib/prisma';
import { MangaCardType2 } from '@/types/types';

export async function getAllPublishers() {
    return prisma.publisher.findMany();
}

export async function getMangaByPublisherId(publisherId: number): Promise<MangaCardType2[]> {
    const result = await prisma.manga.findMany({
        where: { publisherId },
        include: { publisher: true },
        orderBy: { dateRelease: 'desc' }
    });
    return result.map(m => ({
        id: m.id,
        titleUa: m.titleUa ?? '',
        titleEn: m.titleEn,
        kind: m.kind,
        dateRelease: m.dateRelease ? m.dateRelease.toISOString() : '',
        imageUrl: m.imageUrl ?? '',
        publisher: m.publisher ? { name: m.publisher.name } : undefined
    }));
}