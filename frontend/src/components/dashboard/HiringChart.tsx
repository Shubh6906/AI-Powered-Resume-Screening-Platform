"use client";

interface HiringChartProps {
  applications: number;
  pending: number;
  shortlisted: number;
  rejected: number;
}

export default function HiringChart({
  applications,
  pending,
  shortlisted,
  rejected,
}: HiringChartProps) {
  const max = Math.max(
    applications,
    pending,
    shortlisted,
    rejected,
    1
  );

  const rows = [
    {
      label: "Applications",
      value: applications,
      color: "bg-blue-600",
    },
    {
      label: "Pending",
      value: pending,
      color: "bg-yellow-500",
    },
    {
      label: "Shortlisted",
      value: shortlisted,
      color: "bg-green-500",
    },
    {
      label: "Rejected",
      value: rejected,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">
          Hiring Pipeline
        </h2>

        <p className="text-gray-500 mt-1">
          Live recruitment status
        </p>
      </div>

      <div className="space-y-6">

        {rows.map((row) => (

          <div key={row.label}>

            <div className="flex justify-between mb-2">

              <span className="font-medium">
                {row.label}
              </span>

              <span className="font-semibold">
                {row.value}
              </span>

            </div>

            <div className="h-3 rounded-full bg-gray-200 dark:bg-slate-800 overflow-hidden">

              <div
                className={`${row.color} h-full rounded-full transition-all duration-700`}
                style={{
                  width: `${(row.value / max) * 100}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}