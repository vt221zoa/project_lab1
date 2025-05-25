import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const ongoingAnime = await prisma.anime.findMany({
            where: { status: 'Онгоїнг' },
            include: {
                studio: true,
            },
        });
        const shuffled = ongoingAnime.sort(() => Math.random() - 0.5).slice(0, 6);
        return NextResponse.json(shuffled);
    } catch (error) {
        console.error('Помилка при отриманні аніме:', error);
        return NextResponse.json({ message: 'Щось пішло не так' }, { status: 500 });
    }
}