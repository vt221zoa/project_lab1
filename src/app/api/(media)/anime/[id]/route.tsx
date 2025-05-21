import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const animeId = Number(params.id);

    const anime = await prisma.anime.findUnique({
        where: { id: animeId },
        include: {
            studio: true,
            genres: {
                include: {
                    genre: true,
                },
            },
        },
    });

    if (!anime) {
        return NextResponse.json({ error: 'Аніме не знайдено' }, { status: 404 });
    }

    return NextResponse.json({
        id: anime.id,
        titleUa: anime.titleUa,
        titleEn: anime.titleEn,
        titleJp: anime.titleJp,
        description: anime.description,
        kind: anime.kind,
        episodes: anime.episodes,
        status: anime.status,
        dateRelease: anime.dateRelease?.toISOString() ?? null,
        imageUrl: anime.imageUrl,
        rating: anime.rating,
        studio: anime.studio
            ? {
                id: anime.studio.id,
                name: anime.studio.name,
            }
            : undefined,
        genres: anime.genres.map((g) => ({
            genre: {
                id: g.genre.id,
                name: g.genre.name,
            },
        })),
    });
}