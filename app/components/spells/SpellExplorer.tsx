"use client";

import { useState } from "react";
import { Spell } from "@/types/spell";
import SearchField from "../ui/SearchField";
import SpellList from "./SpellList";
import EmptyState from "../ui/EmptyState";
import LoadMoreButton from "../ui/LoadMoreButton";

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

            {filteredSpells.length > 0 ? (
                <>
                    <SpellList spells={displayedSpells} />

                    {visibleCount < filteredSpells.length && (
                        <LoadMoreButton
                            onClick={() => setVisibleCount((prev) => prev + 20)}
                        />
                    )}
                </>
            ) : (
                <EmptyState />
            )}
        </div>
    );
}