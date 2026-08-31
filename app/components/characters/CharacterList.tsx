import { Character } from "@/types/character";
import Card from "./Card";

type CharacterListProps = {
    characters: Character[]
}

export default function CharacterList({ characters }: CharacterListProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {characters.map((character) => (
                <Card
                    key={character.id}
                    character={character}
                />
            ))}
        </div>
    );
}