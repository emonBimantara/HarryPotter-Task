"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
    { label: "Characters", href: "/characters" },
    { label: "Houses", href: "/houses" },
    { label: "Spells", href: "/spells" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white border-b border-gray-200">
            <div className="mx-4 md:mx-30 flex items-center justify-between py-5">
                <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="font-semibold text-lg text-gray-800"
                >
                    Harry Potter Explorer
                </Link>

                <nav className="hidden md:flex items-center gap-3">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                    isActive
                                        ? "bg-gray-100 text-gray-900 font-semibold"
                                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-700"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {isOpen && (
                <nav className="md:hidden border-t border-gray-200 px-4 py-3">
                    <div className="flex flex-col gap-1">
                        {NAV_ITEMS.map((item) => {
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`px-3 py-2 rounded-lg text-sm font-medium ${
                                        isActive
                                            ? "bg-gray-100 text-gray-900 font-semibold"
                                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            )}
        </header>
    );
}