type ErrorStateProps = {
    title?: string;
    message?: string;
    onRetry?: () => void;
};

export default function ErrorState({
    title = "Something went wrong",
    message = "Unable to fetch data. Please try again.",
    onRetry,
}: ErrorStateProps) {
    return (
        <div className="flex flex-col items-center gap-2 py-16 text-center">
            <h2 className="text-2xl font-semibold text-red-600">{title}</h2>
            <p className="text-sm text-gray-500">{message}</p>

            {onRetry && (
                <button
                    type="button"
                    onClick={onRetry}
                    className="mt-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                >
                    Try Again
                </button>
            )}
        </div>
    );
}