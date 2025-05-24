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