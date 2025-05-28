import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RegisterForm from "@/components/users/RegisterForm";

let pushMock: jest.Mock;
jest.mock("next/navigation", () => ({
    useRouter: () => ({
        push: pushMock,
    }),
}));

const alertMock = jest.fn();
beforeAll(() => {
    Object.defineProperty(window, "alert", {
        writable: true,
        value: alertMock,
    });

    if (!("fetch" in globalThis)) {
        globalThis.fetch = jest.fn();
    }
});

describe("RegisterForm", () => {
    beforeEach(() => {
        alertMock.mockClear();
        pushMock = jest.fn();
        jest.restoreAllMocks();
    });

    it("рендерить форму і всі поля", () => {
        render(<RegisterForm />);
        expect(screen.getByRole('heading', { name: /реєстрація/i })).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/ім'я/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/пароль/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /зареєструватися/i })).toBeInTheDocument();
        expect(screen.getByText(/вже є акаунт/i)).toBeInTheDocument();
    });

    it("коректно вводить значення у поля", () => {
        render(<RegisterForm />);
        fireEvent.change(screen.getByPlaceholderText(/ім'я/i), { target: { value: "Іван" } });
        fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: "test@gmail.com" } });
        fireEvent.change(screen.getByPlaceholderText(/пароль/i), { target: { value: "secret123" } });

        expect((screen.getByPlaceholderText(/ім'я/i) as HTMLInputElement).value).toBe("Іван");
        expect((screen.getByPlaceholderText(/email/i) as HTMLInputElement).value).toBe("test@gmail.com");
        expect((screen.getByPlaceholderText(/пароль/i) as HTMLInputElement).value).toBe("secret123");
    });

    it("виводить повідомлення про помилку при невалідній відповіді", async () => {
        const fetchMock = jest
            .spyOn(globalThis, "fetch")
            .mockResolvedValueOnce({
                ok: false,
                json: async () => ({ message: "Email вже зайнятий" }),
            } as unknown as Response);

        render(<RegisterForm />);
        fireEvent.change(screen.getByPlaceholderText(/ім'я/i), { target: { value: "Іван" } });
        fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: "used@email.com" } });
        fireEvent.change(screen.getByPlaceholderText(/пароль/i), { target: { value: "secret123" } });

        fireEvent.click(screen.getByRole('button', { name: /зареєструватися/i }));

        await waitFor(() => {
            expect(screen.getByText("Email вже зайнятий")).toBeInTheDocument();
            expect(alertMock).not.toHaveBeenCalled();
        });

        fetchMock.mockRestore();
    });

    it("успішна реєстрація показує alert і редіректить", async () => {
        const fetchMock = jest
            .spyOn(globalThis, "fetch")
            .mockResolvedValueOnce({
                ok: true,
                json: async () => ({}),
            } as unknown as Response);

        render(<RegisterForm />);
        fireEvent.change(screen.getByPlaceholderText(/ім'я/i), { target: { value: "Іван" } });
        fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: "ivan@gmail.com" } });
        fireEvent.change(screen.getByPlaceholderText(/пароль/i), { target: { value: "secret123" } });

        fireEvent.click(screen.getByRole('button', { name: /зареєструватися/i }));

        await waitFor(() => {
            expect(alertMock).toHaveBeenCalledWith("Успішна реєстрація!");
            expect(pushMock).toHaveBeenCalledWith("/auth/login");
        });

        fetchMock.mockRestore();
    });
});