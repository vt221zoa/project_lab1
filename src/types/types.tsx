// Виведення аніме повністю
export type AnimeFullType = {
    id: string;
    titleUa?: string | null;
    titleEn: string;
    titleJp?: string;
    description?: string;
    rating?: number;
    kind: string;
    episodes?: string;
    status: string;
    dateRelease?: string;
    imageUrl?: string;
    studio?: {
        id: string;
        name: string;
    };
    genres?: {
        genre: {
            id: string;
            name: string;
        };
    }[];
}

// Виведення аніме у головну сторінку та в каталогу
export type AnimeCardType = {
    titleUa?: string | null;
    titleEn: string;
    imageUrl?: string;
    studioName?: string;
}

export type AnimeCardType2 = {
    id: string;
    titleUa?: string;
    titleEn: string;
    imageUrl: string;
    studio?: {
        name?: string;
    };
};

// Виведення манги повністю
export type MangaFullType = {
    id: string;
    titleUa?: string;
    titleEn: string;
    titleJp?: string;
    description?: string;
    kind: string;
    chapters?: string;
    volumes?: string;
    dateRelease?: string;
    status: string;
    imageUrl?: string;
    publisher?: {
        id: string;
        name: string;
    };
    genres?: {
        genre: {
            id: string;
            name: string;
        };
    }[];
}

// Виведення манги у головну сторінку та в каталогу
export type MangaCardType = {
    id: string;
    titleUa: string;
    titleEn: string;
    imageUrl: string;
    publisherName: string;
}

export type UserHeaderType = {
    id: string;
    name: string;
    imageUrl?: string | null;
}

