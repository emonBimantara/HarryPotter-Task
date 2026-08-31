import LoadingState from "@/app/components/ui/LoadingState";

export default function Loading() {
    return (
        <div className="flex justify-center items-center min-h-[50vh]">
            <LoadingState message="Loading..." />
        </div>
    );
}
