"use client";
import React, { useMemo, useState } from "react";
import SectionInfo from '@/components/SectionInfo';
import { MediaCard } from "@/components/media/MediaCard";
import CreateAdminButton from "@/components/media/forms/CreateAdminButton";
import {AnimeCardType2} from "@/types/types";

type SortKey = "dateRelease" | "titleEn" | "kind";
type SortOrder = "asc" | "desc";
type AnimeKind = AnimeCardType2["kind"] | "all";
type AnimeStatus = AnimeCardType2["status"] | "all";

type FilterState = {
    kind: AnimeKind;
    status: AnimeStatus;
    sortBy: SortKey;
    sortOrder: SortOrder;
};

export default function AnimeCatalog({ allAnime }: { allAnime: AnimeCardType2[] }) {
    const [filters, setFilters] = useState<FilterState>({
        kind: "all",
        status: "all",
        sortBy: "dateRelease",
        sortOrder: "desc"
    });

    const animeKinds = useMemo(
        () => Array.from(new Set(allAnime.map(a => a.kind))),
        [allAnime]
    );

    const animeStatus = useMemo(
        () => Array.from(new Set(allAnime.map(m => m.status).filter(Boolean))),
        [allAnime]
    );

    const filtered = useMemo(() => {
        let result = allAnime;
        if (filters.kind !== "all") {
            result = result.filter(a => a.kind === filters.kind);
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
    }, [allAnime, filters]);

    return (
        <main className="flex flex-col">
            <SectionInfo text='Каталог аніме' />
            <CreateAdminButton type="anime" />
            {/* Панель фільтрів */}
            <div className="flex gap-[8px] my-[8px] items-end">
                <div>
                    <label className="block" htmlFor='sortKind'>Тип аніме:</label>
                    <select
                        id='sortKind'
                        value={filters.kind}
                        onChange={e => setFilters(f => ({ ...f, kind: e.target.value as AnimeKind }))}
                        className="border"
                    >
                        <option value="all">Всі</option>
                        {animeKinds.map(kind => (
                            kind && <option key={kind} value={kind}>{kind}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block" htmlFor='sortBy'>Сортувати за:</label>
                    <select
                        id='sortBy'
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
                    <label className="block" htmlFor='sortStatus'>Статус:</label>
                    <select
                        id='sortStatus'
                        value={filters.status}
                        onChange={e =>
                            setFilters(f => ({
                                ...f,
                                status: e.target.value as AnimeStatus,
                            }))
                        }
                        className="border"
                    >
                        <option value="all">Всі</option>
                        {animeStatus.map(
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
                    <label className="block" htmlFor='sortOrder'>Порядок:</label>
                    <select
                        id='sortOrder'
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
                {filtered.map(anime => (
                    <MediaCard
                        type="anime"
                        viewType="catalog"
                        key={anime.id}
                        id={anime.id}
                        titleUa={anime.titleUa}
                        titleEn={anime.titleEn}
                        kind={anime.kind}
                        dateRelease={anime.dateRelease}
                        imageUrl={anime?.imageUrl}
                        studioName={anime.studio?.name ?? ''}
                    />
                ))}
            </div>
        </main>
    );
}