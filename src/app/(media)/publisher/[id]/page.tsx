import React from 'react';
import { MangaCardType2 } from '@/types/types';
import { MediaCard } from '@/components/MediaCard';
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/publisher/${id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        notFound();
    }
    const mangaList: MangaCardType2[] = await res.json();

    if (!mangaList[0]?.publisher) {
        notFound();
    }

    const publisherName = mangaList[0].publisher.name;

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