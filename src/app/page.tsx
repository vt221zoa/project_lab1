import SectionTitle from "@/components/SectionTitle";
import {MediaCard} from "@/components/MediaCard";
import { getOngoingAnimes } from "@/lib/data/anime";


export default async function Home() {
    const animes = await getOngoingAnimes();

  return (
      <main>
          <SectionTitle text="Зараз на екранах"/>
          <div className="content_block flex flex-wrap gap-[9.7434px]">
              {animes.map((anime) => (
                  <MediaCard
                      type="anime"
                      id={anime.id}
                      key={anime.id}
                      titleUa={anime.titleUa}
                      titleEn={anime.titleEn}
                      imageUrl={anime.imageUrl}
                      studioName={anime.studio?.name}
                  />
              ))}
        </div>
      </main>
  );
}


