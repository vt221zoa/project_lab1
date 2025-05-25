import SectionInfo from '@/components/SectionInfo';
import {MediaCard} from "@/components/media/MediaCard";
import {getAllMangas} from "@/lib/data/manga";
import CreateAdminButton from "@/components/media/forms/CreateAdminButton";

export default async function Page() {
    const allManga = await getAllMangas();

    return (
        <main className="flex flex-col">
            <SectionInfo text='Каталог манги'/>
            <CreateAdminButton type="manga" />
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