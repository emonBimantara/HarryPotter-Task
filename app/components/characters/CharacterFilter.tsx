const TYPES = ["All", "Students", "Staff"];

export default function CharacterTypeFilter() {
    return (
        <div className="grid grid-cols-3 gap-1 border border-gray-200 rounded-lg p-1">
            {TYPES.map((type, index) => (
                <button
                    key={type}
                    className={`py-2 rounded-md text-sm font-medium ${
                        index === 0
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                    {type}
                </button>
            ))}
        </div>
    );
}