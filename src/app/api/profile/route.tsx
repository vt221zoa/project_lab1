import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret";

export async function GET(req: NextRequest) {
    const token = req.cookies.get('token')?.value;
    if (!token) return NextResponse.json({ user: null });

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: { id: true, name: true, email: true, imageUrl: true }
        });
        if (!user) return NextResponse.json({ user: null });
        return NextResponse.json({ user });
    } catch {
        return NextResponse.json({ user: null });
    }
}

export async function PATCH(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    if (!token) return NextResponse.json({ message: "Не авторизовано" }, { status: 401 });

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
        const { name, imageUrl } = await req.json();

        const user = await prisma.user.update({
            where: { id: decoded.userId },
            data: {
                name,
                imageUrl,
            },
            select: { id: true, name: true, email: true, imageUrl: true }
        });
        return NextResponse.json({ user });
    } catch (error) {
        console.error('Помилка оновленні юзеру:', error);
        return NextResponse.json({ message: "Помилка при оновленні профілю" }, { status: 500 });
    }
}