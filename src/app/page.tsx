'use client';

import { useEffect, useState } from 'react';
import SectionTitle from "@/components/SectionTitle";
import { AnimeCardType2 } from '@/types/types';
import {MediaCard} from "@/components/MediaCard";


export default function Home() {
  const [animes, setAnimes] = useState<AnimeCardType2[]>([]);

  useEffect(() => {
    fetch('/api/main-page')
        .then((res) => res.json())
        .then(setAnimes)
        .catch(console.error);
  }, []);

  return (
      <main>
          <SectionTitle text="Зараз на екранах"/>
          <div className="content_block flex flex-wrap gap-[9.7434px]">
          {animes.map((anime) => (
              <MediaCard
                  type='anime'
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


