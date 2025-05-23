import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const allManga = await prisma.manga.findMany({
            include: {
                publisher: true,
            },
            orderBy: {
                id: 'asc',
            },
        });

        return NextResponse.json(allManga);
    } catch (error) {
        console.error('Помилка при отриманні всіх манги:', error);
        return NextResponse.json({ message: 'Щось пішло не так' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const body = await request.json();
    const { genreIds = [] } = body;

    try {
        const manga = await prisma.manga.create({
            data: {
                titleUa: body.titleUa,
                titleEn: body.titleEn,
                titleJp: body.titleJp,
                description: body.description,
                kind: body.kind,
                chapters: body.chapters,
                volumes: body.volumes,
                status: body.status,
                dateRelease: body.dateRelease ? new Date(body.dateRelease) : undefined,
                imageUrl: body.imageUrl,
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