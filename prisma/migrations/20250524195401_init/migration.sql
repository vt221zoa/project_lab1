/*
  Warnings:

  - A unique constraint covering the columns `[titleUa]` on the table `Anime` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[titleEn]` on the table `Anime` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[titleJp]` on the table `Anime` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[titleUa]` on the table `Manga` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[titleEn]` on the table `Manga` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[titleJp]` on the table `Manga` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Anime_titleUa_key" ON "Anime"("titleUa");

-- CreateIndex
CREATE UNIQUE INDEX "Anime_titleEn_key" ON "Anime"("titleEn");

-- CreateIndex
CREATE UNIQUE INDEX "Anime_titleJp_key" ON "Anime"("titleJp");

-- CreateIndex
CREATE UNIQUE INDEX "Manga_titleUa_key" ON "Manga"("titleUa");

-- CreateIndex
CREATE UNIQUE INDEX "Manga_titleEn_key" ON "Manga"("titleEn");

-- CreateIndex
CREATE UNIQUE INDEX "Manga_titleJp_key" ON "Manga"("titleJp");
