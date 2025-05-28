import '@testing-library/jest-dom';
jest.mock("next/image", () => ({
    __esModule: true,
    default: (props: { src: string; alt: string; width?: number; height?: number; className?: string }) =>
        <img {...props} />,
}));
jest.mock("next/link", () => ({
    __esModule: true,
    default: (props: { href: string; className?: string; children: React.ReactNode }) =>
        <a href={props.href} className={props.className}>{props.children}</a>,
}));
jest.mock("next/navigation", () => ({
    useRouter: () => ({
        refresh: jest.fn()
    })
}));
jest.mock("@/utils/cloudinary", () => ({
    buildCloudinaryUrl: (url: string) => "cloudinary/" + url
}));
jest.mock('@/hooks/useCurrentUser', () => ({
    useCurrentUser: () => ({
        user: { isAdmin: true },
        loading: false,
    })
}));
jest.mock("@/components/EditDeleteControls", () => ({
    __esModule: true,
    default: () => <div data-testid="controls">КНОПКИ</div>,
}));
