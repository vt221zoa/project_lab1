/*
  Warnings:

  - The `studioId` column on the `Anime` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `publisherId` column on the `Manga` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Publisher` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Publisher` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Studio` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Studio` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Anime" DROP CONSTRAINT "Anime_studioId_fkey";

-- DropForeignKey
ALTER TABLE "Manga" DROP CONSTRAINT "Manga_publisherId_fkey";

-- AlterTable
ALTER TABLE "Anime" DROP COLUMN "studioId",
ADD COLUMN     "studioId" INTEGER;

-- AlterTable
ALTER TABLE "Manga" DROP COLUMN "publisherId",
ADD COLUMN     "publisherId" INTEGER;

-- AlterTable
ALTER TABLE "Publisher" DROP CONSTRAINT "Publisher_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Publisher_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Studio" DROP CONSTRAINT "Studio_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Studio_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Anime" ADD CONSTRAINT "Anime_studioId_fkey" FOREIGN KEY ("studioId") REFERENCES "Studio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Manga" ADD CONSTRAINT "Manga_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
