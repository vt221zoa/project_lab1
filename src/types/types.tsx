// Виведення аніме повністю
export type AnimeFullType = {
    id: number;
    titleUa?: string | null;
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
        logoURL?: string;
        name?: string;
    };
    genres?: {
        genre?: {
            id: string;
            name?: string;
        };
    }[];
}

// Виведення аніме у головну сторінку та в каталогу
export type AnimeCardType = {
    id: number;
    titleUa?: string | null;
    titleEn: string;
    imageUrl?: string;
    studioName?: string;
}

export type AnimeCardType2 = {
    id: number;
    titleUa?: string;
    titleEn: string;
    imageUrl: string;
    studio?: {
        name?: string;
    };
};

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
        name: string;
    };
    genres?: {
        genre?: {
            id: number;
            name: string;
        };
    }[];
}

// Виведення манги у головну сторінку та в каталогу
export type MangaCardType = {
    id: number;
    titleUa: string;
    titleEn: string;
    imageUrl: string;
    publisherName: string;
}

export type UserHeaderType = {
    id: number;
    name: string;
    imageUrl?: string | null;
}

