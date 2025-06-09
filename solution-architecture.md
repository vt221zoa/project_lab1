# Solution Architecture Document: AniMan

## 1. Вступ

AniMan — це веб-платформа-енциклопедія, присвячена аніме та манзі. Вона дозволяє користувачам переглядати медіа, додавати їх до списків, коментувати, переглядати статистику, з фільтрацією й сортуванням.

Цей документ описує архітектуру системи AniMan, яка реалізована з використанням стеку: Next.js + TypeScript + Prisma + PostgreSQL.

---

## 2. Цілі архітектури

- Забезпечити розділення відповідальностей між frontend, backend і БД
- Підтримувати масштабованість для великої кількості медіа та користувачів
- Забезпечити безпеку персональних даних
- Легко розгортати, підтримувати та оновлювати систему

---

## 3. Архітектурний огляд

### 3.1 Компоненти

#### 1. Frontend (Next.js):
- Рендеринг: SSR (для SEO та продуктивності)
- Мови: TypeScript + React
- UI: TailwindCSS + Storybook
- Функції: фільтрація, додавання до списку, статистика, профіль, перегляд сторінки

#### 2. Backend (API Routes):
- Валідація запитів
- Обробка логіки додавання до списку, статистики, коментарів
- Захист маршруту через middleware (рольова модель: гість, користувач, адміністратор)
- Обробка зображень через Cloudinary API

#### 3. Database (PostgreSQL + Prisma):
- Таблиці: `User`, `Anime`, `Manga`, `Genre`, `AnimeGenreOnAnime`, `MangaGenreOnManga`, `Studio`, `Publisher`, `UserAnimeList`, `UserMangaList`
- Зв'язки: багато-до-багатьох (AnimeGenreOnAnime), один-до-багатьох (Studio)
- Prisma schema: автогенерація типів та міграцій

#### 4. Сторонні сервіси
- Cloudinary використовується для завантаження та оптимізації зображень
- Vercel CDN може використовуватись для кешування SSR-сторінок

---

## 4. Технічні деталі

### 4.1 База даних (схема спрощено)
-- User (id, email, password, name, imageUrl,isAdmin)
-- Anime (id, titleUa, titleEn, titleJp, description, rating, kind, episodes, status, dateRelease, imageUrl, studioId)
-- Manga (так само як і Anime але без rating. Також замість episodes є chapters та volumes)
-- Genre (id, name, nameEn)
-- Studio (id, name, logoUrl)
-- Studio (id, name)
-- UserAnimeList (userId, animeId, user, anime, status, comment, score, episodesWatched)
-- UserMangaList (Замість episodesWatched є chaptersRead, volumesRead, а anime на manga)

---

### 4.2 Аутентифікація

- Ролі користувачів:
  - `guest`: доступ до перегляду
  - `user`: додавання до списку, коментарі
  - `admin`: керування

---

## 5. Безпека

- JWT / Session-based auth — реалізується через NextAuth
- XSS / CSRF захист — автоматично через Next.js + форма-хуки
- Хешування паролів — bcrypt через NextAuth
- Розмежування доступу — middleware `middleware.tsx` перевіряє роль

---

## 6. Масштабованість та продуктивність

- Cloudinary — сервіс для зображень
- Prisma — дозволяє використовувати оптимізовані SQL-запити

---

## 7. CI/CD

- GitHub Actions (або Vercel):
  - Лінтинг (ESLint)
  - Юніт-тести (Jest)
  - Тестування API та компоненту
- Lighthouse ≥ 90 як обов’язковий критерій

## 8. Обґрунтування вибору технологій

| Компонент     | Вибір                   | Чому                                   |
|---------------|-------------------------|----------------------------------------|
| Frontend      | Next.js                 | SSR + SPA, SEO, швидкодія              |
| База даних    | PostgreSQL              | Стабільна, надійна, підтримка зв’язків |
| ORM           | Prisma                  | Міграції, генерація типів              |
| Зображення    | Cloudinary              | CDN + зручний API                      |
| UI            | TailwindCSS             | Швидкий дизайн                         |
| CI/CD         | GitHub Actions / Vercel | Простота розгортання                   |