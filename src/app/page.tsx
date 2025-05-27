import SectionTitle from "@/components/SectionTitle";
import {MediaCard} from "@/components/media/MediaCard";
import { getOngoingAnimes } from "@/lib/data/anime";
import { getOngoingMangas } from "@/lib/data/manga";

export default async function Home() {
    const animes = await getOngoingAnimes();
    const mangas = await getOngoingMangas();

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
          <SectionTitle type='manga' text="Зараз випускаються"/>
          <div className="content_block flex flex-wrap gap-[9.7434px]">
              {mangas.map((manga) => (
                  <MediaCard
                      type="manga"
                      id={manga.id}
                      key={manga.id}
                      titleUa={manga.titleUa}
                      titleEn={manga.titleEn}
                      imageUrl={manga.imageUrl}
                      publisherName={manga.publisher?.name ?? ''}
                  />
              ))}
          </div>
      </main>
  );
}


