'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import {buildCloudinaryUrl} from "@/utils/cloudinary";
import EditDeleteControls from './EditDeleteControls';
import { useRouter } from 'next/navigation';

const FALLBACK_IMAGE = '/static/not-found.png';

type BaseCardType = {
    id: number;
    titleUa?: string;
    titleEn: string;
    kind?: string;
    dateRelease?: string;
    imageUrl?: string;
};

type AnimeCardType = BaseCardType & { studioName?: string };
type MangaCardType = BaseCardType & { publisherName: string };

type ViewType = 'default' | 'catalog';

type CardType =
    | ({ type: 'anime' } & AnimeCardType)
    | ({ type: 'manga' } & MangaCardType);

type MediaCardProps = CardType & {
    viewType?: ViewType;
};

export const MediaCard: React.FC<MediaCardProps> = (props) => {
    const {
        id,
        titleUa,
        titleEn,
        imageUrl,
        type,
        viewType = 'default',
        kind,
        dateRelease,
    } = props;

    const extraName =
        type === 'anime'
            ? (props as AnimeCardType).studioName ?? ''
            : (props as MangaCardType).publisherName ?? '';

    const year = dateRelease ? dateRelease.slice(0, 4) : '';

    const imgSrc =
        imageUrl && imageUrl.trim() !== ''
            ? imageUrl.startsWith('http')
                ? imageUrl
                : buildCloudinaryUrl(imageUrl, type)
            : FALLBACK_IMAGE;

    const router = useRouter();

    return (
        <div>
            <Link
                href={`/${type}/${id}`}
                className="w-[210px] no-underline text-[#1a1a1a] flex-shrink-0 mb-[20px]"
            >
                <Image
                    src={imgSrc}
                    alt={titleEn}
                    width={210}
                    height={280}
                    className="object-cover "
                />
                <div className="mt-[3px]">
                    <h3 className="text-[16px] text-[#3000B4] font-bold truncate max-w-[280px] m-[0px]">
                        {titleUa ?? titleEn}
                    </h3>
                    {viewType === 'catalog' ? (
                        <div className="flex justify-between text-[14px] text-[#6b6b6b] max-w-[280px] mt-[3px] ml-0">
                            <span className="truncate">{kind}</span>
                            <span className="truncate">{year}</span>
                        </div>
                    ) : (
                        <p className="text-[14px] text-[#6b6b6b] truncate max-w-[280px] m-[3px] ml-[0px]">
                            {extraName}
                        </p>
                    )}
                </div>
            </Link>
            {viewType === 'catalog' ? (
                    <EditDeleteControls
                        type={type}
                        id={id}
                        onDelete={() => {
                            router.refresh();
                        }}
                    />
            )
                : null
            }
        </div>
    );
};
