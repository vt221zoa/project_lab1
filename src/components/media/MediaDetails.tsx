'use client';

import Image from 'next/image';
import SectionInfo from '@/components/SectionInfo';
import { AnimeFullType, MangaFullType } from '@/types/types';
import Link from "next/link";
import { buildCloudinaryUrl } from '@/utils/cloudinary';
import React from "react";
import EditDeleteControls from "@/components/EditDeleteControls";
import {useRouter} from "next/navigation";
import MediaAddForm from "@/components/users/(media_List)/MediaAddForm";

const FALLBACK_IMAGE = '/static/not-found.png';

type Props = {
    type: 'anime' | 'manga';
    data: AnimeFullType | MangaFullType;
};

export default function MediaDetails({ type, data }: Props) {
    const isAnime = (data: AnimeFullType | MangaFullType): data is AnimeFullType  => !(data as MangaFullType).chapters;

    const imgSrc =
        data.imageUrl && data.imageUrl.trim() !== ''
            ? data.imageUrl.startsWith('http')
                ? data.imageUrl
                : buildCloudinaryUrl(data.imageUrl, type)
            : FALLBACK_IMAGE;

    const genres = data.genres?.map((g) =>
        isAnime(data) ? g.genre?.name : g.genre?.name
    ).filter(Boolean).join(', ');

    const router = useRouter();

    return (
        <div>
            <h1 className="flex flex-row items-center font-bold my-[12px]">
                {[data.titleUa, data.titleEn, data.titleJp]
                    .filter(Boolean)
                    .join(' / ')
                }
            </h1>
            <EditDeleteControls
                type={type}
                id={data.id}
                onDelete={() => {
                    router.push('/anime');
                }}
            />
            <div className="grid grid-cols-[270px_minmax(300px,1fr)_minmax(300px,1fr)] gap-[20px] mb-[7px] items-start">

                {/* Зображення */}
                <div>
                    <Image
                        src={imgSrc}
                        alt={data.titleEn}
                        width={270}
                        height={390}
                        className="rounded-md object-cover"
                    />
                </div>

                <MediaAddForm
                    type={type}
                    mediaId={data.id}
                    totalEpisodes={isAnime(data) ? data.episodes : null}
                    totalVolumes={!isAnime(data) ? data.volumes : null}
                    totalChapters={!isAnime(data) ? data.chapters : null}
                />

                {/* Інформація */}
                <div>
                    <SectionInfo text="Інформація" />
                    <div className="space-y-[8px]">
                        <div><b>Тип:</b> {data.kind}</div>
                        {isAnime(data) && <div><b>Епізодів:</b> {data.episodes ?? '—'}</div>}
                        {!isAnime(data) && <>
                            <div><b>Томів:</b> {data.volumes ?? '—'}</div>
                            <div><b>Розділів:</b> {data.chapters ?? '—'}</div>
                        </>}
                        <div><b>Статус:</b> {data.status}</div>
                        {data.dateRelease && (
                            <div><b>Дата релізу:</b> {new Date(data.dateRelease).toLocaleDateString()}</div>
                        )}
                        {isAnime(data) && <div><b>Віковий рейтинг:</b> {data.rating ?? '—'}</div>}
                        <div><b>Жанри:</b> {genres || '—'}</div>
                    </div>
                </div>

                {/* Студія або Видавництво */}
                <div className='text-[20px] font-[600]'>
                    <SectionInfo text={isAnime(data) ? 'Студія' : 'Видавництво'} />
                    {isAnime(data) ? (
                        data.studio?.name ? (
                            <Link
                                href={`/studio/${data.studio.id}`}
                                className="block decoration-dashed text-[#1a1a1a]"
                                title={data.studio.name}
                            >
                                {data.studio?.logoUrl ? (
                                    <Image
                                        src={'/image/studio/' + data.studio?.logoUrl}
                                        alt={data.studio.name}
                                        width={400}
                                        height={0}
                                        className="h-auto max-h-[100px] rounded object-contain"
                                    />
                                ) : (
                                    <span className="w-full">{data.studio.name}</span>
                                )}
                            </Link>
                        ) : (
                            <span>Відсутня студія</span>
                        )
                    ) : (
                        data.publisher?.id && data.publisher?.name ? (
                            <Link
                                href={`/publisher/${data.publisher.id}`}
                                className="block w-full decoration-dashed text-[#1a1a1a]"
                                title={data.publisher.name}
                            >
                                {data.publisher.name}
                            </Link>
                        ) : (
                            <span>Відсутне видавництво</span>
                        )
                    )}
                </div>

                {/* Опис */}
                {data.description && (
                    <div className='col-start-2 col-span-3'>
                        <SectionInfo text="Опис" />
                        <div className="text-gray-800">{data.description}</div>
                    </div>
                )}
            </div>
        </div>
    );
}