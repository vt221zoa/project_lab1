import { prisma } from '@/lib/prisma';

export async function getAllGenres() {
    return prisma.genre.findMany();
}