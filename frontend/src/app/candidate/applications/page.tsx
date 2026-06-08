import CandidateLayout from "../../../components/dashboard/CandidateLayout";

const applications = [
  {
    company: "TechCorp",
    role: "Frontend Developer",
    status: "Shortlisted",
  },
  {
    company: "Cloudify",
    role: "Backend Developer",
    status: "Under Review",
  },
  {
    company: "DesignHub",
    role: "UI Designer",
    status: "Rejected",
  },
];

export default function ApplicationsPage() {
  return (
    <CandidateLayout>
      <h1 className="text-4xl font-bold mb-4">
        Applications
      </h1>

      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-slate-800">
              <th className="text-left p-4">
                Company
              </th>

              <th className="text-left p-4">
                Role
              </th>

              <th className="text-left p-4">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => (
              <tr
                key={app.company}
                className="border-b border-gray-200 dark:border-slate-800"
              >
                <td className="p-4">
                  {app.company}
                </td>

                <td className="p-4">
                  {app.role}
                </td>

                <td className="p-4">
                  {app.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CandidateLayout>
  );
}