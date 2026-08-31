import { Character } from "@/types/character";
import { ArrowRight, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
    character: Character
}

export default function Card({ character }: CardProps) {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow-sm border border-gray-100">
            {character.image ? (
                <Image
                    src={character.image}
                    alt={character.name}
                    width={300}
                    height={400}
                    className="w-full h-100 object-cover"
                />
            ) : (
                <div className="flex h-100 w-full flex-col items-center justify-center bg-gray-100 text-gray-400">
                    <User className="h-8 w-8" />
                    <span className="mt-1 text-[11px] font-medium">No image</span>
                </div>
            )}

            <div className="p-4">
                <h2 className="font-semibold text-lg text-gray-900">{character.name}</h2>
                <p className="text-sm text-gray-500">{character.actor}</p>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">{character.ancestry}</p>
                    <div className="flex items-center gap-1">
                        <Link
                            href={`/characters/${character.id}`}
                            className="text-sm font-medium text-gray-900"
                        >
                            View
                        </Link>
                        <ArrowRight size={15} />
                    </div>
                </div>
            </div>
        </div>
    );
}