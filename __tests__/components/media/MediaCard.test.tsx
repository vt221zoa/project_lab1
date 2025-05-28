import React from "react";
import { render, screen } from "@testing-library/react";
import { MediaCard } from "@/components/media/MediaCard";

describe("MediaCard", () => {
    it("рендерить аніме-картку (default view)", () => {
        render(
            <MediaCard
                type="anime"
                id={1}
                titleEn="Naruto"
                titleUa="Наруто"
                kind="TV"
                dateRelease="2006-03-05"
                imageUrl="poster.jpg"
                studioName="Pierrot"
            />
        );

        expect(screen.getByRole("img")).toHaveAttribute("src", "cloudinary/poster.jpg");
        expect(screen.getByText("Наруто")).toBeInTheDocument();
        expect(screen.getByText("Pierrot")).toBeInTheDocument();
        expect(screen.queryByTestId("controls")).not.toBeInTheDocument();
    });

    it("рендерить аніме-картку з viewType='catalog', показує тип і рік", () => {
        render(
            <MediaCard
                type="anime"
                id={2}
                titleEn="Naruto"
                kind="TV"
                dateRelease="2002-01-12"
                imageUrl="poster2.jpg"
                viewType="catalog"
                studioName="Pierrot"
            />
        );

        expect(screen.getByText("TV")).toBeInTheDocument();
        expect(screen.getByText("2002")).toBeInTheDocument();
    });

    it("рендерить MANGA, показує publisher", () => {
        render(
            <MediaCard
                type="manga"
                id={1}
                titleEn="Death Note"
                publisherName="Shueisha"
                dateRelease="2003-01-01"
                imageUrl="dn.jpg"
            />
        );

        expect(screen.getByText("Shueisha")).toBeInTheDocument();
    });

    it("fallback image, якщо imageUrl порожній", () => {
        render(
            <MediaCard
                type="anime"
                id={3}
                titleEn="Bleach"
                dateRelease="2004-01-01"
                // imageUrl відсутній
                studioName="Pierrot"
            />
        );
        expect(screen.getByRole("img")).toHaveAttribute("src", "/static/not-found.png");
    });

    it("рендерить EditDeleteControls для адміна у catalog view", () => {
        render(
            <MediaCard
                type="anime"
                id={99}
                titleEn="Anime"
                kind="TV"
                dateRelease="2020-01-01"
                imageUrl="xxx"
                viewType="catalog"
                studioName="Admin Studio"
            />
        );
        expect(screen.getByTestId("controls")).toBeInTheDocument();
    });
});