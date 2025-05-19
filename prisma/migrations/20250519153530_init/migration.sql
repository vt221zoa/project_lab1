-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anime" (
    "id" TEXT NOT NULL,
    "titleUa" TEXT,
    "titleEn" TEXT NOT NULL,
    "titleJp" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "kind" TEXT NOT NULL,
    "episodes" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "dateRelease" TIMESTAMP(3),
    "imageUrl" TEXT NOT NULL,
    "studioId" TEXT NOT NULL,

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manga" (
    "id" TEXT NOT NULL,
    "titleUa" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "titleJp" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "chapters" TEXT NOT NULL,
    "volumes" TEXT NOT NULL,
    "dateRelease" TIMESTAMP(3),
    "status" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "publisherId" TEXT NOT NULL,

    CONSTRAINT "Manga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnimeGenre" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AnimeGenre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MangaGenre" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MangaGenre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnimeGenreOnAnime" (
    "animeId" TEXT NOT NULL,
    "genreId" TEXT NOT NULL,

    CONSTRAINT "AnimeGenreOnAnime_pkey" PRIMARY KEY ("animeId","genreId")
);

-- CreateTable
CREATE TABLE "MangaGenreOnManga" (
    "mangaId" TEXT NOT NULL,
    "genreId" TEXT NOT NULL,

    CONSTRAINT "MangaGenreOnManga_pkey" PRIMARY KEY ("mangaId","genreId")
);

-- CreateTable
CREATE TABLE "Studio" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Studio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Publisher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Publisher_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AnimeGenre_name_key" ON "AnimeGenre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MangaGenre_name_key" ON "MangaGenre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Studio_name_key" ON "Studio"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Publisher_name_key" ON "Publisher"("name");

-- AddForeignKey
ALTER TABLE "Anime" ADD CONSTRAINT "Anime_studioId_fkey" FOREIGN KEY ("studioId") REFERENCES "Studio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Manga" ADD CONSTRAINT "Manga_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnimeGenreOnAnime" ADD CONSTRAINT "AnimeGenreOnAnime_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "Anime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnimeGenreOnAnime" ADD CONSTRAINT "AnimeGenreOnAnime_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "AnimeGenre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MangaGenreOnManga" ADD CONSTRAINT "MangaGenreOnManga_mangaId_fkey" FOREIGN KEY ("mangaId") REFERENCES "Manga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MangaGenreOnManga" ADD CONSTRAINT "MangaGenreOnManga_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "MangaGenre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
