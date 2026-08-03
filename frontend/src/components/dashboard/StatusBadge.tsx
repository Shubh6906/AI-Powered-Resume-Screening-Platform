interface StatusBadgeProps {
    status: string;
}

export default function StatusBadge({
    status,
}: StatusBadgeProps) {
    const normalized =
        status.toLowerCase();

    const styles = {
        applied:
            "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",

        shortlisted:
            "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-300",

        rejected:
            "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300",

        interview:
            "bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300",

        hired:
            "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
    };

    return (
        <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${styles[
                normalized as keyof typeof styles
                ] ??
                "bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-slate-300"
                }`}
        >
            {status}
        </span>
    );
}