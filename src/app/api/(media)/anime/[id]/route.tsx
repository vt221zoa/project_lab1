import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { toNullableString } from "@/utils/emptyToNull";
import {buildUniqueOrConditions} from "@/utils/buildUniqueOrConditions";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const animeId = Number(id);

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
                logoUrl: anime.studio.logoUrl,
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

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const animeId = Number(id);

    try {
        await prisma.userAnimeList.deleteMany({ where: { animeId } });
        await prisma.animeGenreOnAnime.deleteMany({ where: { animeId } });
        await prisma.anime.delete({ where: { id: animeId } });

        return NextResponse.json({ success: true });
    } catch (e) {
        console.error('Помилка видалення:', e);
        return NextResponse.json({ error: 'Не вдалося видалити аніме' }, { status: 500 });
    }
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const animeId = Number(id);
    const body = await request.json();
    const { genreIds = [] } = body;

    try {
        const orConditions = buildUniqueOrConditions(body);

        if (orConditions.length > 0) {
            const duplicateAnime = await prisma.anime.findFirst({
                where: {
                    OR: orConditions,
                    NOT: { id: animeId },
                },
            });
            if (duplicateAnime) {
                return NextResponse.json(
                    { error: 'Аніме з такою назвою (titleUa / titleEn / titleJp) вже існує в базі.' },
                    { status: 400 }
                );
            }
        }
        await prisma.animeGenreOnAnime.deleteMany({ where: { animeId } });
        if (Array.isArray(genreIds) && genreIds.length > 0) {
            await prisma.animeGenreOnAnime.createMany({
                data: genreIds.map((genreId: number) => ({ animeId, genreId })),
            });
        }
        const anime = await prisma.anime.update({
            where: { id: animeId },
            data: {
                titleUa: toNullableString(body.titleUa),
                titleEn: body.titleEn,
                titleJp: toNullableString(body.titleJp),
                description: toNullableString(body.description),
                kind: body.kind,
                episodes: body.episodes,
                status: body.status,
                dateRelease: body.dateRelease ? new Date(body.dateRelease) : undefined,
                imageUrl: toNullableString(body.imageUrl),
                rating: toNullableString(body.rating),
                studioId: body.studioId,
            },
            include: { genres: { include: { genre: true } } },
        });

        return NextResponse.json({ success: true, anime });
    } catch (e) {
        console.error('Помилка оновлення:', e);
        return NextResponse.json({ error: 'Не вдалося оновити аніме' }, { status: 500 });
    }
}