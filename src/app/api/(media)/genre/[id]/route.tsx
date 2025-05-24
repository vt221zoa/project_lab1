'use server';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { Params } from '@/types/interfaces'

export async function GET(request: Request, { params }: Params) {
    const mangaId = Number(params.id);

    const manga = await prisma.manga.findUnique({
        where: { id: mangaId },
        include: {
            publisher: true,
            genres: {
                include: {
                    genre: true,
                },
            },
        },
    });

    if (!manga) {
        return NextResponse.json({ error: 'Аніме не знайдено' }, { status: 404 });
    }

    return NextResponse.json({
        id: manga.id,
        titleUa: manga.titleUa,
        titleEn: manga.titleEn,
        titleJp: manga.titleJp,
        description: manga.description,
        kind: manga.kind,
        chapters: manga.chapters,
        volumes: manga.volumes,
        status: manga.status,
        dateRelease: manga.dateRelease?.toISOString() ?? null,
        imageUrl: manga.imageUrl,
        publisher: manga.publisher
            ? {
                id: manga.publisher.id,
                name: manga.publisher.name,
            }
            : undefined,
        genres: manga.genres.map((g) => ({
            genre: {
                id: g.genre.id,
                name: g.genre.name,
            },
        })),
    });
}

export async function DELETE(request: Request, { params }: Params) {
    const mangaId = Number(params.id);

    try {
        await prisma.mangaGenreOnManga.deleteMany({ where: { mangaId } });
        await prisma.manga.delete({ where: { id: mangaId } });

        return NextResponse.json({ success: true });
    } catch (e) {
        console.error('Помилка видалення:', e);
        return NextResponse.json({ error: 'Не вдалося видалити аніме' }, { status: 500 });
    }
}

export async function PATCH(request: Request, { params }: Params) {
    const mangaId = Number(params.id);
    const body = await request.json();
    const { genreIds = [] } = body;

    try {
        await prisma.mangaGenreOnManga.deleteMany({ where: { mangaId } });

        if (Array.isArray(genreIds) && genreIds.length > 0) {
            await prisma.mangaGenreOnManga.createMany({
                data: genreIds.map((genreId: number) => ({ mangaId, genreId })),
            });
        }

        const manga = await prisma.manga.update({
            where: { id: mangaId },
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
            include: {
                genres: { include: { genre: true } },
            },
        });

        return NextResponse.json({ success: true, manga });
    } catch (e) {
        console.error('Помилка оновлення:', e);
        return NextResponse.json({ error: 'Не вдалося оновити аніме' }, { status: 500 });
    }
}