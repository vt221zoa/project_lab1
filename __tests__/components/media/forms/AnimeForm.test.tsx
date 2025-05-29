import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AnimeForm, { AnimeData } from '@/components/media/forms/AnimeForm';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

const studios = [{ id: 1, name: 'Studio Ghibli' }];
const genres = [{ id: 1, name: 'Пригоди' }, { id: 2, name: 'Фентезі' }];

beforeAll(() => {
    global.URL.createObjectURL = jest.fn(() => 'blob:http://fake-url');
    window.alert = jest.fn();
});
afterAll(() => {
    jest.restoreAllMocks();
});

function fillMinimalForm() {
    fireEvent.change(screen.getByLabelText(/Англійська назва/i), {
        target: { value: 'Test Anime' },
    });
    fireEvent.change(screen.getByLabelText(/Тип/i), {
        target: { value: 'TV-серіал' },
    });
    fireEvent.change(screen.getByLabelText(/Статус/i), {
        target: { value: 'Онгоїнг' },
    });
}

describe('AnimeForm', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('викликає onSubmit з правильними даними', async () => {
        const mockOnSubmit = jest.fn();
        render(<AnimeForm studios={studios} genres={genres} onSubmit={mockOnSubmit} />);
        fillMinimalForm();
        fireEvent.change(screen.getByLabelText(/Кількість епізодів/i), {
            target: { value: '12' },
        });
        fireEvent.change(screen.getByLabelText(/Віковий рейтинг/i), {
            target: { value: 'PG-13' },
        });
        fireEvent.change(screen.getByLabelText(/Студія/i), {
            target: { value: '1' },
        });
        fireEvent.click(screen.getByLabelText(/Пригоди/i));
        fireEvent.click(screen.getByRole('button', { name: /Створити аніме/i }));

        await waitFor(() => {
            expect(mockOnSubmit).toHaveBeenCalledWith(
                expect.objectContaining({
                    titleEn: 'Test Anime',
                    kind: 'TV-серіал',
                    episodes: 12,
                    rating: 'PG-13',
                    studioId: 1,
                    genreIds: [1],
                })
            );
        });
    });

    it('відправляє PATCH якщо є animeId', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({ success: true, anime: { id: 10 } }));
        render(<AnimeForm studios={studios} genres={genres} animeId={10} />);
        fillMinimalForm();
        fireEvent.click(screen.getByRole('button'));
        await waitFor(() => {
            expect(fetchMock).toHaveBeenLastCalledWith(
                '/api/anime/10',
                expect.objectContaining({ method: 'PATCH' })
            );
            expect(window.alert).toHaveBeenCalledWith('Успішно!');
        });
    });

    it('відправляє POST якщо animeId немає', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({ success: true, anime: { id: 101 } }));
        render(<AnimeForm studios={studios} genres={genres} />);
        fillMinimalForm();
        fireEvent.click(screen.getByRole('button'));
        await waitFor(() => {
            expect(fetchMock).toHaveBeenLastCalledWith(
                '/api/anime',
                expect.objectContaining({ method: 'POST' })
            );
            expect(window.alert).toHaveBeenCalledWith('Успішно!');
        });
    });

    it('показує помилку від сервера, якщо API повертає помилку', async () => {
        fetchMock.mockResponseOnce(
            JSON.stringify({ success: false, message: 'Помилка API' }),
            { status: 400 }
        );
        render(<AnimeForm studios={studios} genres={genres} />);
        fillMinimalForm();
        fireEvent.click(screen.getByRole('button'));
        await waitFor(() => {
            expect(screen.getByText(/Помилка API/i)).toBeInTheDocument();
        });
    });

    it('показує помилку, якщо Cloudinary повертає помилку', async () => {
        render(<AnimeForm studios={studios} genres={genres} />);
        const file = new File(['test'], 'cover.png', { type: 'image/png' });
        fetchMock.mockResponseOnce(JSON.stringify({ error: { message: 'upload fail' } }), { status: 400 });

        const labelNode = screen.getByLabelText(/Add to image/i).parentElement!;
        const fileInput = labelNode.querySelector('input[type="file"]')!;
        fireEvent.change(fileInput, { target: { files: [file] } });

        fillMinimalForm();
        fireEvent.click(screen.getByRole('button'));
        await waitFor(() => {
            expect(screen.getByText(/Помилка при завантаженні зображення/i)).toBeInTheDocument();
        });
    });

    it('попередньо заповнює initialData', () => {
        const initialData: AnimeData = {
            titleUa: 'УА',
            titleEn: 'EN',
            titleJp: 'JP',
            description: 'desc',
            kind: 'OVA',
            episodes: 3,
            status: 'Анонсовано',
            dateRelease: '2022-02-01T12:33:00',
            imageUrl: 'http://image/link.jpg',
            rating: 'G',
            studio: studios[0],
            genres: [{ genre: genres[1] }]
        };
        render(<AnimeForm studios={studios} genres={genres} initialData={initialData} />);
        expect(screen.getByDisplayValue('EN')).toBeInTheDocument();
        expect(screen.getByLabelText(/Фентезі/i)).toBeChecked();
        expect(screen.getByRole('button', { name: /Оновити аніме/i })).toBeInTheDocument();
    });

    it('перемикає чекбокси жанрів', async () => {
        render(<AnimeForm studios={studios} genres={genres} />);
        const checkbox = screen.getByLabelText(/Фентезі/i) as HTMLInputElement;
        expect(checkbox.checked).toBe(false);
        fireEvent.click(checkbox);
        expect(checkbox.checked).toBe(true);
        fireEvent.click(checkbox);
        expect(checkbox.checked).toBe(false);
    });

    it('показує загальну помилку при мережевій проблемі', async () => {
        fetchMock.mockRejectOnce(new Error('Network failed'));
        render(<AnimeForm studios={studios} genres={genres} />);
        fillMinimalForm();
        fireEvent.click(screen.getByRole('button'));
        await waitFor(() => {
            expect(screen.getByText(/Сталася помилка відправки/i)).toBeInTheDocument();
        });
    });

    it('перевіряє валідацію required-полів', async () => {
        render(<AnimeForm studios={studios} genres={genres} />);
        fireEvent.click(screen.getByRole('button'));
        expect(await screen.findAllByRole('textbox')).toHaveLength(4);
        expect(screen.getByLabelText(/Англійська назва/i)).toBeRequired();
        expect(screen.getByLabelText(/Тип/i)).toBeRequired();
        expect(screen.getByLabelText(/Статус/i)).toBeRequired();
    });
});