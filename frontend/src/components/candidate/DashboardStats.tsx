"use client";

import Link from "next/link";

import {
  Briefcase,
  CheckCircle2,
  FileText,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface DashboardStatsProps {
  applications: number;
  shortlisted: number;
  resumeUploaded: boolean;
}

export default function DashboardStats({
  applications,
  shortlisted,
  resumeUploaded,
}: DashboardStatsProps) {
  const cards = [
    {
      title: "Applications",
      value: applications,
      subtitle: "Jobs Applied",
      icon: Briefcase,
      color:
        "bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
    },
    {
      title: "Shortlisted",
      value: shortlisted,
      subtitle: "Recruiter Interest",
      icon: CheckCircle2,
      color:
        "bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400",
    },
    {
      title: "Resume",
      value: resumeUploaded
        ? "Ready"
        : "Missing",
      subtitle: resumeUploaded
        ? "Optimized for AI"
        : "Upload Required",
      icon: FileText,
      color:
        "bg-orange-100 text-orange-600 dark:bg-orange-950/40 dark:text-orange-400",
    },
    {
      title: "AI Matching",
      value: resumeUploaded
        ? "Active"
        : "--",
      subtitle: resumeUploaded
        ? "Recommendations Enabled"
        : "Upload Resume First",
      icon: Sparkles,
      color:
        "bg-purple-100 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-8">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {card.value}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  {card.subtitle}
                </p>

              </div>

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.color}`}
              >
                <Icon size={24} />
              </div>

            </div>

            {(card.title === "Resume" &&
              !resumeUploaded) && (
              <Link
                href="/candidate/resume"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
              >
                Upload Resume

                <ArrowRight size={16} />

              </Link>
            )}

          </div>
        );
      })}

    </div>
  );
}