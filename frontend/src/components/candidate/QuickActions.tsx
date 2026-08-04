"use client";

import Link from "next/link";
import {
  Briefcase,
  FileText,
  Sparkles,
  User,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Browse Jobs",
    description: "Explore the latest opportunities",
    href: "/candidate/jobs",
    icon: Briefcase,
    color:
      "bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
  },
  {
    title: "Resume Center",
    description: "Manage your resume",
    href: "/candidate/resume",
    icon: FileText,
    color:
      "bg-orange-100 text-orange-600 dark:bg-orange-950/40 dark:text-orange-400",
  },
  {
    title: "AI Recommendations",
    description: "Find jobs matched to your skills",
    href: "/candidate/recommendations",
    icon: Sparkles,
    color:
      "bg-purple-100 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400",
  },
  {
    title: "Applications",
    description: "Track all job applications",
    href: "/candidate/applications",
    icon: ClipboardList,
    color:
      "bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400",
  },
  {
    title: "My Profile",
    description: "Update profile and skills",
    href: "/candidate/profile",
    icon: User,
    color:
      "bg-cyan-100 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400",
  },
];

export default function QuickActions() {
  return (
    <section className="mb-8">

      <div className="flex items-center justify-between mb-5">

        <div>

          <h2 className="text-2xl font-bold">
            Quick Actions
          </h2>

          <p className="text-gray-500 mt-1">
            Jump directly to your most-used features.
          </p>

        </div>

      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >

              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${action.color}`}
              >
                <Icon size={26} />
              </div>

              <h3 className="text-lg font-semibold">
                {action.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500 min-h-[40px]">
                {action.description}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                Open

                <ArrowRight size={17} />
              </div>

            </Link>
          );
        })}

      </div>

    </section>
  );
}