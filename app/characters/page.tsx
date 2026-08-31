import Button from "../components/ui/Button";
import CharacterList from "../components/characters/CharacterList";
import SearchBox from "../components/characters/SearchBox";

export default function Characters() {
    return (
        <div className="flex flex-col gap-5 my-7 mx-5 lg:mx-20">
            <div>
                <h1 className="font-semibold text-3xl">Harry Potter Explorer</h1>
                <p className="text-sm text-gray-700">
                    Browse characters, view wand and patronus details, explore the four Hogwarts houses, and look up spells from the HP-API database.
                </p>
            </div>

            <SearchBox />

            <div className="flex flex-col gap-4">
                <p>
                    Showing
                    <span className="font-semibold"> 20</span> of <span className="font-semibold">47</span> characters
                </p>

                <CharacterList />
            </div>

            <div className="flex justify-center">
                <Button />
            </div>
        </div>
    )
}