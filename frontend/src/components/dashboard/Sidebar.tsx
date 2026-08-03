"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Briefcase,
  Users,
  BarChart3,
  Settings,
  Home,
  HelpCircle,
  Building2,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  role?: "recruiter" | "candidate";
}

const recruiterMenu = [
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

const candidateMenu = [
  {
    title: "Dashboard",
    href: "/candidate/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Jobs",
    href: "/candidate/jobs",
    icon: Briefcase,
  },
  {
    title: "Applications",
    href: "/candidate/applications",
    icon: Users,
  },
  {
    title: "Resume",
    href: "/candidate/resume",
    icon: Building2,
  },
  {
    title: "Settings",
    href: "/candidate/settings",
    icon: Settings,
  },
];

export default function Sidebar({
  role = "recruiter",
}: SidebarProps) {
  const pathname = usePathname();

  const menu =
    role === "recruiter"
      ? recruiterMenu
      : candidateMenu;

  return (
    <aside className="hidden lg:flex w-72 flex-col justify-between border-r border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950">

      {/* Top */}

      <div>

        {/* Logo */}

        <div className="px-8 py-8 border-b border-gray-200 dark:border-slate-800">

          <Link
            href="/"
            className="inline-flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">

              <Building2
                size={24}
                className="text-white"
              />

            </div>

            <div>

              <h1 className="text-2xl font-bold tracking-tight">

                Resume
                <span className="text-blue-600">
                  AI
                </span>

              </h1>

              <p className="text-xs text-gray-500 mt-1">

                {role === "recruiter"
                  ? "Recruiter Workspace"
                  : "Candidate Workspace"}

              </p>

            </div>

          </Link>

        </div>

        {/* Navigation */}

        <nav className="px-5 py-6">

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4 px-3">
            Main Menu
          </p>

          <div className="space-y-2">

            {menu.map((item) => {

              const Icon = item.icon;

              const active =
                pathname === item.href;

              return (

                <Link
                  key={item.title}
                  href={item.href}
                  className={`group flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-200 ${
                    active
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "hover:bg-gray-100 dark:hover:bg-slate-900"
                  }`}
                >

                  <div className="flex items-center gap-3">

                    <Icon size={20} />

                    <span className="font-medium">
                      {item.title}
                    </span>

                  </div>

                  <ChevronRight
                    size={16}
                    className={`transition ${
                      active
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />

                </Link>

              );

            })}

          </div>

        </nav>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-200 dark:border-slate-800 p-5">

        <div className="space-y-2">

          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-100 dark:hover:bg-slate-900 transition"
          >
            <Home size={18} />

            <span>Landing Page</span>

          </Link>

          <button
            className="w-full flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-100 dark:hover:bg-slate-900 transition"
          >
            <HelpCircle size={18} />

            <span>Help & Support</span>

          </button>

        </div>

        <div className="mt-8 rounded-2xl border border-gray-200 dark:border-slate-800 p-4">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">

              A

            </div>

            <div>

              <h3 className="font-semibold">
                Admin
              </h3>

              <p className="text-sm text-gray-500">

                {role === "recruiter"
                  ? "Recruiter"
                  : "Candidate"}

              </p>

            </div>

          </div>

        </div>

      </div>

    </aside>
  );
}