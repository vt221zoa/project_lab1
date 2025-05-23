/*
  Warnings:

  - You are about to drop the `AnimeGenre` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MangaGenre` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AnimeGenreOnAnime" DROP CONSTRAINT "AnimeGenreOnAnime_genreId_fkey";

-- DropForeignKey
ALTER TABLE "MangaGenreOnManga" DROP CONSTRAINT "MangaGenreOnManga_genreId_fkey";

-- AlterTable
ALTER TABLE "Anime" ALTER COLUMN "rating" DROP NOT NULL;

-- DropTable
DROP TABLE "AnimeGenre";

-- DropTable
DROP TABLE "MangaGenre";

-- CreateTable
CREATE TABLE "Genre" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameEn" TEXT,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_nameEn_key" ON "Genre"("nameEn");

-- AddForeignKey
ALTER TABLE "AnimeGenreOnAnime" ADD CONSTRAINT "AnimeGenreOnAnime_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MangaGenreOnManga" ADD CONSTRAINT "MangaGenreOnManga_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
