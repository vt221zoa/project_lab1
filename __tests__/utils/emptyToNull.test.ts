import { toNullableString } from '@/utils/emptyToNull';

describe('Функція toNullableString', () => {
    it('повертає той самий рядок, якщо він не порожній', () => {
        expect(toNullableString('привіт')).toBe('привіт');
    });

    it('повертає null, якщо значення undefined', () => {
        expect(toNullableString(undefined)).toBeNull();
    });

    it('повертає null, якщо значення null', () => {
        expect(toNullableString(null)).toBeNull();
    });

    it('повертає null для порожнього рядка', () => {
        expect(toNullableString('')).toBeNull();
    });

    it('повертає null для рядка з одних пробілів', () => {
        expect(toNullableString('   ')).toBeNull();
    });
});