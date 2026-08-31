"use client";

export type Category = "All" | "Students" | "Staff";

type CategoryFilterProps = {
    category: Category;
    setCategory: (category: Category) => void;
};

const CATEGORIES: Category[] = ["All", "Students", "Staff"];

export default function CategoryFilter({ category, setCategory }: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((item) => {
                const selected = category === item;

                return (
                    <button
                        key={item}
                        type="button"
                        onClick={() => setCategory(item)}
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