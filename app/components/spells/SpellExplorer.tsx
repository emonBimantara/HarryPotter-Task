"use client";

import { useState } from "react";
import { Spell } from "@/types/spell";
import SearchField from "../ui/SearchField";
import SpellList from "./SpellList";
import EmptyState from "../ui/EmptyState";
import LoadMoreButton from "../ui/LoadMoreButton";
import { useRouter, useSearchParams } from "next/navigation";


type SpellExplorerProps = {
    spells: Spell[];
};

export default function SpellExplorer({ spells }: SpellExplorerProps) {
    // const [search, setSearch] = useState("");
    const [visibleCount, setVisibleCount] = useState(20);

    const router = useRouter()
    const searchParams = useSearchParams()

    const initialSearch = searchParams.get("search") || ""
    const [query, setQuery] = useState(initialSearch)

    const filteredSpells = spells.filter((spell) =>
        spell.name.toLowerCase().includes(initialSearch.toLowerCase())
    );

    const displayedSpells = filteredSpells.slice(0, visibleCount);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const params = new URLSearchParams(searchParams.toString())

        if (query) {
            params.set("search", query)
        } else {
            params.delete("search")
        }

        router.push(`?${params.toString()}`)
    }

    return (
        <div className="space-y-5">
            <form onSubmit={handleSubmit}>
                <SearchField
                    value={query}
                    onChange={setQuery}
                    placeholder="Search spells..."
                />
            </form>


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