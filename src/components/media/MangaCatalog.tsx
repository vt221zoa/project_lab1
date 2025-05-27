"use client";
import React, { useMemo, useState } from "react";
import SectionInfo from '@/components/SectionInfo';
import { MediaCard } from "@/components/media/MediaCard";
import CreateAdminButton from "@/components/media/forms/CreateAdminButton";
import { MangaCardType2 } from "@/types/types";

type SortKey = "dateRelease" | "titleEn" | "kind";
type SortOrder = "asc" | "desc";
type MangaKind = MangaCardType2["kind"] | "all";
type MangaStatus = MangaCardType2["status"] | "all";

type FilterState = {
    kind: MangaKind;
    status: MangaStatus;
    sortBy: SortKey;
    sortOrder: SortOrder;
};

export default function MangaCatalog({ allManga }: { allManga: MangaCardType2[] }) {
    const [filters, setFilters] = useState<FilterState>({
        kind: "all",
        status: "all",
        sortBy: "dateRelease",
        sortOrder: "desc"
    });

    const mangaKinds = useMemo(
        () => Array.from(new Set(allManga.map(m => m.kind))),
        [allManga]
    );

    const mangaStatus = useMemo(
        () => Array.from(new Set(allManga.map(m => m.status).filter(Boolean))),
        [allManga]
    );

    const filtered = useMemo(() => {
        let result = allManga;
        if (filters.kind !== "all") {
            result = result.filter(m => m.kind === filters.kind);
        }
        if (filters.status !== "all") {
            result = result.filter(m => m.status === filters.status);
        }
        result = result.slice().sort((a, b) => {
            const key = filters.sortBy;
            const va = a[key];
            const vb = b[key];
            if (va && vb) {
                if (filters.sortOrder === "desc") {
                    return String(vb).localeCompare(String(va));
                }
                return String(va).localeCompare(String(vb));
            }
            return 0;
        });
        return result;
    }, [allManga, filters]);

    return (
        <main className="flex flex-col">
            <SectionInfo text='Каталог манги' />
            <CreateAdminButton type="manga" />
            {/* Панель фільтрів */}
            <div className="flex gap-[8px] my-[8px] items-end">
                <div>
                    <label className="block">Тип манги:</label>
                    <select
                        value={filters.kind}
                        onChange={e => setFilters(f => ({ ...f, kind: e.target.value as MangaKind }))}
                        className="border"
                    >
                        <option value="all">Всі</option>
                        {mangaKinds.map(kind =>
                            kind && <option key={kind} value={kind}>{kind}</option>
                        )}
                    </select>
                </div>
                <div>
                    <label className="block">Сортувати за:</label>
                    <select
                        value={filters.sortBy}
                        onChange={e => setFilters(f => ({ ...f, sortBy: e.target.value as SortKey }))}
                        className="border"
                    >
                        <option value="dateRelease">Рік</option>
                        <option value="titleEn">Назва англ.</option>
                        <option value="kind">Тип</option>
                    </select>
                </div>
                <div>
                    <label className="block">Статус:</label>
                    <select
                        value={filters.status}
                        onChange={e =>
                            setFilters(f => ({
                                ...f,
                                status: e.target.value as MangaStatus,
                            }))
                        }
                        className="border"
                    >
                        <option value="all">Всі</option>
                        {mangaStatus.map(
                            status =>
                                status && (
                                    <option key={status} value={status}>
                                        {status}
                                    </option>
                                )
                        )}
                    </select>
                </div>
                <div>
                    <label className="block">Порядок:</label>
                    <select
                        value={filters.sortOrder}
                        onChange={e => setFilters(f => ({ ...f, sortOrder: e.target.value as SortOrder }))}
                        className="border"
                    >
                        <option value="desc">desc</option>
                        <option value="asc">asc</option>
                    </select>
                </div>
            </div>
            <div className="content_block flex flex-wrap gap-[9.7434px]">
                {filtered.map(manga => (
                    <MediaCard
                        type="manga"
                        viewType="catalog"
                        key={manga.id}
                        id={manga.id}
                        titleUa={manga.titleUa}
                        titleEn={manga.titleEn}
                        kind={manga.kind}
                        dateRelease={manga.dateRelease}
                        imageUrl={manga.imageUrl}
                        publisherName={manga.publisher?.name ?? ''}
                    />
                ))}
            </div>
        </main>
    );
}