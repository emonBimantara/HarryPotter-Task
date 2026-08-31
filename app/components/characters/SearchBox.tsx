import SearchField from "./SearchField";
import CategoryFilter from "./CategoryFilter";
import HouseFilter, { House } from "./HouseFilter";

type Category = "All" | "Students" | "Staff";

type SearchBoxProps = {
    search: string;
    setSearch: (value: string) => void;
    category: Category;
    setCategory: (category: Category) => void;
    house: House;
    setHouse: (house: House) => void;
};

export default function SearchBox({
    search,
    setSearch,
    category,
    setCategory,
    house,
    setHouse,
}: SearchBoxProps) {
    return (
        <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <SearchField
                    search={search}
                    setSearch={setSearch}
                />

                <div className="flex items-center gap-2">
                    <p className="text-xs font-medium text-gray-500">Category</p>

                    <CategoryFilter
                        category={category}
                        setCategory={setCategory}
                    />
                </div>
            </div>

            <div>
                <p className="mb-2 text-xs font-medium text-gray-500">House</p>

                <HouseFilter
                    house={house}
                    setHouse={setHouse}
                />
            </div>
        </div>
    );
}