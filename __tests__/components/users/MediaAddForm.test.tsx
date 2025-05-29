import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MediaAddForm from '@/components/users/(media_List)/MediaAddForm';
import '@testing-library/jest-dom';

global.fetch = jest.fn();

beforeEach(() => {
    jest.clearAllMocks();
});

describe('MediaAddForm', () => {
    type MediaType = 'anime' | 'manga';
    const defaultProps = {
        type: 'anime' as MediaType,
        mediaId: 1,
        totalEpisodes: 24,
    };

    it('відображає повідомлення про реєстрацію, якщо не автентифіковано', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });

        render(<MediaAddForm {...defaultProps} />);

        await waitFor(() => {
            expect(screen.getByText(/зареєструватись/i)).toBeInTheDocument();
        });
    });

    it('завантажує дані та заповнює форму для anime', async () => {
        (fetch as jest.Mock)
            .mockResolvedValueOnce({ ok: true })
            .mockResolvedValueOnce({
                ok: true,
                json: async () => ({
                    animeId: 1,
                    status: 'Переглянуто',
                    score: 8,
                    episodesWatched: 24,
                    comment: 'Чудово',
                }),
            });

        render(<MediaAddForm {...defaultProps} />);

        await waitFor(() => {
            expect(screen.getByDisplayValue('Переглянуто')).toBeInTheDocument();
            expect(screen.getByDisplayValue('8')).toBeInTheDocument();
            expect(screen.getByDisplayValue('24')).toBeInTheDocument();
            expect(screen.getByDisplayValue('Чудово')).toBeInTheDocument();
        });
    });

    it('відправляє форму при сабміті', async () => {
        (fetch as jest.Mock)
            .mockResolvedValueOnce({ ok: true })
            .mockResolvedValueOnce({ ok: false }) // елементу ще нема
            .mockResolvedValueOnce({ ok: true, json: async () => ({}) });

        render(<MediaAddForm {...defaultProps} />);

        await waitFor(() => {
            expect(screen.getByRole('button', { name: /додати до списку/i })).toBeInTheDocument();
        });

        fireEvent.change(screen.getByLabelText(/оцінка/i), { target: { value: '7' } });
        fireEvent.change(screen.getByLabelText(/переглянуто епізодів/i), { target: { value: '10' } });

        fireEvent.click(screen.getByRole('button', { name: /додати до списку/i }));

        await waitFor(() => {
            expect(fetch).toHaveBeenCalledWith(
                '/api/profile/user-list/anime',
                expect.objectContaining({
                    method: 'POST',
                })
            );
            expect(screen.getByText(/додано\/оновлено/i)).toBeInTheDocument();
        });
    });

    it('видаляє елемент зі списку', async () => {
        (fetch as jest.Mock)
            .mockResolvedValueOnce({ ok: true }) // auth
            .mockResolvedValueOnce({
                ok: true,
                json: async () => ({
                    animeId: 1,
                    status: 'Переглянуто',
                    score: 8,
                    episodesWatched: 24,
                    comment: 'Гарно',
                }),
            })
            .mockResolvedValueOnce({ ok: true });

        render(<MediaAddForm {...defaultProps} />);

        await waitFor(() => {
            expect(screen.getByRole('button', { name: /оновити/i })).toBeInTheDocument();
        });

        fireEvent.click(screen.getByRole('button', { name: /видалити/i }));

        await waitFor(() => {
            expect(fetch).toHaveBeenCalledWith('/api/profile/user-list/anime?animeId=1', {
                method: 'DELETE',
            });
            expect(screen.getByText(/видалено/i)).toBeInTheDocument();
        });
    });
});
