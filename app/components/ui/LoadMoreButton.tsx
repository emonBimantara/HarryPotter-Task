type LoadMoreButtonProps = {
    onClick: () => void;
};

export default function LoadMoreButton({ onClick }: LoadMoreButtonProps) {
    return (
        <div className="flex justify-center mt-6">
            <button
                type="button"
                onClick={onClick}
                className="px-5 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
                Load More
            </button>
        </div>
    );
}