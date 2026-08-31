"use client"

import { Character } from "@/types/character"
import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import CharacterList from "./CharacterList";
import { House } from "./HouseFilter";
import EmptyState from "../ui/EmptyState";

type Category = "All" | "Students" | "Staff";

type CharacterExplorerProps = {
    characters: Character[];
};

export default function CharacterExplorer({ characters }: CharacterExplorerProps) {
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState<Category>("All");
    const [house, setHouse] = useState<House>("All Characters");
    const [displayCount, setDisplayCount] = useState(20);

    useEffect(() => {
        setDisplayCount(20);
    }, [search, category, house]);

    const filteredCharacters = characters.filter((character) => {
        const matchesSearch =
            `${character.name} ${character.actor}`
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            (category === "Students" && character.hogwartsStudent) ||
            (category === "Staff" && character.hogwartsStaff);

        const matchesHouse =
            house === "All Characters" ||
            character.house === house;

        return matchesSearch && matchesCategory && matchesHouse;
    });

    const displayedCharacters = filteredCharacters.slice(0, displayCount);

    return (
        <div>
            <SearchBox
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                house={house}
                setHouse={setHouse}
            />

            <div className="flex flex-col gap-4">
                <p>
                    Showing{" "}
                    <span className="font-semibold">{displayedCharacters.length}</span>{" "}of{" "}
                    <span className="font-semibold">{filteredCharacters.length}</span>{" "}
                    characters
                </p>

                {filteredCharacters.length > 0 ? (
                    <>
                        <CharacterList characters={displayedCharacters} />

                        {displayCount < filteredCharacters.length && (
                            <div className="flex justify-center mt-6">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setDisplayCount((prev) => prev + 20)
                                    }
                                    className="px-5 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    Load More
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <EmptyState />
                )}
            </div>
        </div>
    )
}
