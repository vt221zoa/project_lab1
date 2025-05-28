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
    "id" SERIAL NOT NULL,
    "titleUa" TEXT,
    "titleEn" TEXT NOT NULL,
    "titleJp" TEXT,
    "description" TEXT,
    "rating" TEXT,
    "kind" TEXT NOT NULL,
    "episodes" INTEGER,
    "status" TEXT NOT NULL,
    "dateRelease" TIMESTAMP(3),
    "imageUrl" TEXT,
    "studioId" INTEGER,

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manga" (
    "id" SERIAL NOT NULL,
    "titleUa" TEXT,
    "titleEn" TEXT NOT NULL,
    "titleJp" TEXT,
    "description" TEXT,
    "kind" TEXT NOT NULL,
    "chapters" INTEGER,
    "volumes" INTEGER,
    "dateRelease" TIMESTAMP(3),
    "status" TEXT NOT NULL,
    "imageUrl" TEXT,
    "publisherId" INTEGER,

    CONSTRAINT "Manga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nameEn" TEXT,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnimeGenreOnAnime" (
    "animeId" INTEGER NOT NULL,
    "genreId" INTEGER NOT NULL,

    CONSTRAINT "AnimeGenreOnAnime_pkey" PRIMARY KEY ("animeId","genreId")
);

-- CreateTable
CREATE TABLE "MangaGenreOnManga" (
    "mangaId" INTEGER NOT NULL,
    "genreId" INTEGER NOT NULL,

    CONSTRAINT "MangaGenreOnManga_pkey" PRIMARY KEY ("mangaId","genreId")
);

-- CreateTable
CREATE TABLE "Studio" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "logoUrl" TEXT,

    CONSTRAINT "Studio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Publisher" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Publisher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAnimeList" (
    "userId" TEXT NOT NULL,
    "animeId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "comment" TEXT,
    "score" INTEGER,
    "episodesWatched" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "UserAnimeList_pkey" PRIMARY KEY ("userId","animeId")
);

-- CreateTable
CREATE TABLE "UserMangaList" (
    "userId" TEXT NOT NULL,
    "mangaId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "comment" TEXT,
    "score" INTEGER,
    "chaptersRead" INTEGER NOT NULL DEFAULT 0,
    "volumesRead" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "UserMangaList_pkey" PRIMARY KEY ("userId","mangaId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

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

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_nameEn_key" ON "Genre"("nameEn");

-- CreateIndex
CREATE UNIQUE INDEX "Studio_name_key" ON "Studio"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Publisher_name_key" ON "Publisher"("name");

-- AddForeignKey
ALTER TABLE "Anime" ADD CONSTRAINT "Anime_studioId_fkey" FOREIGN KEY ("studioId") REFERENCES "Studio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Manga" ADD CONSTRAINT "Manga_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnimeGenreOnAnime" ADD CONSTRAINT "AnimeGenreOnAnime_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "Anime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnimeGenreOnAnime" ADD CONSTRAINT "AnimeGenreOnAnime_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MangaGenreOnManga" ADD CONSTRAINT "MangaGenreOnManga_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MangaGenreOnManga" ADD CONSTRAINT "MangaGenreOnManga_mangaId_fkey" FOREIGN KEY ("mangaId") REFERENCES "Manga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAnimeList" ADD CONSTRAINT "UserAnimeList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAnimeList" ADD CONSTRAINT "UserAnimeList_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "Anime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMangaList" ADD CONSTRAINT "UserMangaList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMangaList" ADD CONSTRAINT "UserMangaList_mangaId_fkey" FOREIGN KEY ("mangaId") REFERENCES "Manga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
