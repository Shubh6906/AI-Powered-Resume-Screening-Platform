"use client";

import Link from "next/link";

import {
  Briefcase,
  MapPin,
  Calendar,
  ArrowRight,
} from "lucide-react";

interface RecentApplication {
  application_id: number;
  job_id: number;
  job_title: string;
  company: string;
  location: string;
  status: string;
}

interface RecentApplicationsProps {
  applications: RecentApplication[];
}

export default function RecentApplications({
  applications,
}: RecentApplicationsProps) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">

      <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-800">

        <div>

          <h2 className="text-2xl font-bold">
            Recent Applications
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Track your latest job applications.
          </p>

        </div>

        <Link
          href="/candidate/applications"
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
        >
          View All

          <ArrowRight size={16} />

        </Link>

      </div>

      {applications.length === 0 ? (
        <div className="py-20 text-center">

          <Briefcase
            size={50}
            className="mx-auto text-gray-400 mb-4"
          />

          <h3 className="text-lg font-semibold">
            No Applications Yet
          </h3>

          <p className="text-gray-500 mt-2 mb-6">
            Start applying to jobs to track
            your progress here.
          </p>

          <Link
            href="/candidate/jobs"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition"
          >
            Browse Jobs

            <ArrowRight size={18} />

          </Link>

        </div>
      ) : (
        <div className="divide-y divide-gray-200 dark:divide-slate-800">

          {applications.map((application) => (

            <div
              key={application.application_id}
              className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 p-6 hover:bg-gray-50 dark:hover:bg-slate-800/40 transition"
            >

              <div className="flex gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950/40">

                  <Briefcase
                    size={22}
                    className="text-blue-600"
                  />

                </div>

                <div>

                  <h3 className="font-semibold text-lg">
                    {application.job_title}
                  </h3>

                  <p className="text-gray-500">
                    {application.company}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">

                    <span className="inline-flex items-center gap-1">

                      <MapPin size={15} />

                      {application.location}

                    </span>

                    <span className="inline-flex items-center gap-1">

                      <Calendar size={15} />

                      Recently Applied

                    </span>

                  </div>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    application.status.toLowerCase() ===
                    "shortlisted"
                      ? "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-300"
                      : application.status.toLowerCase() ===
                        "rejected"
                      ? "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300"
                      : "bg-yellow-100 text-yellow-700 dark:bg-yellow-950/40 dark:text-yellow-300"
                  }`}
                >
                  {application.status}
                </span>

                <Link
                  href={`/jobs/${application.job_id}`}
                  className="rounded-lg border border-gray-300 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-slate-800 transition"
                >
                  View
                </Link>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}