'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterForm() {
    const router = useRouter();
    const [form, setForm] = useState({ email: "", password: "", name: "" });
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        const data = await res.json();
        if (!res.ok) {
            setError(data.message || "Помилка");
            return;
        }
        alert("Успішна реєстрація!");
        router.push("/auth/login");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-[12px] flex flex-col gap-[4px] p-[8px] items-center"
        >
            <h2 className="font-bold text-center mb-4">Реєстрація</h2>
            <input
                name="name"
                placeholder="Ім'я"
                value={form.name}
                onChange={handleChange}
                required
                className="p-[3px] border border-gray-300"
            />
            <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="p-[3px] border border-gray-300"
            />
            <input
                type="password"
                name="password"
                placeholder="Пароль"
                value={form.password}
                onChange={handleChange}
                required
                className="py-[3px] border border-gray-300"
            />
            <button
                type="submit"
                className="mt-[4px] px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
            >
                Зареєструватися
            </button>
            {error && (
                <p className="text-[red] text-center p-[2px]">{error}</p>
            )}
            <div className="text-center mt-[2px]">
                <Link href='/auth/login' className="text-blue-600 hover:underline">
                    Вже є акаунт?
                </Link>
            </div>
        </form>
    );
}