import DashboardLayout from "../../../components/dashboard/DashboardLayout";
import { Plus, Search, Eye, Pencil, Trash2 } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    applications: 34,
    status: "Active",
    created: "2026-06-01",
  },
  {
    id: 2,
    title: "Backend Developer",
    applications: 21,
    status: "Active",
    created: "2026-06-02",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    applications: 15,
    status: "Closed",
    created: "2026-05-28",
  },
];

export default function JobsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold">
            Jobs
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all job postings
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl">
          <Plus size={18} />
          Create Job
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-4 mb-6">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            placeholder="Search jobs..."
            className="w-full pl-10 py-2 pr-4 border border-gray-300 dark:border-slate-700 rounded-xl bg-transparent"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-slate-800">
              <th className="text-left p-4">
                Position
              </th>

              <th className="text-left p-4">
                Applications
              </th>

              <th className="text-left p-4">
                Status
              </th>

              <th className="text-left p-4">
                Created
              </th>

              <th className="text-left p-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job) => (
              <tr
                key={job.id}
                className="border-b border-gray-200 dark:border-slate-800"
              >
                <td className="p-4">
                  {job.title}
                </td>

                <td className="p-4">
                  {job.applications}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      job.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>

                <td className="p-4">
                  {job.created}
                </td>

                <td className="p-4">
                  <div className="flex gap-3">
                    <Eye size={18} />

                    <Pencil size={18} />

                    <Trash2 size={18} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}