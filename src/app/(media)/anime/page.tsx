import { getAllAnimes } from "@/lib/data/anime";
import AnimeCatalog from "@/components/media/AnimeCatalog";

export default async function Page() {
    const allAnime = await getAllAnimes();
    return <AnimeCatalog allAnime={allAnime} />;
}