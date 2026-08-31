"use client"

import { Character } from "@/types/character";
import Card from "./Card";
import { useState } from "react";

type CharacterListProps = {
    characters: Character[]
}

export default function CharacterList({ characters }: CharacterListProps) {
    const [visibleCount, setVisibleCount] = useState(20)
    const displayedCharacters = characters.slice(0, visibleCount);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
                {displayedCharacters.map((character) => (
                    <Card
                        key={character.id}
                        character={character}
                    />
                ))}
            </div>

            {visibleCount < characters.length && (
                <div className="flex justify-center mt-6">
                    <button
                        type="button"
                        onClick={() => setVisibleCount(visibleCount + 20)}
                        className="px-5 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Load More
                    </button>
                </div>
            )}
        </>
    );
}