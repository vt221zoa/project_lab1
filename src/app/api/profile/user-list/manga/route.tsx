import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import {JwtPayload} from "@/types/types";

const JWT_SECRET = process.env.JWT_SECRET || '-DhhAU)eVRtKaD;1J"d4)_$5`pnx<RQ}';

export async function POST(req: NextRequest) {
    try {
        const token = req.cookies.get("token")?.value;

        if (!token) {
            return NextResponse.json({ message: "Неавторизовано" }, { status: 401 });
        }

        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

        const userId = decoded.userId;
        const { mangaId, status, comment, score, chaptersRead, volumesRead } = await req.json();

        const entry = await prisma.userMangaList.upsert({
            where: { userId_mangaId: { userId, mangaId } },
            update: { status, comment, score, chaptersRead, volumesRead },
            create: { userId, mangaId, status, comment, score, chaptersRead, volumesRead },
        });

        return NextResponse.json(entry);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get("token")?.value;
        if (!token) return NextResponse.json({ message: "Неавторизовано" }, { status: 401 });

        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
        const userId = decoded.userId;

        const url = new URL(req.url!);
        const mangaId = Number(url.searchParams.get("mangaId"));
        if (!mangaId) return NextResponse.json({ message: "mangaId потрібен" }, { status: 400 });

        const entry = await prisma.userMangaList.findUnique({
            where: { userId_mangaId: { userId, mangaId } }
        });

        if (!entry) return NextResponse.json(null);
        return NextResponse.json(entry);
    } catch  {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const token = req.cookies.get("token")?.value;
        if (!token) {
            return NextResponse.json({ message: "Неавторизовано" }, { status: 401 });
        }

        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
        const userId = decoded.userId;

        const url = new URL(req.url!);
        const mangaId = Number(url.searchParams.get("mangaId"));
        if (!mangaId) {
            return NextResponse.json({ message: "mangaId is required" }, { status: 400 });
        }

        await prisma.userMangaList.delete({
            where: {
                userId_mangaId: {
                    userId,
                    mangaId,
                },
            },
        });

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}