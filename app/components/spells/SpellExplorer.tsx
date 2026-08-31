"use client";

import { useState } from "react";
import { Spell } from "@/types/spell";
import SearchField from "../ui/SearchField";
import SpellList from "./SpellList";
import EmptyState from "../ui/EmptyState";

type SpellExplorerProps = {
    spells: Spell[];
};

export default function SpellExplorer({ spells }: SpellExplorerProps) {
    const [search, setSearch] = useState("");
    const [visibleCount, setVisibleCount] = useState(20);

    const filteredSpells = spells.filter((spell) =>
        spell.name.toLowerCase().includes(search.toLowerCase())
    );

    const displayedSpells = filteredSpells.slice(0, visibleCount);

    return (
        <div className="space-y-5">
            <SearchField
                value={search}
                onChange={setSearch}
                placeholder="Search spells..."
            />

            <p className="text-sm text-gray-700">
                Showing{" "}
                <span className="font-semibold">{displayedSpells.length}</span>
                {" "}of{" "}<span className="font-semibold">{spells.length}</span>{" "}spells
            </p>

            <SpellList spells={displayedSpells} />

            {filteredSpells.length > 0 ? (
                <>
                    <SpellList spells={displayedSpells} />

                    {visibleCount < filteredSpells.length && (
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
            ) : (
                <EmptyState />
            )}
        </div>
    );
}