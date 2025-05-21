import Image from 'next/image';
import React from 'react';
import { AnimeCardType } from '@/types/types'
import Link from "next/link";

const FALLBACK_IMAGE = '/static/not-found.png';

export const AnimeCardBlock: React.FC<AnimeCardType> = ({id, titleUa, titleEn, imageUrl, studioName }) => {
    const imgSrc =
        imageUrl && imageUrl.trim() !== ''
            ? imageUrl.startsWith('http')
                ? imageUrl
                : `/image/anime/${imageUrl}`
            : FALLBACK_IMAGE;

    return (
        <Link href={`/anime/${id}`} className="w-[210px] no-underline text-[#1a1a1a] flex-shrink-0 mb-[20px]">
            <Image
                src={imgSrc}
                alt={titleEn}
                width={210}
                height={280}
                className="object-cover rounded"
            />
            <div className="mt-[3px]">
                <h3 className="text-[16px] text-[#3000B4] font-bold truncate max-w-[280px] m-[0px]">{titleUa ?? titleEn}</h3>
                <p className="text-[14px] font-light truncate max-w-[280px] m-[3px]">{studioName ?? ''}</p>
            </div>
        </Link>
    )
}