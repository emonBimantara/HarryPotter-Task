import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white text-gray-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-gray-700 font-medium">Harry Potter Explorer</p>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/characters" className="hover:text-gray-900 transition-colors">
            Characters
          </Link>
          <Link href="/spells" className="hover:text-gray-900 transition-colors">
            Spells
          </Link>
          <a
            href="https://hp-api.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            API Source
          </a>
        </div>
      </div>
    </footer>
  );
}
