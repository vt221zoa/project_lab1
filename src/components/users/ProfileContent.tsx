'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProfileContent() {
    const [user, setUser] = useState<{ id: string, name: string, email: string, imageUrl?: string } | null>(null);

    useEffect(() => {
        fetch("/api/profile", { credentials: "include" })
            .then(res => res.json())
            .then(data => setUser(data.user))
            .catch(() => setUser(null));
    }, []);

    if (user === undefined) return <div>Завантаження...</div>;
    if (!user) return (
        <div className="flex flex-col items-center gap-4 mt-8">
            Не авторизовано.
            <Link className="text-blue-600 font-semibold underline" href="/auth/login">Увійдіть</Link>
        </div>
    );

    async function handleLogout() {
        await fetch("/api/profile/logout", { method: "POST", credentials: "include" });
        window.location.href = "/";
        setUser(null);
    }

    return (
        <div className="mt-[10px] p-[6px] shadow flex flex-col gap-[6px]">
            <div className="flex items-center gap-[10px]">
                {user.imageUrl ? (
                    <Image
                        src={user.imageUrl}
                        alt="Аватар"
                        width={70}
                        height={70}
                    />
                ) : (
                    <span className="inline-block w-[70px] h-[70px] bg-[black] rounded-[10px]" />
                )}
                <div className="flex flex-col gap-[2px]">
                    <div className="font-semibold">Нікнейм: <span className="font-normal">{user.name}</span></div>
                    <div className="font-semibold">Email: <span className="font-normal">{user.email}</span></div>
                    <Link href="/profile/settings">
                            Налаштування профілю
                    </Link>
                </div>
            </div>
            <button
                onClick={handleLogout}
                className="px-[5] py-[2]  mt-[2px] w-[100px]"
                type="button"
            >
                Вийти
            </button>
        </div>
    );
}