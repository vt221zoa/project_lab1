import type { MangaFullType } from '@/types/types';
import type { MangaData } from '@/components/media/forms/MangaForm';

export function mapMangaFullTypeToMangaData(manga: MangaFullType | null | undefined): MangaData | undefined {
    if (!manga) return undefined;
    return {
        titleUa: manga.titleUa ?? "",
        titleEn: manga.titleEn,
        titleJp: manga.titleJp ?? "",
        description: manga.description ?? "",
        kind: manga.kind,
        chapters: manga.chapters ?? 0,
        volumes: manga.volumes ?? 0,
        status: manga.status,
        dateRelease: manga.dateRelease ?? "",
        imageUrl: manga.imageUrl ?? "",
        publisher: manga.publisher ? { id: manga.publisher.id, name: manga.publisher.name ?? "" } : undefined,
        genres: manga.genres ? manga.genres.filter(g => g.genre).map(g => ({ genre: { id: Number(g.genre!.id), name: g.genre!.name ?? "" }})) : [],
    };
}