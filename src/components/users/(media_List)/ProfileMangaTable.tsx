import Link from "next/link";
import React from "react";
import {MangaEntry} from "@/types/types";

type Props = {
    mangaList: MangaEntry[];
};

export default function ProfileMangaTable({ mangaList }: Props) {
    if (!mangaList.length) {
        return <div>Список порожній</div>;
    }
    return (
        <table className="min-w-full border my-[6px] bg-[white] shadow">
            <thead>
            <tr>
                <th className="p-[2px]">#</th>
                <th className="p-[2px] text-left">Назва манги</th>
                <th className="p-[2px]">Статус</th>
                <th className="p-[2px]">Оцінка</th>
                <th className="p-[2px]">Гл.</th>
                <th className="p-[2px]">Томів</th>
            </tr>
            </thead>
            <tbody>
            {mangaList.map((entry, i) => (
                <React.Fragment key={entry.mangaId}>
                    <tr>
                        <td className="px-[2px] py-[1px] text-center">{i + 1}</td>
                        <td className="px-[2px] py-[1px] ">
                            <Link
                                href={`/manga/${entry.manga.id}`}
                                className="text-[blue]"
                            >
                                {entry.manga.titleUa || entry.manga.titleEn}
                            </Link>
                        </td>
                        <td className="px-[2px] py-[1px] text-center">
                            {entry.status}
                        </td>
                        <td className="px-[2px] py-[1px] text-center">
                            {entry.score ?? '—'}
                        </td>
                        <td className="px-[2px] py-[1px] text-center">
                            {entry.chaptersRead}
                            {entry.manga.chapters ? ` / ${entry.manga.chapters}` : ""}
                        </td>
                        <td className="px-[2px] py-[1px] text-center">
                            {entry.volumesRead}
                            {entry.manga.volumes ? ` / ${entry.manga.volumes}` : ""}
                        </td>
                    </tr>
                    {entry.comment && (
                        <tr className="text-[gray]">
                            <td colSpan={5} className="p-[2px]">
                                Коментар: {entry.comment}
                            </td>
                        </tr>
                    )}
                </React.Fragment>
            ))}
            </tbody>
        </table>
    );
}