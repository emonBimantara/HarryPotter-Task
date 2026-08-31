import SearchField from "../ui/SearchField";
import CharacterTypeFilter from "./CharacterFilter";
import HouseFilter from "./HouseFilter";

export default function SearchBox() {
    return (
        <div className="mt-5 space-y-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <SearchField />
            <CharacterTypeFilter />
            <HouseFilter />
        </div>
    );
}