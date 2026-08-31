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
                                ? "border-gray-900 bg-gray-900 text-white"
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