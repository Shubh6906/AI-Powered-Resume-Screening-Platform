"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  User,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/candidate/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Resume",
    href: "/candidate/resume",
    icon: FileText,
  },
  {
    title: "Applications",
    href: "/candidate/applications",
    icon: Briefcase,
  },
  {
    title: "Profile",
    href: "/candidate/profile",
    icon: User,
  },
];

export default function CandidateSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:block w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 min-h-screen">
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
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition mb-2 ${
                pathname === item.href
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-slate-800"
              }`}
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