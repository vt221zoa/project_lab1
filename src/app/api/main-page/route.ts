import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const ongoingAnime = await prisma.anime.findMany({
            where: { status: 'Вийшло' },
            orderBy: { dateRelease: 'desc' },
            take: 6,
            include: {
                studio: true,
            },
        });

        return NextResponse.json(ongoingAnime);
    } catch (error) {
        console.error('Помилка при отриманні аніме:', error);
        return NextResponse.json({ message: 'Щось пішло не так' }, { status: 500 });
    }
}