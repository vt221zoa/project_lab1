import MediaForm from '@/components/AnimeForm';
import {PagePromise} from "@/types/interfaces";

export default async function Page({ params }: PagePromise) {
    const { id } = await params;
    const animeId = Number(id);

    const animeRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/anime/${animeId}`, { cache: 'no-store' });
    const genresRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/genre`, { cache: 'no-store' });
    const studiosRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/studio`, { cache: 'no-store' });
    const initialData = await animeRes.json();
    const genre = await genresRes.json();
    const studio = await studiosRes.json();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">Редагувати аніме</h1>
            <MediaForm initialData={initialData} genres={genre} studios={studio} animeId={animeId}/>
        </div>
    );
}