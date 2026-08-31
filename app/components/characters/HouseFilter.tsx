export type House =
    | "All Characters"
    | "Gryffindor"
    | "Slytherin"
    | "Ravenclaw"
    | "Hufflepuff";

type HouseFilterProps = {
    house: House,
    setHouse: (house: House) => void
}

const HOUSES: House[] = [
    "All Characters",
    "Gryffindor",
    "Slytherin",
    "Ravenclaw",
    "Hufflepuff",
];

export default function HouseFilter({ house, setHouse }: HouseFilterProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {HOUSES.map((item) => (
                <button
                    key={item}
                    type="button"
                    onClick={() => setHouse(item)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${house === item
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                >
                    {item}
                </button>
            ))}
        </div>
    );
}