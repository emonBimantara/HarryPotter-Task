"use client";

import ErrorState from "@/app/components/ui/ErrorState";

type ErrorProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
    return (
        <ErrorState
            title="Something went wrong"
            message="Unable to fetch data. Please try again."
            onRetry={reset}
        />
    );
}