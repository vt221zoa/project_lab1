"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AccessDeniedPage() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace("/");
        }, 3000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className='text-[red] flex justify-center center my-[80px] text-[900] font-[1.8rem]'>
            Доступ заборонено!<br/><br/>
            Ви будете перенаправлені на головну сторінку.
        </div>
    );
}