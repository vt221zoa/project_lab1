import React from 'react';
import { MediaCard } from '@/components/MediaCard';
import { notFound } from "next/navigation";
import {getMangaByPublisherId} from "@/lib/data/publisher";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const publisherId = Number(id);
    const mangaList  = await getMangaByPublisherId(publisherId);

    if (!mangaList .length || !mangaList [0].publisher) {
        notFound();
    }

    const publisherName = mangaList [0].publisher!.name;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">
                Манга за видавництвом <span className="text-blue-600">{publisherName}</span>
            </h1>
            <div className="flex flex-wrap gap-[8px] justify-start">
                {mangaList.map((manga) => (
                    <MediaCard
                        type='manga'
                        key={manga.id}
                        id={manga.id}
                        titleUa={manga?.titleUa}
                        titleEn={manga.titleEn}
                        imageUrl={manga?.imageUrl}
                        publisherName={manga.publisher?.name ?? ''}
                    />
                ))}
            </div>
        </div>
    );
}