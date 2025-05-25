'use client'
import { useEffect, useState } from "react";
import {UseCurrentUser, UserProfile} from '@/types/types'

export function useCurrentUser(): UseCurrentUser {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let ignore = false;
        setLoading(true);
        fetch('/api/profile', { credentials: "include" })
            .then(async (res) => {
                if (!res.ok) throw new Error();
                const data = await res.json();
                if (!ignore) {
                    setUser(data.user);
                    setLoading(false);
                }
            })
            .catch(() => {
                if (!ignore) {
                    setUser(null);
                    setLoading(false);
                    setError(true);
                }
            });

        return () => { ignore = true };
    }, []);

    return { user, loading, error };
}

