import {MediaCard} from "@/components/MediaCard";
import { MangaCardType2 } from "@/types/types";
import SectionInfo from '@/components/SectionInfo';

export default async function Page() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/manga`);
    const allManga: MangaCardType2[] = await res.json();

    return (
        <main className="flex flex-wrap">
            <SectionInfo text='Каталог манги'/>
            <div className="content_block flex flex-wrap gap-[8px] justify-between">
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