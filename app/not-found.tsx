import ErrorState from "@/app/components/ui/ErrorState";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center gap-4 py-16">
            <ErrorState
                title="404 - Page Not Found"
                message="The page or character you are looking for does not exist."
            />
        </div>
    );
}
