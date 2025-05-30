import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
const JWT_SECRET = process.env.JWT_SECRET || '-DhhAU)eVRtKaD;1J"d4)_$5`pnx<RQ}';

function getKey() {
    return new TextEncoder().encode(JWT_SECRET);
}

export async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;
    const token = req.cookies.get("token")?.value;

    const protectedRoutes =
        ["/anime/create", "/manga/create", "/anime/edit", "/manga/edit"];
    const isProtected =
        protectedRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`)) ||
        /^\/(anime|manga)\/edit(\/|$)/.test(pathname);

    const guestRoutes = [
        "/auth/login", "/auth/register"
    ];
    const isGuestPage =
        guestRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));

    if (isGuestPage) {
        if (token) {
            try {
                await jwtVerify(token, getKey());
                console.log(`[middleware] Користувач вже авторизований! Редірект на /`);
                const url = new URL("/", req.url);
                return NextResponse.redirect(url);
            } catch {
                console.log(`[middleware] Не валідний токен. Дозволяємо відкрити сторінку логіну.`);
                return NextResponse.next();
            }
        } else {
            return NextResponse.next();
        }
    }

    if (!isProtected) {
        return NextResponse.next();
    }

    const redirectUrl = new URL("/access-denied", req.url);

    if (!token) {
        console.log("[middleware] Токен НЕ знайдено. Редірект на /access-denied");
        return NextResponse.redirect(redirectUrl);
    }

    try {
        const { payload } = await jwtVerify(token, getKey());
        console.log(`[middleware] JWT токен розпаковано: userId=${payload.userId} isAdmin=${payload.isAdmin}`);
        if (!payload.isAdmin) {
            console.log("[middleware] Користувач НЕ є адміном! Редірект на /access-denied");
            return NextResponse.redirect(redirectUrl);
        }
        return NextResponse.next();
    } catch (e) {
        console.log(`[middleware] ПОМІЛКА JWT: ${e}. Токен невалідний. Редірект на /access-denied`);
        return NextResponse.redirect(redirectUrl);
    }
}

export const config = {
    matcher: [
        "/anime/create",
        "/manga/create",
        "/anime/edit/:id*",
        "/manga/edit/:id*",
        "/auth/login",
        "/auth/register",
    ],
};