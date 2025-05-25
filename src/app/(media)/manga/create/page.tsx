import MangaForm from '@/components/MangaForm';
import {getAllGenres} from "@/lib/data/genre";
import {getAllPublishers} from "@/lib/data/publisher";

export default async function Page() {
    const genre = await getAllGenres();
    const publisher = await getAllPublishers()

    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">Створити аніме</h1>
            <MangaForm genres={genre} publishers={publisher} />
        </div>
    );
}