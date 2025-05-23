import React from 'react';
import { AnimeCardType2 } from '@/types/types';
import {MediaCard} from "@/components/MediaCard";

interface Props {
    params: {
        id: string;
    };
}

export default async function Page({ params }: Props) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/studio/${params.id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        return <div className="p-4 text-red-600">Помилка при завантаженні аніме.</div>;
    }

    const animeList: AnimeCardType2[] = await res.json();
    if (!animeList[0]?.studio) {
        return (
            <div className="text-2xl font-bold mb-4 text-red-600">
                Студію не знайдено
            </div>
        );
    }

    const studioName = animeList[0].studio.name;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">
                Аніме за студією <span className="text-blue-600">{studioName}</span>
            </h1>
            <div className="flex flex-wrap gap-[8px] justify-start">
                {animeList.map((anime) => (
                    <MediaCard
                        type='anime'
                        key={anime.id}
                        id={anime.id}
                        titleUa={anime?.titleUa}
                        titleEn={anime.titleEn}
                        imageUrl={anime?.imageUrl}
                        studioName={anime.studio?.name ?? ''}
                    />
                ))}
            </div>
        </div>
    );
}
