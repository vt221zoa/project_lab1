import MediaDetails from '@/components/MediaDetails';
import { PagePromise } from "@/types/interfaces";
import {getAnimeById} from "@/lib/data/anime";

export default async function Page({ params }: PagePromise) {
    const { id } = await params;
    const animeId = Number(id);

    const anime = await getAnimeById(animeId);

    if (!anime) {
        return <div>Аніме не знайдено</div>;
    }

    return (
        <main>
            <MediaDetails type="anime" data={anime} />
        </main>
    );
}