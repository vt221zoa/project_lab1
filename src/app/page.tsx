'use client';

import { useEffect, useState } from 'react';
import {AnimeCardBlock} from '@/components/AnimeCard';
import SectionTitle from "@/components/SectionTitle";
import { AnimeCardType2 } from '@/types/types';


export default function Home() {
  const [animes, setAnimes] = useState<AnimeCardType2[]>([]);

  useEffect(() => {
    fetch('/api/main-page')
        .then((res) => res.json())
        .then(setAnimes)
        .catch(console.error);
  }, []);

  return (
      <main className="p-6">
          <SectionTitle text="Зараз на екранах"/>
          <div className="content_block flex flex-wrap justify-center">
          {animes.map((anime) => (
              <AnimeCardBlock
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


