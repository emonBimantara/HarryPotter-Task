import { Character } from "@/types/character";
import { WandSparkles } from "lucide-react";
import Image from "next/image";
import DetailRow from "./DetailRow";


type CharacterDetailProps = {
    character: Character;
};

export default function CharacterDetail({ character }: CharacterDetailProps) {
    const wand = character.wand
        ? [
            character.wand.wood,
            character.wand.core,
            character.wand.length
                ? `${character.wand.length}" long`
                : null,
        ]
            .filter(Boolean)
            .join(", ")
        : "Unknown";

    return (
        <>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
                <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
                    <div>
                        <div className="overflow-hidden rounded-lg bg-gray-100">
                            {character.image ? (
                                <Image
                                    src={character.image}
                                    alt={character.name}
                                    width={300}
                                    height={400}
                                    className="aspect-[3/4] w-full object-cover"
                                />
                            ) : (
                                <div className="flex aspect-[3/4] items-center justify-center text-sm text-gray-400">
                                    No image
                                </div>
                            )}
                        </div>

                        {character.alternate_names.length > 0 && (
                            <div className="mt-4">
                                <p className="mb-1 text-xs font-semibold text-gray-700">Also known as</p>
                                <p className="text-xs leading-relaxed text-gray-500">
                                    {character.alternate_names.join(", ")}
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="md:col-span-2">
                        <div className="border-b border-gray-100 pb-4">
                            <div className="mb-2 flex flex-wrap gap-2">
                                {character.house && (
                                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                                        {character.house}
                                    </span>
                                )}

                                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                                    {character.alive
                                        ? "Living"
                                        : "Deceased"
                                    }
                                </span>

                                {character.hogwartsStudent && (
                                    <span className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600">
                                        Student
                                    </span>
                                )}

                                {character.hogwartsStaff && (
                                    <span className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600">
                                        Staff
                                    </span>
                                )}
                            </div>

                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{character.name}</h1>

                            <p className="mt-1 text-sm text-gray-500">
                                Actor:{" "}
                                <span className="font-medium text-gray-800">{character.actor || "Unknown"}</span>
                            </p>
                        </div>

                        <div className="divide-y divide-gray-100">
                            <DetailRow
                                label="House"
                                value={character.house || "Unknown"}
                            />

                            <DetailRow
                                label="Patronus"
                                value={character.patronus || "Unknown"}
                            />

                            <DetailRow
                                label="Wand"
                                value={<span className="flex items-center gap-2">{wand}</span>}
                            />

                            <DetailRow
                                label="Ancestry"
                                value={character.ancestry || "Unknown"}
                            />

                            <DetailRow
                                label="Date of Birth"
                                value={
                                    character.dateOfBirth ||
                                    character.yearOfBirth?.toString() || "Unknown"
                                }
                            />

                            <DetailRow
                                label="Species"
                                value={character.species || "Unknown"}
                            />

                            <DetailRow
                                label="Gender"
                                value={character.gender || "Unknown"}
                            />

                            <DetailRow
                                label="Eye Colour"
                                value={character.eyeColour || "Unknown"}
                            />

                            <DetailRow
                                label="Hair Colour"
                                value={character.hairColour || "Unknown"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}