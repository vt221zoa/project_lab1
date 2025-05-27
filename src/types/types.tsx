// Виведення аніме повністю
export type AnimeFullType = {
    id: number;
    titleUa?: string;
    titleEn: string;
    titleJp?: string;
    description?: string;
    rating?: string;
    kind: string;
    episodes?: number;
    status: string;
    dateRelease?: string;
    imageUrl?: string;
    studio?: {
        id: number;
        logoUrl?: string;
        name?: string;
    };
    genres?: {
        genre?: {
            id: string;
            name?: string;
        };
    }[];
}

// Виведення манги повністю
export type MangaFullType = {
    id: number;
    titleUa?: string;
    titleEn: string;
    titleJp?: string;
    description?: string;
    kind: string;
    chapters?: number;
    volumes?: number;
    dateRelease?: string;
    status: string;
    imageUrl?: string;
    publisher?: {
        id: number;
        logoUrl?: string;
        name: string;
    };
    genres?: {
        genre?: {
            id: number;
            name: string;
        };
    }[];
}

// Виведення аніме частково
export type AnimeCardType2 = {
    id: number;
    titleUa?: string | null;
    titleEn: string;
    kind: string;
    dateRelease?: string | null;
    imageUrl?: string | null;
    studio?: { name?: string };
};

// Виведення манги частково
export type MangaCardType2 = {
    id: number;
    titleUa?: string;
    titleEn: string;
    kind: string;
    dateRelease?: string;
    imageUrl?: string;
    publisher?: {
        name?: string;
    };
}

export type UserProfile = {
    id: string;
    name: string;
    email: string;
    imageUrl?: string | null;
    isAdmin?: boolean;
}

export type UseCurrentUser = {
    user: UserProfile | null;
    loading: boolean;
    error: boolean;
};


export interface JwtPayload {
    userId: string;
    email: string;
    isAdmin: boolean;
}