import { getAllMangas } from "@/lib/data/manga";
import MangaCatalog from "@/components/media/MangaCatalog";

export default async function Page() {
    const allManga = await getAllMangas();
    return <MangaCatalog allManga={allManga} />;
}