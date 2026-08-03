"use client";

interface JobPerformance {
  job_id: number;
  title: string;
  company: string;
  applications: number;
  shortlisted: number;
}

interface RecentActivityProps {
  jobs: JobPerformance[];
}

export default function RecentActivity({
  jobs,
}: RecentActivityProps) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">
          Job Performance
        </h2>

        <p className="text-gray-500 mt-1">
          Live statistics for all active jobs
        </p>
      </div>

      {jobs.length === 0 ? (
        <div className="py-10 text-center text-gray-500">
          No jobs available.
        </div>
      ) : (
        <div className="space-y-5">
          {jobs.map((job) => (
            <div
              key={job.job_id}
              className="rounded-xl border border-gray-200 dark:border-slate-800 p-5"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">
                    {job.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {job.company}
                  </p>
                </div>

                <span className="text-sm font-medium text-blue-600">
                  {job.applications} Applicants
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-lg bg-blue-50 dark:bg-blue-950/30 p-3">
                  <p className="text-xs text-gray-500">
                    Applications
                  </p>

                  <p className="text-2xl font-bold text-blue-600">
                    {job.applications}
                  </p>
                </div>

                <div className="rounded-lg bg-green-50 dark:bg-green-950/30 p-3">
                  <p className="text-xs text-gray-500">
                    Shortlisted
                  </p>

                  <p className="text-2xl font-bold text-green-600">
                    {job.shortlisted}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}