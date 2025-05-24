import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const studioId = Number(id);

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
