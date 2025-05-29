import { render, screen } from '@testing-library/react';
import CreateAdminButton from '@/components/media/forms/CreateAdminButton';

const mockUseCurrentUser = jest.fn();

jest.mock('@/hooks/useCurrentUser', () => ({
    useCurrentUser: () => mockUseCurrentUser(),
}));

describe('CreateAdminButton', () => {
    afterEach(() => {
        mockUseCurrentUser.mockReset();
    });

    it('не рендерить нічого коли loading', () => {
        mockUseCurrentUser.mockReturnValue({ user: null, loading: true });
        const { container } = render(<CreateAdminButton type="anime" />);
        expect(container).toBeEmptyDOMElement();
    });

    it('не рендерить нічого для не-адміна', () => {
        mockUseCurrentUser.mockReturnValue({ user: { isAdmin: false }, loading: false });
        const { container } = render(<CreateAdminButton type="manga" />);
        expect(container).toBeEmptyDOMElement();
    });

    it('показує посилання для адміна (аніме)', () => {
        mockUseCurrentUser.mockReturnValue({ user: { isAdmin: true }, loading: false });
        render(<CreateAdminButton type="anime" />);
        expect(screen.getByRole('link', { name: /Створити аніме/ })).toHaveAttribute('href', '/anime/create');
    });

    it('показує посилання для адміна (манґа)', () => {
        mockUseCurrentUser.mockReturnValue({ user: { isAdmin: true }, loading: false });
        render(<CreateAdminButton type="manga" className="test-class" />);
        const link = screen.getByRole('link', { name: /Створити манґу/ });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/manga/create');
        expect(link.parentElement).toHaveClass('test-class');
    });
});