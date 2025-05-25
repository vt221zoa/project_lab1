import SectionInfo from '@/components/SectionInfo';
import {MediaCard} from "@/components/media/MediaCard";
import {getAllAnimes} from "@/lib/data/anime";
import CreateAdminButton from "@/components/media/forms/CreateAdminButton"

export default async function Page() {
    const allAnime = await getAllAnimes();

    return (
        <main className="flex flex-col">
            <SectionInfo text='Каталог аніме'/>
            <CreateAdminButton type="anime" />
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

