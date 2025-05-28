'use client';
import { useEffect, useState } from 'react';
import ProfileAnimeTable from "@/components/users/(media_List)/ProfileAnimeTable";
import ProfileMangaTable from "@/components/users/(media_List)/ProfileMangaTable";
import SectionInfo from "@/components/SectionInfo";

type AnimeEntry = {
    animeId: number;
    status: string;
    score: number | null;
    episodesWatched: number;
    anime: {
        id: number;
        titleUa?: string | null;
        titleEn: string;
        imageUrl?: string | null;
        episodes?: number | null;
    };
};

type MangaEntry = {
    mangaId: number;
    status: string;
    score: number | null;
    chaptersRead: number;
    volumesRead: number;
    manga: {
        id: number;
        titleUa?: string | null;
        titleEn: string;
        imageUrl?: string | null;
        chapters?: number | null;
        volumes?: number | null;
    };
};

type Stats = {
    totalAnime: number;
    completedAnime: number;
    watchingAnime: number;
    totalEpisodes: number;

    totalManga: number;
    completedManga: number;
    readingManga: number;
    totalChapters: number;
};

export default function ProfileMediaList() {
    const [animeList, setAnimeList] = useState<AnimeEntry[]>([]);
    const [mangaList, setMangaList] = useState<MangaEntry[]>([]);
    const [loading, setLoading] = useState(true);

    const [stats, setStats] = useState<Stats>({
        totalAnime: 0, completedAnime: 0, watchingAnime: 0, totalEpisodes: 0,
        totalManga: 0, completedManga: 0, readingManga: 0, totalChapters: 0,
    });

    useEffect(() => {
        setLoading(true);
        Promise.all([
            fetch('/api/profile/user-list/anime/all-list/').then(res => res.ok ? res.json() : []),
            fetch('/api/profile/user-list/manga/all-list/').then(res => res.ok ? res.json() : []),
        ]).then(([animes, mangas]) => {
            setAnimeList(animes || []);
            setMangaList(mangas || []);

            const animeStats = {
                totalAnime: animes.length,
                completedAnime: animes.filter((a: AnimeEntry) => a.status === 'Переглянуто').length,
                watchingAnime: animes.filter((a: AnimeEntry) => a.status === 'Дивлюся').length,
                totalEpisodes: animes.reduce(
                    (sum: number, a: AnimeEntry) => sum + (a.episodesWatched || 0), 0),
            };
            const mangaStats = {
                totalManga: mangas.length,
                completedManga: mangas.filter((m: MangaEntry) => m.status === 'Прочитав').length,
                readingManga: mangas.filter((m: MangaEntry) => m.status === 'Читаю').length,
                totalChapters: mangas.reduce(
                    (sum: number, m: MangaEntry) => sum + (m.chaptersRead || 0), 0),
            };

            setStats({ ...animeStats, ...mangaStats });
        }).finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Завантаження...</div>;

    return (
        <div className="space-y-[12px]">
            <section className="flex flex-col justify-between items-center">
                <SectionInfo text='Статистика' color='#830000' />
                <div className="flex flex-row flex-wrap gap-[40px]">
                    <div className="bg-[#c6c6c6] rounded-[3px] p-[4px] min-w-[150px]">
                        <b>Аніме:</b>
                        <div>Усього: {stats.totalAnime}</div>
                        <div>Переглянуто: {stats.completedAnime}</div>
                        <div>Дивлюся: {stats.watchingAnime}</div>
                        <div>Епізодів переглянуто: {stats.totalEpisodes}</div>
                    </div>
                    <div className="bg-[#c6c6c6] rounded-[3px] p-[4px] min-w-[150px]">
                        <b>Манга:</b>
                        <div>Усього: {stats.totalManga}</div>
                        <div>Прочитано: {stats.completedManga}</div>
                        <div>Читаю: {stats.readingManga}</div>
                        <div>Розділів прочитано: {stats.totalChapters}</div>
                    </div>
                </div>
            </section>

            <div className='flex flex-col gap-[30px] mt-[30px]'>
                <section>
                    <SectionInfo text='Мій список аніме' color='#0041ce' />
                    <ProfileAnimeTable animeList={animeList} />
                </section>

                <section>
                    <SectionInfo text='Мій список манги' />
                    <ProfileMangaTable mangaList={mangaList} />
                </section>
            </div>
        </div>
    );
}