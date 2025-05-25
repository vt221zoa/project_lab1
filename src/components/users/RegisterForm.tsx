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
        <form onSubmit={handleSubmit}>
            <h2>Реєстрація</h2>
            <input
                name="name"
                placeholder="Ім'я"
                value={form.name}
                onChange={handleChange}
                required
            />
            <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Пароль"
                value={form.password}
                onChange={handleChange}
                required
            />
            <button type="submit">Зареєструватися</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Link href='/auth/login'>Вже є акаунт?</Link>
        </form>
    );
}