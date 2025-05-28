import React from 'react';
import Link from 'next/link';

type AnimeEntry = {
    animeId: number;
    status: string;
    score: number | null;
    episodesWatched: number;
    comment?: string | null;
    anime: {
        id: number;
        titleUa?: string | null;
        titleEn: string;
        episodes?: number | null;
    };
};

type Props = {
    animeList: AnimeEntry[];
};

export default function ProfileAnimeTable({ animeList }: Props) {
    if (!animeList.length) {
        return <div>Список порожній</div>;
    }
    return (
        <table className="min-w-full border my-[6px] bg-[white] shadow">
            <thead>
            <tr>
                <th className="p-[2px] ">#</th>
                <th className="p-[2px] text-left">Назва аніме</th>
                <th className="p-[2px] ">Статус</th>
                <th className="p-[2px] ">Оцінка</th>
                <th className="p-[2px] ">Переглянуто</th>
            </tr>
            </thead>
            <tbody>
            {animeList.map((entry, i) => (
                <React.Fragment key={entry.animeId}>
                    <tr>
                        <td className="px-[2px] py-[1px] text-center">{i + 1}</td>
                        <td className="px-[2px] py-[1px] ">
                            <Link
                                href={`/anime/${entry.anime.id}`}
                                className="text-[blue]"
                            >
                                {entry.anime.titleUa || entry.anime.titleEn}
                            </Link>
                        </td>
                        <td className="px-[2px] py-[1px]  text-center">
                            {entry.status}
                        </td>
                        <td className="px-[2px] py-[1px]  text-center">
                            {entry.score ?? '—'}
                        </td>
                        <td className="px-[2px] py-[1px]  text-center">
                            {entry.episodesWatched}
                            {entry.anime.episodes ? ` / ${entry.anime.episodes}` : ""}
                        </td>
                    </tr>
                    {entry.comment && (
                        <tr className="text-[gray]">
                            <td colSpan={5} className="p-[2px]">
                                Коментар: {entry.comment}
                            </td>
                        </tr>
                    )}
                </React.Fragment>
            ))}
            </tbody>
        </table>
    );
}