'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProfileContent() {
    const [user, setUser] = useState<{
        id: string,
        name: string,
        email: string,
        imageUrl?: string
    } | null>(null);

    useEffect(() => {
        fetch("/api/profile", { credentials: "include" })
            .then(res => res.json())
            .then(data => setUser(data.user))
            .catch(() => setUser(null));
    }, []);

    if (user === undefined) return <div>Завантаження...</div>;
    if (!user) return (
        <div>
            Не авторизовано. <Link href="/auth/login">Увійдіть</Link>
        </div>
    )

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                {user.imageUrl
                    ? <Image src={user.imageUrl} alt="Аватар" width={70} height={70} style={{borderRadius: 12}} />
                    : <span style={{
                        display: 'inline-block', width: 70, height: 70,
                        background: "#000", borderRadius: 12
                    }} />}
                <div>
                    <div><b>Нікнейм:</b> {user.name}</div>
                    <div><b>Email:</b> {user.email}</div>
                    <Link href="/profile/settings"><button>Налаштування профілю</button></Link>
                </div>
            </div>
        </div>
    );
}