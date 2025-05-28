'use client';

import React, { useState } from "react";
import Image from "next/image";
import SectionInfo from "@/components/SectionInfo";
import { useRouter } from 'next/navigation';

type Studio = { id: number; name: string };
type Genre = { id: number; name: string };

export interface AnimeData {
    titleUa: string;
    titleEn: string;
    titleJp: string;
    description: string;
    kind: string;
    episodes: number;
    status: string;
    dateRelease: string;
    imageUrl: string;
    rating: string;
    studio?: Studio;
    genres?: { genre: Genre }[];
}

interface AnimeFormProps {
    initialData?: AnimeData;
    studios: Studio[];
    genres: Genre[];
    animeId?: number;
    onSubmit?: (data: AnimeData) => void;
}

const RATING_OPTIONS = [
    { value: 'G',    label: 'G (Дитячий)' },
    { value: 'PG',   label: 'PG (До 13 років)' },
    { value: 'PG-13',label: 'PG-13 (13+)' },
    { value: 'R-17', label: 'R-17 (17+)' },
    { value: 'R+',   label: 'R+ (18+)' },
    { value: 'Rx',   label: 'Rx' },
];

const STATUS_OPTIONS = [
    { value: 'Онгоїнг', label: 'Онгоїнг' },
    { value: 'Релізовано', label: 'Релізовано' },
    { value: 'Анонсовано', label: 'Анонсовано' },
];

const KIND_OPTIONS = [
    { value: 'TV-серіал', label: 'TV-серіал' },
    { value: 'Фільм', label: 'Фільм' },
    { value: 'OVA', label: 'OVA' },
    { value: 'ONA', label: 'ONA' },
];

export default function AnimeForm({ initialData, studios, genres, animeId, onSubmit }: AnimeFormProps) {
    const [form, setForm] = useState({
        titleUa: initialData?.titleUa || "",
        titleEn: initialData?.titleEn || "",
        titleJp: initialData?.titleJp || "",
        description: initialData?.description || "",
        kind: initialData?.kind || "",
        episodes: initialData?.episodes?.toString() || "",
        status: initialData?.status || "",
        dateRelease: initialData?.dateRelease?.slice(0, 10) || "",
        imageUrl: initialData?.imageUrl || "",
        rating: initialData?.rating || "",
        studioId: initialData?.studio?.id?.toString() || "",
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
            setForm((f) => ({
                ...f,
                imageUrl: URL.createObjectURL(file),
            }));
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
            formData.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET || '');

            formData.append('folder', 'anime');

            const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
                {
                    method: 'POST',
                    body: formData
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
            episodes: Number(form.episodes),
            rating: form.rating,
            studioId: Number(form.studioId) || null,
            genreIds: form.genreIds,
            imageUrl: uploadedImageUrl,
        };

        if (onSubmit) {
            onSubmit(submitData);
        }

        let url = '/api/anime';
        let method = 'POST';

        if (animeId) {
            url = `/api/anime/${animeId}`;
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
                router.push(`/anime/${animeId || data.anime?.id}`);
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

            <div>
                <SectionInfo text="Інформація" />
                <div className="flex flex-col gap-[6px] media-form">
                    <div>
                        <label htmlFor="titleUa">Українська назва: </label>
                        <input
                            id="titleUa"
                            className="input"
                            type="text"
                            name="titleUa"
                            placeholder="Аніме"
                            value={form.titleUa}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="titleEn">Англійська назва: </label>
                        <input
                            id="titleEn"
                            className="input"
                            type="text"
                            name="titleEn"
                            placeholder="Anime"
                            value={form.titleEn}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="titleJp">Японська назва: </label>
                        <input
                            id="titleJp"
                            className="input"
                            type="text"
                            name="titleJp"
                            placeholder="アニメ"
                            value={form.titleJp}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="kind">Тип: </label>
                        <select
                            id="kind"
                            className="input"
                            name="kind"
                            value={form.kind}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Оберіть тип: </option>
                            {KIND_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="episodes">Кількість епізодів: </label>
                        <input
                            id="episodes"
                            className="input"
                            type="number"
                            name="episodes"
                            placeholder="1234"
                            value={form.episodes}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="status">Статус: </label>
                        <select
                            id="status"
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
                        <label htmlFor="dateRelease">Дата релізу: </label>
                        <input
                            id="dateRelease"
                            className="input"
                            type="date"
                            name="dateRelease"
                            value={form.dateRelease}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="rating">Віковий рейтинг: </label>
                        <select
                            id="rating"
                            className="input"
                            name="rating"
                            value={form.rating}
                            onChange={handleChange}
                        >
                            <option value="">Оберіть рейтинг</option>
                            {RATING_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="genre">Жанри:</label>
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

            {/* Студія */}
            <div className="media-form">
                <SectionInfo text="Студія" />
                <div>
                    <label htmlFor="studioId" style={{display: "none"}}>Студія</label>
                    <select
                        id="studioId"
                        name="studioId"
                        value={form.studioId}
                        onChange={handleChange}
                        className="input"
                    >
                        <option value="">Оберіть студію</option>
                        {studios.map(s => (
                            <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            {/* Опис */}
            <div className="col-start-2 col-span-3">
                <SectionInfo text="Опис" />
                <textarea
                    className="input rounded-[3px] w-full resize-y min-h-[120px] max-h-[500px] w-[-10px] "
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
                    {initialData ? "Оновити аніме" : "Створити аніме"}
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