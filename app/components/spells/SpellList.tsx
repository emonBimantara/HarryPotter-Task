"use client";

import { Spell } from "@/types/spell";

type SpellListProps = {
    spells: Spell[];
};

export default function SpellList({ spells }: SpellListProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {spells.map((spell) => (
                <div
                    key={spell.id}
                    className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
                >
                    <h2 className="font-semibold text-lg text-gray-900">{spell.name}</h2>
                    <p className="mt-2 text-sm text-gray-600">{spell.description}</p>
                </div>
            ))}
        </div>
    );
}