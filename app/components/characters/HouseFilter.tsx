const HOUSES = [
    "All Characters",
    "Gryffindor",
    "Slytherin",
    "Ravenclaw",
    "Hufflepuff",
];

export default function HouseFilter() {
    return (
        <div className="flex flex-wrap gap-5">
            {HOUSES.map((house, index) => (
                <button
                    key={house}
                    className={`px-3 py-2 rounded-lg text-sm font-medium ${
                        index === 0
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                    {house}
                </button>
            ))}
        </div>
    );
}