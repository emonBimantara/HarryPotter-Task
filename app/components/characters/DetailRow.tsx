type DetailRowProps = {
    label: string;
    value: React.ReactNode;
};

export default function DetailRow({ label, value }: DetailRowProps) {
    return (
        <div className="flex justify-between gap-4 py-3">
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-right text-sm font-medium text-gray-900">{value}</p>
        </div>
    );
}