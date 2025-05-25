import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                imageUrl: true,
                isAdmin: true,
                createdAt: true,
            }
        });

        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error('Помилка при отриманні всіх юзерів:', error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}