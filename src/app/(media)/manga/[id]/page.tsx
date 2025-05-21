import MediaDetails from '@/components/MediaDetails';
import {MangaFullType} from '@/types/types';

export default async function Page({ params }: { params: { id: string } }) {
    const mangaId = params.id;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/manga/${mangaId}`);
    if (!res.ok) {
        return <div>Мангу не знайдено</div>;
    }

    const manga: MangaFullType = await res.json();

    return (
        <main className="p-4">
            <MediaDetails type="manga" data={manga} />
        </main>
    );
}
