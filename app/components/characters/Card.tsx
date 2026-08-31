import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow-sm border border-gray-100">
            <Image
                src="/tes.webp"
                alt="Harry Potter"
                width={300}
                height={400}
                className="w-full  object-cover"
            />

            <div className="p-4">
                <h2 className="font-semibold text-lg text-gray-900">Harry Potter</h2>
                <p className="text-sm text-gray-500">Daniel Radcliffe</p>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">Half-Blood</p>
                    <div className="flex items-center gap-1">
                        <Link
                            href="#"
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