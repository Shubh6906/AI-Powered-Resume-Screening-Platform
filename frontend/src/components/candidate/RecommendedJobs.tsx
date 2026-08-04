"use client";

import Link from "next/link";

import {
  Sparkles,
  MapPin,
  Building2,
  IndianRupee,
  ArrowRight,
} from "lucide-react";

interface RecommendedJob {
  job_id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  match_score: number;
}

interface RecommendedJobsProps {
  jobs: RecommendedJob[];
}

export default function RecommendedJobs({
  jobs,
}: RecommendedJobsProps) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">

      <div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-800 p-6">

        <div>

          <div className="flex items-center gap-2">

            <Sparkles
              className="text-purple-600"
              size={22}
            />

            <h2 className="text-2xl font-bold">
              AI Recommended Jobs
            </h2>

          </div>

          <p className="mt-1 text-sm text-gray-500">
            Personalized opportunities selected by ResumeAI.
          </p>

        </div>

        <Link
          href="/candidate/recommendations"
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
        >
          View All

          <ArrowRight size={16} />

        </Link>

      </div>

      {jobs.length === 0 ? (

        <div className="py-16 text-center">

          <Sparkles
            size={54}
            className="mx-auto text-purple-500 mb-5"
          />

          <h3 className="text-xl font-semibold">
            No Recommendations Yet
          </h3>

          <p className="mt-2 text-gray-500">
            Upload your resume to unlock
            AI-powered job matching.
          </p>

          <Link
            href="/candidate/resume"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700 transition"
          >
            Upload Resume

            <ArrowRight size={18} />

          </Link>

        </div>

      ) : (

        <div className="divide-y divide-gray-200 dark:divide-slate-800">

          {jobs.map((job) => (

            <div
              key={job.job_id}
              className="p-6 hover:bg-gray-50 dark:hover:bg-slate-800/40 transition"
            >

              <div className="flex justify-between items-start">

                <div>

                  <h3 className="text-lg font-semibold">
                    {job.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap gap-5 text-sm text-gray-500">

                    <span className="flex items-center gap-1">

                      <Building2 size={15} />

                      {job.company}

                    </span>

                    <span className="flex items-center gap-1">

                      <MapPin size={15} />

                      {job.location}

                    </span>

                    <span className="flex items-center gap-1">

                      <IndianRupee size={15} />

                      {job.salary}

                    </span>

                  </div>

                </div>

                <div className="text-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-purple-500 text-lg font-bold text-purple-600">

                    {job.match_score}%

                  </div>

                  <p className="mt-2 text-xs text-gray-500">
                    AI Match
                  </p>

                </div>

              </div>

              <div className="mt-5 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900 p-4">

                <div className="flex items-start gap-2">

                  <Sparkles
                    size={18}
                    className="mt-0.5 text-purple-600"
                  />

                  <p className="text-sm text-purple-700 dark:text-purple-300">

                    Strong match based on your resume,
                    technical skills and previous
                    applications.

                  </p>

                </div>

              </div>

              <div className="mt-5 flex gap-3">

                <Link
                  href={`/jobs/${job.job_id}`}
                  className="flex-1 rounded-xl border border-gray-300 dark:border-slate-700 py-3 text-center font-medium hover:bg-gray-100 dark:hover:bg-slate-800 transition"
                >
                  View Details
                </Link>

                <button
                  className="flex-1 rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Apply Now
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}