import MediaDetails from '@/components/MediaDetails';
import { PagePromise } from "@/types/interfaces";
import {getMangaById} from "@/lib/data/manga";

export default async function Page({ params }: PagePromise) {
    const { id } = await params;
    const mangaId = Number(id);

    const manga= await getMangaById(mangaId);

    if (!manga) {
        return <div>Мангу не знайдено</div>;
    }

    return (
        <main className="p-4">
            <MediaDetails type="manga" data={manga} />
        </main>
    );
}
