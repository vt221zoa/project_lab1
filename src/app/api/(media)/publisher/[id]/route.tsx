import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const publisherId = Number(id);

        const mangaList = await prisma.manga.findMany({
            where: {
                publisherId: publisherId,
            },
            include: {
                publisher: true,
            },
            orderBy: {
                id: 'asc',
            },
        });

        return NextResponse.json(mangaList);
    } catch (error) {
        console.error('Помилка при отриманні манги за publisherId:', error);
        return NextResponse.json({ message: 'Щось пішло не так' }, { status: 500 });
    }
}
