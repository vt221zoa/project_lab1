'use client'
import { useEffect, useState } from "react";

export function useCurrentUser() {
    const [user, setUser] = useState<{ id: string, name: string, email: string, imageUrl?: string } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/profile', { credentials: "include" })
            .then(res => res.json())
            .then(data => { setUser(data.user); setLoading(false); })
            .catch(() => setLoading(false));
    }, []);

    return { user, loading };
}