export type UniqueWhereInput = {
    titleUa?: { equals: string };
    titleEn?: { equals: string };
    titleJp?: { equals: string };
};

export function buildUniqueOrConditions(obj: { titleUa?: string; titleEn?: string; titleJp?: string; }) {
    const orConditions: UniqueWhereInput[] = [];
    if (obj.titleUa && obj.titleUa.trim()) {
        orConditions.push({ titleUa: { equals: obj.titleUa.trim() } });
    }
    if (obj.titleJp && obj.titleJp.trim()) {
        orConditions.push({ titleJp: { equals: obj.titleJp.trim() } });
    }
    if (obj.titleEn && obj.titleEn.trim()) {
        orConditions.push({ titleEn: { equals: obj.titleEn.trim() } });
    }
    return orConditions;
}