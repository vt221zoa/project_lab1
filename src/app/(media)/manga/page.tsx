import { MangaCardType2 } from "@/types/types";
import SectionInfo from '@/components/SectionInfo';
import {MediaCard} from "@/components/MediaCard";
import Link from "next/link";

export default async function Page() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/manga`);
    const allManga: MangaCardType2[] = await res.json();

    return (
        <main className="flex flex-col">
            <SectionInfo text='Каталог манги'/>
            <div className='flex mb-[20px] text-[18px]'>
                <Link href='/manga/create'>Створити мангу</Link>
            </div>
            <div className="content_block flex flex-wrap gap-[9.7434px]">
                {allManga.map((manga) => (
                    <MediaCard
                        type="manga"
                        viewType="catalog"
                        key={manga.id}
                        id={manga.id}
                        titleUa={manga.titleUa}
                        titleEn={manga.titleEn}
                        kind={manga.kind}
                        dateRelease={manga.dateRelease}
                        imageUrl={manga.imageUrl}
                        publisherName={manga.publisher?.name ?? ''}
                    />
                ))}
            </div>
        </main>
    );
}