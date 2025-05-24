import AnimeForm from '@/components/AnimeForm';

export default async function Page() {
    const genresRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/genre`, { cache: 'no-store' });
    const studiosRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/studio`, { cache: 'no-store' });
    const genre = await genresRes.json();
    const studio = await studiosRes.json();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">Створити мангу</h1>
            <AnimeForm genres={genre} studios={studio}/>
        </div>
    );
}