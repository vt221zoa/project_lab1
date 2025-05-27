import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET || '-DhhAU)eVRtKaD;1J"d4)_$5`pnx<RQ}';

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();
        if (!email || !password) {
            return NextResponse.json({ message: "Всі поля обов'язкові" }, { status: 400 });
        }

        const user = await prisma.user.findUnique({ where: { email } });

        const hashedPassword = user ? user.password : "$2a$10$q2bMdeRHn6cd07BGfwL/6u4CBDOe3pGVJ4F8ko9k8ZEaoQEtAJy7u";
        const isMatch = await bcrypt.compare(password, hashedPassword);

        if (!user || !isMatch) {
            return NextResponse.json({ message: "Неправильний email або пароль" }, { status: 401 });
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email, isAdmin: user.isAdmin },
            JWT_SECRET,
            { expiresIn: "7d" }
        );

        const response = NextResponse.json({
            message: "Успішний вхід",
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                isAdmin: user.isAdmin,
            },
            token,
        });

        response.cookies.set("token", token, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7,
        });

        return response;
    } catch (error) {
        console.error("Помилка при логіні юзера:", error);
        return NextResponse.json(
            { message: "Server error" },
            { status: 500 }
        );
    }
}