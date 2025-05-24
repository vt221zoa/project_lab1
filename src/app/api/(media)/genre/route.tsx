import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const genres = await prisma.genre.findMany({
            select: {
                id: true,
                name: true,
            },
            orderBy: {
                name: 'asc',
            },
        });

        return NextResponse.json(genres);
    } catch (error) {
        console.error('Помилка при отриманні жанрів:', error);
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
        const manga = await prisma.manga.create({
            data: {
                titleUa: toNullableString(body.titleUa),
                titleEn: body.titleEn,
                titleJp: toNullableString(body.titleJp),
                description: toNullableString(body.description),
                kind: body.kind,
                chapters: body.chapters || null,
                volumes: body.volumes || null,
                status: body.status,
                dateRelease: body.dateRelease ? new Date(body.dateRelease) : undefined,
                imageUrl: toNullableString(body.imageUrl),
                publisherId: body.publisherId,
            },
        });

        if (Array.isArray(genreIds) && genreIds.length > 0) {
            await prisma.mangaGenreOnManga.createMany({
                data: genreIds.map((genreId: number) => ({
                    mangaId: manga.id,
                    genreId,
                })),
            });
        }

        const mangaWithGenres = await prisma.manga.findUnique({
            where: { id: manga.id },
            include: {
                genres: { include: { genre: true } },
            },
        });

        return NextResponse.json({ success: true, manga: mangaWithGenres });
    } catch (e) {
        console.error('Помилка створення:', e);
        return NextResponse.json({ error: 'Не вдалося створити аніме' }, { status: 500 });
    }
}
