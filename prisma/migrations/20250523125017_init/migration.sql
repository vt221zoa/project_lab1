/*
  Warnings:

  - The primary key for the `AnimeGenreOnAnime` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Genre` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Genre` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `MangaGenreOnManga` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `genreId` on the `AnimeGenreOnAnime` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `genreId` on the `MangaGenreOnManga` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "AnimeGenreOnAnime" DROP CONSTRAINT "AnimeGenreOnAnime_genreId_fkey";

-- DropForeignKey
ALTER TABLE "MangaGenreOnManga" DROP CONSTRAINT "MangaGenreOnManga_genreId_fkey";

-- AlterTable
ALTER TABLE "AnimeGenreOnAnime" DROP CONSTRAINT "AnimeGenreOnAnime_pkey",
DROP COLUMN "genreId",
ADD COLUMN     "genreId" INTEGER NOT NULL,
ADD CONSTRAINT "AnimeGenreOnAnime_pkey" PRIMARY KEY ("animeId", "genreId");

-- AlterTable
ALTER TABLE "Genre" DROP CONSTRAINT "Genre_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Genre_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "MangaGenreOnManga" DROP CONSTRAINT "MangaGenreOnManga_pkey",
DROP COLUMN "genreId",
ADD COLUMN     "genreId" INTEGER NOT NULL,
ADD CONSTRAINT "MangaGenreOnManga_pkey" PRIMARY KEY ("mangaId", "genreId");

-- AddForeignKey
ALTER TABLE "AnimeGenreOnAnime" ADD CONSTRAINT "AnimeGenreOnAnime_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MangaGenreOnManga" ADD CONSTRAINT "MangaGenreOnManga_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
