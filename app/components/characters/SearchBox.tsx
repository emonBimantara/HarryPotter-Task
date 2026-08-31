import SearchField from "./SearchField";
import CharacterFilter, { Category } from "./CategoryFilter";
import HouseFilter, { House } from "./HouseFilter";

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
        <div className="mt-5 space-y-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <SearchField
                search={search}
                setSearch={setSearch}
            />

            <CharacterFilter
                category={category}
                setCategory={setCategory}
            />

            <HouseFilter
                house={house}
                setHouse={setHouse}
            />
        </div>
    );
}