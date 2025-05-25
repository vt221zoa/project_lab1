import type { AnimeFullType } from '@/types/types';
import type { AnimeData } from '@/components/AnimeForm';

export function mapAnimeFullTypeToAnimeData(anime: AnimeFullType | null | undefined): AnimeData | undefined {
    if (!anime) return undefined;
    return {
        titleUa: anime.titleUa ?? "",
        titleEn: anime.titleEn,
        titleJp: anime.titleJp ?? "",
        description: anime.description ?? "",
        kind: anime.kind,
        episodes: anime.episodes ?? 0,
        status: anime.status,
        dateRelease: anime.dateRelease ?? "",
        imageUrl: anime.imageUrl ?? "",
        rating: anime.rating ?? "",
        studio: anime.studio ? { id: anime.studio.id, name: anime.studio.name ?? "" } : undefined,
        genres: anime.genres ? anime.genres.filter(g => g.genre).map(g => ({ genre: { id: Number(g.genre!.id), name: g.genre!.name ?? "" }})) : [],
    };
}