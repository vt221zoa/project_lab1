import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Params } from '@/types/interfaces'

export async function GET(_: NextRequest, { params }: Params) {
    try {
        const publisherId = Number(params.id);

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
