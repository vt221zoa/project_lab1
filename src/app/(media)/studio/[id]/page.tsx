import React from 'react';
import {MediaCard} from "@/components/MediaCard";
import {notFound} from "next/navigation";
import {getAnimeByStudioId} from "@/lib/data/studio";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const studioId = Number(id);
    const animeList  = await getAnimeByStudioId(studioId);

    if (!animeList .length || !animeList [0].studio) {
        notFound();
    }

    const studioName = animeList [0].studio!.name;

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
