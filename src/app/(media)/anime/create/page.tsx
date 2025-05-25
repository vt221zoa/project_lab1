import AnimeForm from '@/components/AnimeForm';
import {getAllGenres} from "@/lib/data/genre";
import {getAllStudios} from "@/lib/data/studio";

export default async function Page() {
    const genre = await getAllGenres();
    const studio = await getAllStudios();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">Створити мангу</h1>
            <AnimeForm genres={genre} studios={studio}/>
        </div>
    );
}