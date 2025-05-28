import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AnimeForm from '@/components/media/forms/AnimeForm';
import fetchMock from 'jest-fetch-mock';

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
        replace: jest.fn(),
        prefetch: jest.fn(),
    }),
}));


fetchMock.enableMocks();

describe('AnimeForm', () => {
    const studios = [{ id: 1, name: 'Studio Ghibli' }];
    const genres = [{ id: 1, name: 'Пригоди' }, { id: 2, name: 'Фентезі' }];

    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('submits form with correct data', async () => {
        const mockOnSubmit = jest.fn();

        render(
            <AnimeForm
                studios={studios}
                genres={genres}
                onSubmit={mockOnSubmit}
            />
        );

        fireEvent.change(screen.getByLabelText(/Англійська назва/i), {
            target: { value: 'My Anime' },
        });

        fireEvent.change(screen.getByLabelText(/Тип/i), {
            target: { value: 'TV-серіал' },
        });

        fireEvent.change(screen.getByLabelText(/Кількість епізодів/i), {
            target: { value: '12' },
        });

        fireEvent.change(screen.getByLabelText(/Статус/i), {
            target: { value: 'Онгоїнг' },
        });

        fireEvent.change(screen.getByLabelText(/Віковий рейтинг/i), {
            target: { value: 'PG-13' },
        });

        fireEvent.change(screen.getByLabelText(/Студія/i), {
            target: { value: '1' },
        });

        fireEvent.click(screen.getByLabelText(/Пригоди/i));

        fireEvent.click(screen.getByRole('button', { name: /Створити аніме/i }));

        console.log(mockOnSubmit.mock.calls);

        await waitFor(() => {
            expect(mockOnSubmit).toHaveBeenCalledWith(
                expect.objectContaining({
                    titleEn: 'My Anime',
                    kind: 'TV-серіал',
                    episodes: 12,
                    status: 'Онгоїнг',
                    rating: 'PG-13',
                    studioId: 1,
                    genreIds: [1],
                })
            );
        });
    });
});
