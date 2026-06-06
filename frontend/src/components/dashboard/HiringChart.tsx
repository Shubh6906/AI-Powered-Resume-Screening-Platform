"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", applications: 35 },
  { month: "Feb", applications: 52 },
  { month: "Mar", applications: 48 },
  { month: "Apr", applications: 71 },
  { month: "May", applications: 89 },
  { month: "Jun", applications: 120 },
];

export default function HiringChart() {
  return (
    <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-4">
        Hiring Analytics
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="applications"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}