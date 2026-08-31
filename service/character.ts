import { Character } from "@/types/character";

const BASE_URL = process.env.API_URL;

export async function getCharacters(): Promise<Character[]> {
    try {
        const resp = await fetch(`${BASE_URL}/characters`, { cache: "no-store" })

        if (!resp.ok) {
            throw new Error(`HTTP Error: ${resp.status}`);
        }

        const respData = await resp.json()
        return respData
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getCharacterById(id: string): Promise<Character | null> {
    try {
        const resp = await fetch(`${BASE_URL}/character/${id}`, { cache: "no-store" })

        if (!resp.ok) {
            throw new Error(`HTTP Error: ${resp.status}`);
        }

        const respData = await resp.json();

        if (respData.length === 0) {
            return null;
        }

        return respData[0];
    } catch (error) {
        console.error(error);
        throw error;
    }
}