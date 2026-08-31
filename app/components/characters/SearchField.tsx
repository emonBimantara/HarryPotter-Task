"use client";

import { Search, X } from "lucide-react";

type SearchFieldProps = {
    search: string;
    setSearch: (value: string) => void;
};

export default function SearchField({ search, setSearch }: SearchFieldProps) {
    return (
        <div className="relative">
            <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search characters..."
                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-9 text-sm outline-none focus:border-gray-900"
            />

            {search && (
                <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                    <X size={16} />
                </button>
            )}
        </div>
    );
}