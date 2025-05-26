'use client'
import React, { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        const data = await res.json();
        if (!res.ok) {
            setError(data.message || "Помилка");
            return;
        }
        window.location.href = "/";
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-[12px] flex flex-col gap-[4px] p-[8px] items-center"
        >
            <h2 className=" font-bold text-center mb-4">Вхід</h2>
            <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="p-[3px] border border-gray-300 "
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
            >
                Увійти
            </button>
            {error && (
                <p className="text-[red] text-center p-[2px]">
                    {error}
                </p>
            )}
            <div className="text-center mt-[2px]">
                <Link
                    href='/auth/register'
                >
                    Ще не маєте профілю?
                </Link>
            </div>
        </form>
    );
}