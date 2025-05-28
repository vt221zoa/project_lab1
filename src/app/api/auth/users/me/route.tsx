import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get("token")?.value;
        if (!token) return NextResponse.json({ isAuth: false }, { status: 401 });

        const decoded = jwt.verify(token, JWT_SECRET);
        return NextResponse.json({ isAuth: true, user: decoded });
    } catch {
        return NextResponse.json({ isAuth: false }, { status: 401 });
    }
}