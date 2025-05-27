'use client';

import React, { useState } from "react";
import Image from "next/image";
import SectionInfo from "@/components/SectionInfo";
import { useRouter } from "next/navigation";

type Genre = { id: number; name: string };
type Publisher = { id: number; name: string };

export interface MangaData {
    titleUa: string;
    titleEn: string;
    titleJp: string;
    description: string;
    kind: string;
    volumes: number;
    chapters: number;
    status: string;
    dateRelease: string;
    imageUrl: string;
    publisher?: Publisher;
    genres?: { genre: Genre }[];
}

interface MangaFormProps {
    initialData?: MangaData;
    publishers: Publisher[];
    genres: Genre[];
    mangaId?: number;
    onSubmit?: (data: MangaData) => void;
}

const STATUS_OPTIONS = [
    { value: "Анонсовано", label: "Анонсовано" },
    { value: "Випускається", label: "Випускається" },
    { value: "Видано", label: "Видано" },
    { value: "Призупинено", label: "Призупинено" },
    { value: "Припинено", label: "Припинено" },
];

const KIND_OPTIONS = [
    { value: "Манга", label: "Манга" },
    { value: "Манхва", label: "Манхва" },
    { value: "Маньхуа", label: "Маньхуа" },
    { value: "Ваншот", label: "Ваншот" },
    { value: "Додзінсі", label: "Додзінсі" },
];

export default function MangaForm({ initialData, publishers, genres, mangaId}: MangaFormProps) {
    const [form, setForm] = useState({
        titleUa: initialData?.titleUa || "",
        titleEn: initialData?.titleEn || "",
        titleJp: initialData?.titleJp || "",
        description: initialData?.description || "",
        kind: initialData?.kind || "",
        volumes: initialData?.volumes?.toString() || "",
        chapters: initialData?.chapters?.toString() || "",
        status: initialData?.status || "",
        dateRelease: initialData?.dateRelease?.slice(0, 10) || "",
        imageUrl: initialData?.imageUrl || "",
        publisherId: initialData?.publisher?.id?.toString() || "",
        genreIds: initialData?.genres?.map((g: { genre: Genre }) => g.genre.id) || [],
    });


    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const target = e.target;
        const { name, value } = target;
        if (target instanceof HTMLInputElement && target.type === "checkbox") {
            const { checked } = target;
            setForm((f) => ({
                ...f,
                genreIds: checked
                    ? [...f.genreIds, Number(value)]
                    : f.genreIds.filter((id: number) => id !== Number(value)),
            }));
        } else {
            setForm((f) => ({
                ...f,
                [name]: value,
            }));
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            setForm((f) => ({ ...f, imageUrl: URL.createObjectURL(file) }));
        }
    };

    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        let uploadedImageUrl = form.imageUrl;

        if (imageFile) {
            const formData = new FormData();
            formData.append('file', imageFile);
            formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || '');

            formData.append('folder', 'manga');

            const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
                {
                    method: 'POST',
                    body: formData,
                });

            if (!res.ok) {
                const errorData = await res.json();
                setError("Помилка при завантаженні зображення: " + (errorData.error?.message || "Unknown error"));
                return;
            }
            const data = await res.json();
            uploadedImageUrl = data.secure_url;
        }

        const submitData = {
            ...form,
            volumes: Number(form.volumes),
            chapters: Number(form.chapters),
            publisherId: Number(form.publisherId) || null,
            genreIds: form.genreIds,
            imageUrl: uploadedImageUrl,
        };

        let url = '/api/manga';
        let method = 'POST';

        if (mangaId) {
            url = `/api/manga/${mangaId}`;
            method = 'PATCH';
        }

        try {
            const res = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(submitData),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setError("");
                alert("Успішно!");
                router.push(`/manga/${mangaId || data.manga?.id}`);
            } else {
                setError(data?.message || data?.error || "Сталася невідома помилка");
            }
        } catch {
            setError("Сталася помилка відправки. Спробуйте ще раз.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-[270px_minmax(300px,1fr)_minmax(300px,1fr)] gap-[20px] mb-[7px] items-start">
            {/* Зображення */}
            <div className="flex justify-center">
                <label className="w-[270px] h-[390px] rounded-full bg-gray-200 flex items-center justify-center cursor-pointer text-3xl text-[#aaa] hover:bg-gray-300 aspect-square relative">
                    {form.imageUrl ? (
                        <Image
                            src={form.imageUrl}
                            alt="Обкладинка"
                            width={270}
                            height={390}
                            style={{ objectFit: 'cover' }}
                        />
                    ) : (
                        <div className='flex flex-col items-center justify-center text-[30px]'>
                            <span>+</span>
                            <span>Add to image</span>
                        </div>
                    )}
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                </label>
            </div>

            {/* Інформація */}
            <div>
                <SectionInfo text="Інформація" />
                <div className="flex flex-col gap-[6px] media-form">
                    <div>
                        <label>Українська назва: </label>
                        <input
                            className="input"
                            type="text"
                            name="titleUa"
                            placeholder="Манга"
                            value={form.titleUa}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Англійська назва: </label>
                        <input
                            className="input"
                            type="text"
                            name="titleEn"
                            placeholder="Manga"
                            value={form.titleEn}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Японська назва: </label>
                        <input
                            className="input"
                            type="text"
                            name="titleJp"
                            placeholder="漫画"
                            value={form.titleJp}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Тип: </label>
                        <select
                            className="input"
                            name="kind"
                            value={form.kind}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Оберіть тип</option>
                            {KIND_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Кількість томів: </label>
                        <input
                            className="input"
                            type="number"
                            name="volumes"
                            placeholder="10"
                            value={form.volumes}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Кількість розділів: </label>
                        <input
                            className="input"
                            type="number"
                            name="chapters"
                            placeholder="100"
                            value={form.chapters}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Статус: </label>
                        <select
                            className="input"
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Оберіть статус</option>
                            {STATUS_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Дата релізу: </label>
                        <input
                            className="input"
                            type="date"
                            name="dateRelease"
                            value={form.dateRelease}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Жанри:</label>
                        <div className="max-h-[120px] overflow-y-auto custom-scroll bg-[#ffffff] border rounded-[3px]">
                            {genres.map((g) => (
                                <label key={g.id} className="block">
                                    <input
                                        type="checkbox"
                                        value={g.id}
                                        checked={form.genreIds.includes(g.id)}
                                        onChange={handleChange}
                                    />
                                    {" "}{g.name}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Видавництво */}
            <div className="media-form">
                <SectionInfo text="Видавництво" />
                <div>
                    <select
                        name="publisherId"
                        value={form.publisherId}
                        onChange={handleChange}
                        className="input"
                    >
                        <option value="">Оберіть видавництво</option>
                        {publishers.map(p => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Опис */}
            <div className="col-start-2 col-span-3">
                <SectionInfo text="Опис" />
                <textarea
                    className="input rounded-[3px] w-full resize-y min-h-[120px] max-h-[500px] w-[-10px]"
                    name="description"
                    placeholder="Опис"
                    value={form.description}
                    onChange={handleChange}
                />
            </div>
            <div className="col-start-1 row-start-2 flex flex-col" >
                <button
                    type="submit"
                    className=""
                >
                    {initialData ? "Оновити мангу" : "Створити мангу"}
                </button>
                {error && (
                    <div style={{ color: "red", gridColumn: "1 / -1", marginTop: 6 }}>
                        {error}
                    </div>
                )}
            </div>
        </form>
    );
}