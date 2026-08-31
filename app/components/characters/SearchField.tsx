import { Search } from "lucide-react";

type SearchFieldProps = {
    search: string;
    setSearch: (value: string) => void;
};

export default function SearchField({ search, setSearch }: SearchFieldProps) {
    return (
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2">
            <Search size={20} className="text-gray-500" />

            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, actor..."
                className="w-full outline-none text-sm text-gray-900 placeholder:text-gray-400"
            />
        </div>
    );
}