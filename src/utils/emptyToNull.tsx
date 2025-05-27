export function toNullableString(value: string | undefined | null): string | null {
    if (typeof value !== 'string' || value.trim() === '') return null;
    return value;
}