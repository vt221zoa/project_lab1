'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { UserProfile } from "@/types/types";

const CLOUDINARY_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || process.env.CLOUDINARY_UPLOAD_PRESET || '';
const CLOUDINARY_CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME || '';

export default function SettingsForm() {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        fetch("/api/profile", { credentials: "include" })
            .then((r) => r.json())
            .then((data) => {
                if (data.user) {
                    setUser(data.user as UserProfile);
                    setName(data.user.name);
                    setImageUrl(data.user.imageUrl || '');
                }
            });
    }, []);

    if (!user) return <div>Завантаження...</div>;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files && e.target.files[0];
        if (!f) return;
        setFile(f);
        setImageUrl(URL.createObjectURL(f));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        let finalImageUrl = imageUrl;
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', CLOUDINARY_PRESET);
            formData.append('folder', 'user_avatars');
            const upload = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/image/upload`, {
                method: 'POST',
                body: formData,
            });
            if (!upload.ok) {
                setError("Не вдалося завантажити аватарку");
                return;
            }
            const res = await upload.json();
            finalImageUrl = res.secure_url;
        }
        const resp = await fetch("/api/profile", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, imageUrl: finalImageUrl }),
        });
        if (!resp.ok) {
            setError("Не вдалося оновити профіль");
            return;
        }
        setSuccess("Профіль оновлено!");
        setFile(null);
        window.location.href = "/profile";
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-[350px] flex flex-col gap-[10px]"
        >
            <label className="text-[18px] flex flex-col gap-[8px]">
                Ваш аватар:
                <div className="mb-[6px] cursor-pointer">
                    {imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt="Аватар"
                            width={120}
                            height={120}
                            className="object-cover rounded-[10px]"
                        />
                    ) : (
                        <span className="inline-block bg-[black] w-[80px] h-[80px]" />
                    )}
                </div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="block text-[14px] mt-[6px]"
                />
            </label>

            <label className="text-[18px] flex flex-col gap-[5px]">
                Ваш нікнейм:
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Ім'я"
                    required
                    className="px-[12px] py-[7px] border text-[16px]"
                />
            </label>
            <button
                type="submit"
                className=" py-[10px] text-[16px] cursor-pointer"
            >
                Зберегти
            </button>
            {error && (
                <div className="text-[15px] mt-[6px] text-[red]">{error}</div>
            )}
            {success && (
                <div className="text-[15px] mt-[6px] text-[green]">{success}</div>
            )}
        </form>
    );
}