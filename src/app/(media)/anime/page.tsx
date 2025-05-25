import SectionInfo from '@/components/SectionInfo';
import {MediaCard} from "@/components/media/MediaCard";
import Link from "next/link";
import {getAllAnimes} from "@/lib/data/anime";

export default async function Page() {
    const allAnime = await getAllAnimes();

    return (
        <main className="flex flex-col">
            <SectionInfo text='Каталог аніме'/>
            <div className='flex mb-[20px] text-[18px]'>
                <Link href='/anime/create'>Створити аніме</Link>
            </div>
            <div className="content_block flex flex-wrap gap-[9.7434px]">
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

