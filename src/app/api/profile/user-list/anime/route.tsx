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
        const { animeId, status, comment, score, episodesWatched } = await req.json();

        const entry = await prisma.userAnimeList.upsert({
            where: { userId_animeId: { userId, animeId } },
            update: { status, comment, score, episodesWatched },
            create: { userId, animeId, status, comment, score, episodesWatched },
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
        const animeId = Number(url.searchParams.get("animeId"));
        if (!animeId) return NextResponse.json({ message: "animeId потрібен" }, { status: 400 });

        const entry = await prisma.userAnimeList.findUnique({
            where: { userId_animeId: { userId, animeId } }
        });

        if (!entry) return NextResponse.json(null);
        return NextResponse.json(entry);
    } catch {
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
        const animeId = Number(url.searchParams.get("animeId"));
        if (!animeId) {
            return NextResponse.json({ message: "animeId is required" }, { status: 400 });
        }

        await prisma.userAnimeList.delete({
            where: {
                userId_animeId: {
                    userId,
                    animeId,
                },
            },
        });

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}