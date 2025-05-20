/*
  Warnings:

  - The primary key for the `Anime` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Anime` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `AnimeGenreOnAnime` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Manga` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Manga` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `chapters` column on the `Manga` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `volumes` column on the `Manga` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `MangaGenreOnManga` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `animeId` on the `AnimeGenreOnAnime` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `mangaId` on the `MangaGenreOnManga` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "AnimeGenreOnAnime" DROP CONSTRAINT "AnimeGenreOnAnime_animeId_fkey";

-- DropForeignKey
ALTER TABLE "MangaGenreOnManga" DROP CONSTRAINT "MangaGenreOnManga_mangaId_fkey";

-- AlterTable
ALTER TABLE "Anime" DROP CONSTRAINT "Anime_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "titleJp" DROP NOT NULL,
ADD CONSTRAINT "Anime_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "AnimeGenreOnAnime" DROP CONSTRAINT "AnimeGenreOnAnime_pkey",
DROP COLUMN "animeId",
ADD COLUMN     "animeId" INTEGER NOT NULL,
ADD CONSTRAINT "AnimeGenreOnAnime_pkey" PRIMARY KEY ("animeId", "genreId");

-- AlterTable
ALTER TABLE "Manga" DROP CONSTRAINT "Manga_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "chapters",
ADD COLUMN     "chapters" INTEGER,
DROP COLUMN "volumes",
ADD COLUMN     "volumes" INTEGER,
ADD CONSTRAINT "Manga_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "MangaGenreOnManga" DROP CONSTRAINT "MangaGenreOnManga_pkey",
DROP COLUMN "mangaId",
ADD COLUMN     "mangaId" INTEGER NOT NULL,
ADD CONSTRAINT "MangaGenreOnManga_pkey" PRIMARY KEY ("mangaId", "genreId");

-- AddForeignKey
ALTER TABLE "AnimeGenreOnAnime" ADD CONSTRAINT "AnimeGenreOnAnime_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "Anime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MangaGenreOnManga" ADD CONSTRAINT "MangaGenreOnManga_mangaId_fkey" FOREIGN KEY ("mangaId") REFERENCES "Manga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
