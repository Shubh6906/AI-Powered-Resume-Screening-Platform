"use client";

interface Application {
  application_id: number;
  candidate_name: string;
  candidate_email: string;
  job_id: number;
  job_title: string;
  company: string;
  status: string;
}

interface RecentApplicationsProps {
  applications: Application[];
}

export default function TopCandidates({
  applications,
}: RecentApplicationsProps) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">
          Recent Applications
        </h2>

        <p className="text-gray-500 mt-1">
          Latest candidates who applied
        </p>
      </div>

      {applications.length === 0 ? (

        <div className="py-10 text-center text-gray-500">
          No applications yet.
        </div>

      ) : (

        <div className="space-y-5">

          {applications.map((application) => (

            <div
              key={application.application_id}
              className="flex justify-between items-start border-b border-gray-100 dark:border-slate-800 pb-4"
            >

              <div>

                <h3 className="font-semibold">
                  {application.candidate_name}
                </h3>

                <p className="text-sm text-gray-500">
                  {application.job_title}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  {application.company}
                </p>

              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  application.status === "shortlisted"
                    ? "bg-green-100 text-green-700"
                    : application.status === "rejected"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {application.status}
              </span>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}