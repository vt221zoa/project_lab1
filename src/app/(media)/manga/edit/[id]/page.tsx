import {PagePromise} from "@/types/interfaces";
import {getAllGenres} from "@/lib/data/genre";
import {getMangaById} from "@/lib/data/manga";
import {getAllPublishers} from "@/lib/data/publisher";
import MangaForm from "@/components/MangaForm";
import {mapMangaFullTypeToMangaData} from "@/lib/data/adapters/manga";

export default async function Page({ params }: PagePromise) {
    const { id } = await params;
    const mangaId = Number(id);

    const initialData = await getMangaById(mangaId);
    const genre = await getAllGenres();
    const publisher = await getAllPublishers();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">Створити аніме</h1>
            <MangaForm
                initialData={mapMangaFullTypeToMangaData(initialData)}
                genres={genre}
                publishers={publisher}
                mangaId={mangaId}
            />
        </div>
    );
}