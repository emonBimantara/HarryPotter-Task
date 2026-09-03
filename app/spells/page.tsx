import { getSpells } from "@/service/spell";
import SpellExplorer from "../components/spells/SpellExplorer";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Spell | Harry Potter Explorer"
    }
}

export default async function SpellPage() {
    const spells = await getSpells();

    return (
        <div className="flex flex-col gap-5 my-7 mx-5 lg:mx-20">
            <div>
                <h1 className="font-semibold text-3xl">Spells</h1>
                <p className="text-sm text-gray-700">Search and view incantations and their magical effects.</p>
            </div>

            <SpellExplorer spells={spells} />
        </div>
    );
}