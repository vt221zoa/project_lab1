import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AnimeCatalog from "@/components/media/AnimeCatalog";
import { AnimeCardType2 } from "@/types/types";
import '@testing-library/jest-dom';

jest.mock("@/components/SectionInfo", () => ({ __esModule: true, default: ({ text }: { text: string }) => <div>{text}</div> }));
jest.mock("@/components/media/forms/CreateAdminButton", () => ({ __esModule: true, default: () => <button>Створити аніме</button> }));
jest.mock("@/components/media/MediaCard", () => ({
    MediaCard: ({ titleUa, titleEn, kind }: { titleUa: string; titleEn: string; kind: string }) =>
        <div data-testid="media-card">{titleUa} ({titleEn}) [{kind}]</div>,
}));

const animeList: AnimeCardType2[] = [
    {
        id: 1,
        titleUa: "Сталевий алхімік",
        titleEn: "Fullmetal Alchemist",
        kind: "TV",
        dateRelease: "2003",
        status: "Релізовано",
        imageUrl: "img1.jpg",
        studio: { name: "Bones" },
    },
    {
        id: 2,
        titleUa: "Атака Титанів",
        titleEn: "Attack on Titan",
        kind: "TV",
        dateRelease: "2013",
        status: "Онгоїнг",
        imageUrl: "img2.jpg",
        studio: { name: "MAPPA" },
    },
    {
        id: 3,
        titleUa: "ЇЇ ім'я",
        titleEn: "Kimi no Na Wa.",
        kind: "Movie",
        dateRelease: "2016",
        status: "Релізовано",
        imageUrl: "img3.jpg",
        studio: { name: "CoMix Wave" },
    },
];

describe("AnimeCatalog", () => {
    it("рендерить каталог з усіма аніме", () => {
        render(<AnimeCatalog allAnime={animeList} />);
        expect(screen.getByText("Каталог аніме")).toBeInTheDocument();
        expect(screen.getAllByTestId("media-card")).toHaveLength(3);
    });

    it("фільтрує за типом (kind)", () => {
        render(<AnimeCatalog allAnime={animeList} />);
        fireEvent.change(screen.getByLabelText(/Тип аніме/i), { target: { value: "Movie" } });
        const cards = screen.getAllByTestId("media-card");
        expect(cards).toHaveLength(1);
        expect(cards[0]).toHaveTextContent("ЇЇ ім'я");
    });

    it("фільтрує за статусом", () => {
        render(<AnimeCatalog allAnime={animeList} />);
        fireEvent.change(screen.getByLabelText(/Статус/i), { target: { value: "Онгоїнг" } });
        const cards = screen.getAllByTestId("media-card");
        expect(cards).toHaveLength(1);
        expect(cards[0]).toHaveTextContent("Атака Титанів");
    });

    it("сортує за назвою англійською (titleEn)", () => {
        render(<AnimeCatalog allAnime={animeList} />);
        fireEvent.change(screen.getByLabelText(/Сортувати за/i), { target: { value: "titleEn" } });
        fireEvent.change(screen.getByLabelText(/Порядок/i), { target: { value: "asc" } });
        const cards = screen.getAllByTestId("media-card");
        expect(cards[0]).toHaveTextContent("Атака Титанів");
        expect(cards[1]).toHaveTextContent("Сталевий алхімік");
        expect(cards[2]).toHaveTextContent("ЇЇ ім'я");
    });

    it("відображає CreateAdminButton", () => {
        render(<AnimeCatalog allAnime={animeList} />);
        expect(screen.getByText("Створити аніме")).toBeInTheDocument();
    });
});