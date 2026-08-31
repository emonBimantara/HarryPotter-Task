import { Loader2 } from "lucide-react";

type LoadingStateProps = {
    message?: string;
};

export default function LoadingState({ message = "Loading..." }: LoadingStateProps) {
    return (
        <div className="flex flex-col items-center gap-3 py-16 text-center">
            <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
            <p className="text-sm text-gray-500">{message}</p>
        </div>
    );
}