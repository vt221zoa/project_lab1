import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const allAnime = await prisma.anime.findMany({
            include: {
                studio: true,
            },
            orderBy: {
                id: 'asc',
            },
        });

        return NextResponse.json(allAnime);
    } catch (error) {
        console.error('Помилка при отриманні всіх аніме:', error);
        return NextResponse.json({ message: 'Щось пішло не так' }, { status: 500 });
    }
}

export async function POST(request: Request) {

    const body = await request.json();
    const { genreIds = [] } = body;

    try {
        function toNullableString(value: string): string | null {
            return value.trim() === '' ? null : value;
        }
        const anime = await prisma.anime.create({
            data: {
                titleUa: toNullableString(body.titleUa),
                titleEn: body.titleEn,
                titleJp: toNullableString(body.titleJp),
                description: toNullableString(body.description),
                kind: body.kind,
                episodes: body.episodes || null,
                status: body.status,
                dateRelease: body.dateRelease ? new Date(body.dateRelease) : undefined,
                imageUrl: toNullableString(body.imageUrl),
                rating: toNullableString(body.rating),
                studioId: body.studioId,
            },
        });

        if (Array.isArray(genreIds) && genreIds.length > 0) {
            await prisma.animeGenreOnAnime.createMany({
                data: genreIds.map((genreId: number) => ({
                    animeId: anime.id,
                    genreId,
                })),
            });
        }

        const animeWithGenres = await prisma.anime.findUnique({
            where: { id: anime.id },
            include: {
                genres: { include: { genre: true } },
            },
        });

        return NextResponse.json({ success: true, anime: animeWithGenres });
    } catch (e) {
        console.error('Помилка створення:', e);
        return NextResponse.json({ error: 'Не вдалося створити аніме' }, { status: 500 });
    }
}
