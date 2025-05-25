'use client'
import Link from 'next/link'
import { useCurrentUser } from '@/hooks/useCurrentUser'

type CreateAdminButtonProps = {
    type: 'anime' | 'manga';
    className?: string;
};

const CREATE_LABELS: Record<'anime' | 'manga', string> = {
    anime: 'Створити аніме',
    manga: 'Створити манґу',
};

export default function CreateAdminButton({ type, className = '' }: CreateAdminButtonProps) {
    const { user, loading } = useCurrentUser();

    if (loading) return null;
    if (!user?.isAdmin) return null;

    return (
        <div className={className || 'flex mb-[20px] text-[18px]'}>
            <Link href={`/${type}/create`}>{CREATE_LABELS[type]}</Link>
        </div>
    );
}