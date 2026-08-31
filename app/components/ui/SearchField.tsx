"use client";

import { Search, X } from "lucide-react";

type SearchFieldProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
};

export default function SearchField({
    value,
    onChange,
    placeholder = "Search...",
}: SearchFieldProps) {
    return (
        <div className="relative">
            <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-9 text-sm outline-none focus:border-gray-900"
            />

            {value && (
                <button
                    type="button"
                    onClick={() => onChange("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                    <X size={16} />
                </button>
            )}
        </div>
    );
}