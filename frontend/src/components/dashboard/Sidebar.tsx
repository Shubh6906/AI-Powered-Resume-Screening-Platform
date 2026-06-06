"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/recruiter/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Jobs",
    href: "/recruiter/jobs",
    icon: Briefcase,
  },
  {
    title: "Candidates",
    href: "/recruiter/candidates",
    icon: Users,
  },
  {
    title: "Analytics",
    href: "/recruiter/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/recruiter/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 min-h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          ResumeAI
        </h1>
      </div>

      <nav className="px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition mb-2"
            >
              <Icon size={18} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}