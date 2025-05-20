/*
  Warnings:

  - The `episodes` column on the `Anime` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Anime" DROP CONSTRAINT "Anime_studioId_fkey";

-- DropForeignKey
ALTER TABLE "Manga" DROP CONSTRAINT "Manga_publisherId_fkey";

-- AlterTable
ALTER TABLE "Anime" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "rating" SET DATA TYPE TEXT,
DROP COLUMN "episodes",
ADD COLUMN     "episodes" INTEGER,
ALTER COLUMN "imageUrl" DROP NOT NULL,
ALTER COLUMN "studioId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Manga" ALTER COLUMN "titleUa" DROP NOT NULL,
ALTER COLUMN "titleJp" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "chapters" DROP NOT NULL,
ALTER COLUMN "volumes" DROP NOT NULL,
ALTER COLUMN "imageUrl" DROP NOT NULL,
ALTER COLUMN "publisherId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Anime" ADD CONSTRAINT "Anime_studioId_fkey" FOREIGN KEY ("studioId") REFERENCES "Studio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Manga" ADD CONSTRAINT "Manga_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
