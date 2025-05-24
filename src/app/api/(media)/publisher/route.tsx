import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const publishers = await prisma.publisher.findMany({
            select: {
                id: true,
                name: true,
            },
            orderBy: {
                name: 'asc',
            },
        });

        return NextResponse.json(publishers);
    } catch (error) {
        console.error('Помилка при отриманні видавництв:', error);
        return NextResponse.json({ message: 'Щось пішло не так' }, { status: 500 });
    }
}
