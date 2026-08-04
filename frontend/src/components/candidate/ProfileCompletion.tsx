"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Circle,
  ArrowRight,
} from "lucide-react";

interface ProfileCompletionProps {
  resumeUploaded: boolean;
}

export default function ProfileCompletion({
  resumeUploaded,
}: ProfileCompletionProps) {
  const checklist = [
    {
      title: "Basic Profile",
      completed: true,
    },
    {
      title: "Resume Uploaded",
      completed: resumeUploaded,
    },
    {
      title: "Skills Added",
      completed: false,
    },
    {
      title: "Education",
      completed: false,
    },
    {
      title: "Experience",
      completed: false,
    },
    {
      title: "LinkedIn Profile",
      completed: false,
    },
    {
      title: "GitHub Portfolio",
      completed: false,
    },
  ];

  const completed =
    checklist.filter(
      (item) => item.completed
    ).length;

  const percentage = Math.round(
    (completed / checklist.length) * 100
  );

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold">
            Profile Completion
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Complete your profile to improve AI job recommendations.
          </p>

        </div>

        <div className="text-right">

          <h3 className="text-3xl font-bold text-blue-600">
            {percentage}%
          </h3>

          <p className="text-xs text-gray-500">
            Completed
          </p>

        </div>

      </div>

      <div className="mb-6 h-3 overflow-hidden rounded-full bg-gray-200 dark:bg-slate-800">

        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <div className="space-y-3">

        {checklist.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between rounded-xl border border-gray-100 dark:border-slate-800 p-3"
          >

            <div className="flex items-center gap-3">

              {item.completed ? (
                <CheckCircle2
                  size={20}
                  className="text-green-600"
                />
              ) : (
                <Circle
                  size={20}
                  className="text-gray-400"
                />
              )}

              <span
                className={
                  item.completed
                    ? ""
                    : "text-gray-500"
                }
              >
                {item.title}
              </span>

            </div>

          </div>
        ))}

      </div>

      <Link
        href="/candidate/profile"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition"
      >
        Complete Profile

        <ArrowRight size={18} />

      </Link>

    </div>
  );
}