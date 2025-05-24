import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const studios = await prisma.studio.findMany({
            select: {
                id: true,
                name: true,
            },
            orderBy: {
                name: 'asc',
            },
        });

        return NextResponse.json(studios);
    } catch (error) {
        console.error('Помилка при отриманні студій:', error);
        return NextResponse.json({ message: 'Щось пішло не так' }, { status: 500 });
    }
}
