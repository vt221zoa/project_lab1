import { AnimeCardType2 } from '@/types/types';
import SectionInfo from '@/components/SectionInfo';
import {MediaCard} from "@/components/MediaCard";

export default async function Page() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/anime`);
    const allAnime: AnimeCardType2[] = await res.json();

    return (
        <main className=" flex flex-wrap">
            <SectionInfo text='Каталог аніме'/>
            <div className="content_block flex flex-wrap gap-[8px] justify-between">
                {allAnime.map((anime) => (
                    <MediaCard
                        type="anime"
                        viewType="catalog"
                        key={anime.id}
                        id={anime.id}
                        titleUa={anime.titleUa}
                        titleEn={anime.titleEn}
                        kind={anime.kind}
                        dateRelease={anime.dateRelease}
                        imageUrl={anime?.imageUrl}
                        studioName={anime.studio?.name ?? ''}
                    />
                ))}
            </div>
        </main>
    );
}

