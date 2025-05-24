import MangaForm from '@/components/MangaForm';
import {PagePromise} from "@/types/interfaces";

export default async function Page({ params }: PagePromise) {
    const { id } = await params;
    const mangaId = Number(id);

    const animeRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/manga/${mangaId}`, { cache: 'no-store' });
    const genresRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/genre`, { cache: 'no-store' });
    const publishersRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/publisher`, { cache: 'no-store' });
    const initialData = await animeRes.json();
    const genre = await genresRes.json();
    const publisher = await publishersRes.json();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">Створити аніме</h1>
            <MangaForm initialData={initialData} genres={genre} publishers={publisher} mangaId={mangaId}/>
        </div>
    );
}