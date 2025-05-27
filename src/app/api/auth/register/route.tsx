import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
    try {
        const { email, password, name } = await req.json();
        if (!email || !password || !name) {
            return NextResponse.json(
                { message: "Всі поля обов'язкові" },
                { status: 400 }
            );
        }

        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { email },
                    { name }
                ]
            }
        });

        if (existingUser) {
            let errorMsg = "Користувач ";
            if (existingUser.email === email && existingUser.name === name) {
                errorMsg += "з такою поштою і нікнеймом вже існує";
            } else if (existingUser.email === email) {
                errorMsg += "з такою поштою вже існує";
            } else {
                errorMsg += "з таким нікнеймом вже існує";
            }
            return NextResponse.json({ message: errorMsg }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: { email, name, password: hashedPassword },
        });

        return NextResponse.json(
            {
                message: "Користувач створений!",
                user: { id: user.id, email: user.email, name: user.name }
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Помилка при створенні юзера', error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}