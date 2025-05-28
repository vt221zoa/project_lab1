import React from "react";
import { render, screen } from "@testing-library/react";
import MediaDetails from "@/components/media/MediaDetails";
import {AnimeFullType, MangaFullType} from "@/types/types";

const animeData: AnimeFullType = {
    id: 1,
    titleUa: "Наруто",
    titleEn: "Naruto",
    titleJp: "ナルト",
    kind: "TV",
    episodes: 220,
    status: "Релізовано",
    dateRelease: "2002-10-03",
    rating: "PG-13",
    genres: [
        { genre: { id: 1, name: "Пригоди" } },
        { genre: { id: 4, name: "Екшен" } }
    ],
    studio: { id: 2, name: "Studio Pierrot", logoUrl: "pierrot.png" },
    description: "Опис аніме",
    imageUrl: "naruto.jpg",
};

const mangaData: MangaFullType = {
    id: 2,
    titleUa: "Зошит смерті",
    titleEn: "Death Note",
    titleJp: "デスノート",
    kind: "Манга",
    volumes: 12,
    chapters: 108,
    status: "Завершено",
    dateRelease: "2003-12-01",
    genres: [{ genre: { id: 9, name: "Психологія" } }],
    publisher: { id: 4, name: "Shueisha" },
    description: "Опис манги",
    imageUrl: "",
};

describe("MediaDetails (Anime)", () => {
    it("відображає заголовок аніме всіма мовами", () => {
        render(<MediaDetails type="anime" data={animeData} />);
        expect(screen.getByRole('heading')).toHaveTextContent("Наруто / Naruto / ナルト");
    });

    it("відображає жанри, кількість епізодів, рейтинг, дату, студію", () => {
        render(<MediaDetails type="anime" data={animeData} />);

        expect(screen.getByText("Тип:").parentElement?.textContent).toBe("Тип: TV");
        expect(screen.getByText("Епізодів:").parentElement?.textContent).toBe("Епізодів: 220");
        expect(screen.getByText("Віковий рейтинг:").parentElement?.textContent).toBe("Віковий рейтинг: PG-13");
        expect(screen.getByText("Жанри:").parentElement?.textContent).toBe("Жанри: Пригоди, Екшен");

        expect(screen.getByText(/Інформація/i)).toBeInTheDocument();
        expect(screen.getByText(/Дата релізу:/i)).toBeInTheDocument();
        expect(screen.getByText(/Студія/)).toBeInTheDocument();
        expect(screen.getByAltText("Studio Pierrot")).toBeInTheDocument();

        expect(screen.getByTestId("controls")).toBeInTheDocument();
        expect(screen.getByText("Опис аніме")).toBeInTheDocument();

        const img = screen.getByAltText("Naruto");
        expect(img).toHaveAttribute("src", "cloudinary/naruto.jpg");
    });
});

describe("MediaDetails (Manga)", () => {
    it("відображає основну інфу для манги", () => {
        render(<MediaDetails type="manga" data={mangaData} />);
        expect(screen.getByRole('heading')).toHaveTextContent("Зошит смерті / Death Note / デスノート");
        expect(screen.getByText("Томів:").parentElement?.textContent).toBe("Томів: 12");
        expect(screen.getByText("Розділів:").parentElement?.textContent).toBe("Розділів: 108");
        expect(screen.getByText("Жанри:").parentElement?.textContent).toBe("Жанри: Психологія");
        expect(screen.getByText("Shueisha")).toBeInTheDocument();
        expect(screen.getByText("Опис манги")).toBeInTheDocument();
        const img = screen.getByAltText("Death Note");
        expect(img).toHaveAttribute("src", "/static/not-found.png");
    });
});

describe("MediaDetails — без жанрів, студії, опису", () => {
    it("коректно відображає — для аніме", () => {
        const dataNoGenres: AnimeFullType = {
            ...animeData,
            genres: undefined,
            studio: undefined,
            description: undefined
        };
        render(<MediaDetails type="anime" data={dataNoGenres} />);
        expect(screen.getByText("Жанри:").parentElement?.textContent).toBe("Жанри: —");
        expect(screen.getByText(/Відсутня студія/)).toBeInTheDocument();
    });

    it("коректно відображає — для манги", () => {
        const data: MangaFullType = {
            ...mangaData,
            genres: [],
            publisher: undefined,
            description: undefined,
        };
        render(<MediaDetails type="manga" data={data} />);
        expect(screen.getByText("Жанри:").parentElement?.textContent).toBe("Жанри: —");
        expect(screen.getByText(/Відсутне видавництво/)).toBeInTheDocument();
    });
});
