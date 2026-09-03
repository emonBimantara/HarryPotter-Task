import { getCharacters } from "@/service/character";
import CharacterExplorer from "../components/characters/CharacterExplorer";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Characters | Harry Potter Explorer"
    }
}

export default async function Characters() {
    const characters = await getCharacters()

    return (
        <div className="flex flex-col gap-5 my-7 mx-5 lg:mx-20">
            <div>
                <h1 className="font-semibold text-3xl">Harry Potter Explorer</h1>
                <p className="text-sm text-gray-700">
                    Browse characters, view wand and patronus details, explore the four Hogwarts houses, and look up spells from the HP-API database.
                </p>
            </div>

            <CharacterExplorer characters={characters} />
        </div>
    )
}