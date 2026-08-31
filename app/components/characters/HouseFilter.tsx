"use client";

export type House =
    | "All Characters"
    | "Gryffindor"
    | "Slytherin"
    | "Ravenclaw"
    | "Hufflepuff";

type HouseFilterProps = {
    house: House;
    setHouse: (house: House) => void;
};

const HOUSES: House[] = [
    "All Characters",
    "Gryffindor",
    "Slytherin",
    "Ravenclaw",
    "Hufflepuff",
];

const HOUSE_STYLES: Record<House, string> = {
    "All Characters": "border-gray-900 bg-gray-900 text-white",
    Gryffindor: "border-red-300 bg-red-50 text-red-800",
    Slytherin: "border-green-300 bg-green-50 text-green-800",
    Ravenclaw: "border-blue-300 bg-blue-50 text-blue-800",
    Hufflepuff: "border-yellow-300 bg-yellow-50 text-yellow-800",
};

export default function HouseFilter({ house, setHouse }: HouseFilterProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {HOUSES.map((item) => {
                const selected = house === item;

                return (
                    <button
                        key={item}
                        type="button"
                        onClick={() => setHouse(item)}
                        className={`rounded-lg border px-3 py-1.5 text-xs font-medium ${
                            selected
                                ? HOUSE_STYLES[item]
                                : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                        {item}
                    </button>
                );
            })}
        </div>
    );
}