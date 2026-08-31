export type Category = "All" | "Students" | "Staff";

type CategoryFilterProps = {
    category: Category;
    setCategory: (category: Category) => void;
};

const CATEGORIES: Category[] = ["All", "Students", "Staff"];

export default function CategoryFilter({ category, setCategory }: CategoryFilterProps) {
    return (
        <div className="grid grid-cols-3 gap-1 border border-gray-200 rounded-lg p-1">
            {CATEGORIES.map((item) => (
                <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-md py-1.5 text-sm font-medium transition-all ${category === item
                            ? "bg-white text-gray-900 shadow-sm"
                            : "text-gray-600 hover:bg-white/60 hover:text-gray-900"
                        }`}
                >
                    {item}
                </button>
            ))}
        </div>
    );
}