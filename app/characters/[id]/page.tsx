"use client"

import CharacterDetail from "@/app/components/characters/CharacterDetail";
import { getCharacterById } from "@/service/character";
import { notFound, useParams } from "next/navigation";
import { Metadata } from "next";
import { useState, useEffect } from "react";
import { Character } from "@/types/character";

type CharacterDetailPageProps = {
    params: Promise<{ id: string }>;
};

// export async function generateMetadata({ params }: CharacterDetailPageProps): Promise<Metadata> {
//     const { id } = await params
//     const character = await getCharacterById(id)

//     if (!character) {
//         return {
//             title: "Character not available"
//         }
//     }

//     return {
//         title: `${character.name} | Harry Potter Explorer`,
//         description: `${character.name} | Harry Potter Explorer`
//     }
// }

export default function CharacterDetailPage() {
    const params = useParams()
    const id = params.id as string
    const [characterData, setCharacterData] = useState<Character | null>(null)

    useEffect(() => {
        async function getDetailCharacter() {
            const respData = await getCharacterById(id)
            setCharacterData(respData)

            console.log(id)
            console.log(respData)
        }

        getDetailCharacter()
    }, [id])

    if (!characterData) {
        return <p>Loading...</p>;
    }

    return (
        <CharacterDetail character={characterData} />
    );
}

// export default async function CharacterDetailPage({
//     params,
// }: CharacterDetailPageProps) {
//     const { id } = await params;
//     const character = await getCharacterById(id);

//     if (!character) {
//         notFound();
//     }

//     return (
//         <div className="mx-5 my-7 lg:mx-auto lg:max-w-4xl">
//             <CharacterDetail character={character} />
//         </div>
//     );
// }