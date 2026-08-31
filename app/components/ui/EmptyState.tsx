import { SearchX } from "lucide-react";

export default function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center rounded-xl border border-gray-100 bg-white py-16 text-center">
            <SearchX className="h-10 w-10 text-gray-400" />
            <h2 className="mt-3 font-semibold text-gray-900">No characters found</h2>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filters.</p>
        </div>
    );
}