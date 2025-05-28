import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { JwtPayload } from "@/types/types";

const JWT_SECRET = process.env.JWT_SECRET || 'test';

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get("token")?.value;
        if (!token) {
            return NextResponse.json({ message: "Not authorized" }, { status: 401 });
        }
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
        const userId = decoded.userId;

        const mangaList = await prisma.userMangaList.findMany({
            where: { userId },
            include: {
                manga: {
                    select: {
                        id: true,
                        titleUa: true,
                        titleEn: true,
                        imageUrl: true,
                        chapters: true,
                        volumes: true,
                    },
                },
            },
        });
        return NextResponse.json(mangaList);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}