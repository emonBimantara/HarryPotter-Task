import { Spell } from "@/types/spell";

const BASE_URL = process.env.API_URL;

export async function getSpells(): Promise<Spell[]> {
    try {
        const resp = await fetch(`${BASE_URL}/spells`, { cache: "no-store" });

        if (!resp.ok) {
            throw new Error(`HTTP Error: ${resp.status}`);
        }

        const respData = await resp.json();
        return respData;
    } catch (error) {
        console.error(error);
        throw error;
    }
}