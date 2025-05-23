import MediaDetails from '@/components/MediaDetails';
import { AnimeFullType } from '@/types/types';
import { PagePromise } from "@/types/interfaces";

export default async function Page({ params }: PagePromise) {
    const { id } = await params;
    const animeId = Number(id);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/anime/${animeId}`);
    if (!res.ok) {
        return <div>Аніме не знайдено</div>;
    }

    const anime: AnimeFullType = await res.json();

    return (
        <main className="p-4">
            <MediaDetails type="anime" data={anime} />
        </main>
    );
}
