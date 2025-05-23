import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Params } from '@/types/interfaces'

export async function GET(_: NextRequest, { params }: Params) {
    try {
        const studioId = Number(params.id);

        const animeList = await prisma.anime.findMany({
            where: {
                studioId: studioId,
            },
            include: {
                studio: true,
            },
            orderBy: {
                id: 'asc',
            },
        });

        return NextResponse.json(animeList);
    } catch (error) {
        console.error('Помилка при отриманні аніме за studioId:', error);
        return NextResponse.json({ message: 'Щось пішло не так' }, { status: 500 });
    }
}
