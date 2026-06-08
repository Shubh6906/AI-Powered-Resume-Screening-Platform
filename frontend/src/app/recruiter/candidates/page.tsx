import DashboardLayout from "../../../components/dashboard/DashboardLayout";
import { Search } from "lucide-react";

const candidates = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    score: 94,
    experience: "3 Years",
    status: "Shortlisted",
  },
  {
    name: "Sarah Wilson",
    role: "Backend Developer",
    score: 92,
    experience: "4 Years",
    status: "Interview",
  },
  {
    name: "Alex Johnson",
    role: "Full Stack Developer",
    score: 89,
    experience: "2 Years",
    status: "Review",
  },
];

export default function CandidatesPage() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Candidates
        </h1>

        <p className="text-gray-500 mt-2">
          AI-ranked applicants
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-4 mb-6">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            placeholder="Search candidates..."
            className="w-full pl-10 py-2 pr-4 border border-gray-300 dark:border-slate-700 rounded-xl bg-transparent"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-slate-800">
              <th className="text-left p-4">
                Candidate
              </th>

              <th className="text-left p-4">
                Role
              </th>

              <th className="text-left p-4">
                Experience
              </th>

              <th className="text-left p-4">
                Match Score
              </th>

              <th className="text-left p-4">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {candidates.map((candidate) => (
              <tr
                key={candidate.name}
                className="border-b border-gray-200 dark:border-slate-800"
              >
                <td className="p-4">
                  {candidate.name}
                </td>

                <td className="p-4">
                  {candidate.role}
                </td>

                <td className="p-4">
                  {candidate.experience}
                </td>

                <td className="p-4">
                  <span className="font-bold text-green-600">
                    {candidate.score}%
                  </span>
                </td>

                <td className="p-4">
                  {candidate.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}