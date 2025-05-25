'use client';

import Link from 'next/link';
import React from 'react';
import {useCurrentUser} from "@/hooks/useCurrentUser";

type Props = {
    type: string;
    id: number;
    onDelete?: () => void;
};

const EditDeleteControls: React.FC<Props> = ({ type, id, onDelete }) => {
    const { user, loading } = useCurrentUser();

    if (loading) return null;
    if (!user?.isAdmin) return null;

    const handleDelete = async () => {
        if (!confirm('Підтвердити видалення?')) return;

        try {
            const res = await fetch(`/api/${type}/${id}`, { method: 'DELETE' });
            if (!res.ok) {
                const data = await res.json();
                alert(data.error || 'Помилка під час видалення');
                return;
            }
            alert('Успішно видалено');
            onDelete?.();
        } catch (e) {
            alert('Не вдалося зʼєднатись із сервером');
            console.error(e);
        }
    };

    return (
        <div className="flex gap-[10px] mt-[5px]">
            <Link href={`/${type}/edit/${id}`} className="no-underline  text-[20px]">
                Edit
            </Link>
            <button
                onClick={handleDelete}
                className="text-[#de0000] text-[20px] no-underline bg-transparent border-none cursor-pointer"
            >
                Delete
            </button>
        </div>
    );
};

export default EditDeleteControls;
