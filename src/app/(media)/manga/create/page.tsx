import MangaForm from '@/components/MangaForm';

export default async function Page() {
    const genresRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/genre`, { cache: 'no-store' });
    const publisherRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/publisher`, { cache: 'no-store' });
    const genre = await genresRes.json();
    const publisher = await publisherRes.json();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">Створити аніме</h1>
            <MangaForm genres={genre} publishers={publisher} />
        </div>
    );
}