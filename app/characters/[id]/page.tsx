import CharacterDetail from "@/app/components/characters/CharacterDetail";
import { getCharacterById } from "@/service/character";
import { notFound } from "next/navigation";

type CharacterDetailPageProps = {
    params: Promise<{ id: string }>;
};

export default async function CharacterDetailPage({
    params,
}: CharacterDetailPageProps) {
    const { id } = await params;
    const character = await getCharacterById(id);

    if (!character) {
        notFound();
    }

    return (
        <div className="mx-5 my-7 lg:mx-auto lg:max-w-4xl">
            <CharacterDetail character={character} />
        </div>
    );
}