'use client';
import { useState, useEffect, FormEvent } from 'react';

type MediaType = 'anime' | 'manga';

type Props = {
    type: MediaType;
    totalEpisodes?: number | null;
    totalVolumes?: number | null;
    totalChapters?: number | null;
    mediaId: number;
};

type UserAnime = {
    animeId: number;
    status: string;
    score: number | null;
    episodesWatched: number;
    comment: string | null;
};
type UserManga = {
    mangaId: number;
    status: string;
    score: number | null;
    chaptersRead: number;
    volumesRead: number;
    comment: string | null;
};

export default function MediaAddForm({
                                         type,
                                         totalEpisodes,
                                         totalVolumes,
                                         totalChapters,
                                         mediaId,
                                     }: Props) {
    const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null);

    const [status, setStatus] = useState<string>('Дивлюся');
    const [rating, setRating] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [volumes, setVolumes] = useState<number>(0);
    const [chapters, setChapters] = useState<number>(0);
    const [comment, setComment] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [result, setResult] = useState<string | null>(null);
    const [initialized, setInitialized] = useState<boolean>(false);
    const [isInList, setIsInList] = useState<boolean>(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch('/api/auth/users/me');
                setIsSignedIn(res.ok);
            } catch {
                setIsSignedIn(false);
            }
        };
        checkAuth();
    }, []);

    useEffect(() => {
        const fetchUserMedia = async (): Promise<void> => {
            if (!isSignedIn) {
                setInitialized(true);
                setIsInList(false);
                return;
            }
            const endpoint =
                type === 'anime'
                    ? `/api/profile/user-list/anime?animeId=${mediaId}`
                    : `/api/profile/user-list/manga?mangaId=${mediaId}`;
            try {
                const res = await fetch(endpoint);
                if (!res.ok) {
                    setInitialized(true);
                    setIsInList(false);
                    return;
                }
                const data = (await res.json()) as UserAnime | UserManga | null;
                if (!data) {
                    setIsInList(false);
                    setInitialized(true);
                    return;
                }
                setIsInList(true);
                if (type === 'anime') {
                    const entry = data as UserAnime;
                    setStatus(entry.status ?? 'Дивлюся');
                    setRating(entry.score ?? 0);
                    setProgress(entry.episodesWatched ?? 0);
                    setComment(entry.comment ?? '');
                } else {
                    const entry = data as UserManga;
                    setStatus(entry.status ?? 'Читаю');
                    setRating(entry.score ?? 0);
                    setChapters(entry.chaptersRead ?? 0);
                    setVolumes(entry.volumesRead ?? 0);
                    setComment(entry.comment ?? '');
                }
                setInitialized(true);
            } catch {
                setIsInList(false);
                setInitialized(true);
            }
        };
        fetchUserMedia();
    }, [type, mediaId, isSignedIn]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        setResult(null);

        let endpoint: string;
        let payload: UserAnime | UserManga;
        if (type === 'anime') {
            endpoint = '/api/profile/user-list/anime';
            payload = {
                animeId: mediaId,
                status,
                score: rating,
                episodesWatched: progress,
                comment: comment === '' ? null : comment,
            };
        } else {
            endpoint = '/api/profile/user-list/manga';
            payload = {
                mangaId: mediaId,
                status,
                score: rating,
                chaptersRead: chapters,
                volumesRead: volumes,
                comment: comment === '' ? null : comment,
            };
        }

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            if (!res.ok) {
                setResult('Помилка збереження!');
                return;
            }
            await res.json();
            setResult('Додано/Оновлено');
            setIsInList(true);
        } catch {
            setResult('Помилка мережі!');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (): Promise<void> => {
        setLoading(true);
        setResult(null);

        let endpoint = '';
        if (type === 'anime') {
            endpoint = `/api/profile/user-list/anime?animeId=${mediaId}`;
        } else {
            endpoint = `/api/profile/user-list/manga?mangaId=${mediaId}`;
        }

        try {
            const res = await fetch(endpoint, { method: 'DELETE' });
            if (!res.ok) {
                setResult('Помилка видалення!');
                return;
            }

            setResult('Видалено із мого списку');
            setIsInList(false);
            if (type === 'anime') {
                setStatus('Дивлюся');
            } else setStatus('Читаю');

            setRating(0);
            setProgress(0);
            setVolumes(0);
            setChapters(0);
            setComment('');
        } catch {
            setResult('Помилка мережі!');
        } finally {
            setLoading(false);
        }
    };

    if (isSignedIn === null || !initialized) return <div className='col-start-1 row-start-2'>Завантаження...</div>;
    if (!isSignedIn)
        return (
            <div className="text-[red] col-start-1 row-start-2">
                Щоб додати до списку, Вам потрібно зареєструватись!
            </div>
        );

    return (
        <form
            className="mt-[4px] space-y-[4px] border-t pt-[4px] col-start-1 row-start-2"
            onSubmit={handleSubmit}
        >

            <div>
                <label className="block">Статус</label>
                {type === 'anime' && (
                <select
                    className="w-full border px-[2px] py-[1px]"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="Дивлюся">Дивлюся</option>
                    <option value="Переглянуто">Переглянуто</option>
                    <option value="Заплановано">Заплановано</option>
                    <option value="Брошено">Брошено</option>
                    <option value="Відкладено">Відкладено</option>
                </select>
                )}
                {type === 'manga' && (
                    <select
                        className="w-full border px-[2px] py-[1px]"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="Читаю">Читаю</option>
                        <option value="Прочитав">Прочитав</option>
                        <option value="Планую читати">Планую читати</option>
                        <option value="Брошено">Брошено</option>
                        <option value="Відкладено">Відкладено</option>
                    </select>
                )}
            </div>
            <div>
                <label className="block">Оцінка (0–10)</label>
                <input
                    type="number"
                    className="w-full border px-[2px] py-[1px]"
                    min={0}
                    max={10}
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                />
            </div>
            {type === 'anime' && (
                <div>
                    <label className="block">
                        Переглянуто епізодів {totalEpisodes ? ` з ${totalEpisodes}` : ''}
                    </label>
                    <input
                        type="number"
                        className="w-full border px-[2px] py-[1px]"
                        min={0}
                        max={totalEpisodes ?? undefined}
                        value={progress}
                        onChange={(e) => setProgress(Number(e.target.value))}
                    />
                </div>
            )}
            {type === 'manga' && (
                <>
                    <div>
                        <label className="block">
                            Прочитано томів {totalVolumes ? ` з ${totalVolumes}` : ''}
                        </label>
                        <input
                            type="number"
                            className="w-full border px-[2px] py-[1px]"
                            min={0}
                            max={totalVolumes ?? undefined}
                            value={volumes}
                            onChange={(e) => setVolumes(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label className="block">
                            Прочитано розділів {totalChapters ? ` з ${totalChapters}` : ''}
                        </label>
                        <input
                            type="number"
                            className="w-full border px-[2px] py-[1px]"
                            min={0}
                            max={totalChapters ?? undefined}
                            value={chapters}
                            onChange={(e) => setChapters(Number(e.target.value))}
                        />
                    </div>
                </>
            )}
            <div>
                <label className="block">Коментар</label>
                <textarea
                    className="w-full border px-[1px] py-[1px] resize-y"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>
            <div className="flex justify-between">
                <button
                    type="submit"
                    className="bg-[green] text-[white] px-[1px] py-[2px]"
                    disabled={loading}
                >
                    {loading ? 'Збереження...' : isInList ? 'Оновити' : 'Додати до списку'}
                </button>
                {isInList && (
                    <button
                        type="button"
                        className="bg-[red] text-[white] px-[1px] py-[2px] rounded"
                        disabled={loading}
                        onClick={handleDelete}
                    >
                        Видалити з списку
                    </button>
                )}
            </div>
            {result && <div className="mt-1 text-green-700">{result}</div>}
        </form>
    );
}