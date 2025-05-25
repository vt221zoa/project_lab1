import jwt from "jsonwebtoken";
import {JwtPayload} from "@/types/types";

const JWT_SECRET = process.env.JWT_SECRET || '-DhhAU)eVRtKaD;1J"d4)_$5`pnx<RQ}';

export function verifyAdminToken(token?: string) {
    if (!token) return null;
    try {
        const payload = jwt.verify(token, JWT_SECRET) as JwtPayload;
        return payload.isAdmin ? payload : null;
    } catch (error) {
        console.log(error);
        return null;
    }
}