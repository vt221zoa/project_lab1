import AnimeForm from '@/components/AnimeForm';
import {PagePromise} from "@/types/interfaces";
import {getAllGenres} from "@/lib/data/genre";
import {getAnimeById} from "@/lib/data/anime";
import {mapAnimeFullTypeToAnimeData} from "@/lib/data/adapters/anime";
import {getAllStudios} from "@/lib/data/studio";

export default async function Page({ params }: PagePromise) {
    const { id } = await params;
    const animeId = Number(id);

    const initialData = await getAnimeById(animeId);
    const genre = await getAllGenres();
    const studio = await getAllStudios();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">Редагувати аніме</h1>
            <AnimeForm
                initialData={mapAnimeFullTypeToAnimeData(initialData)}
                genres={genre}
                studios={studio}
                animeId={animeId}
            />
        </div>
    );
}