import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface DashboardLayoutProps {
  children: ReactNode;
  role?: "recruiter" | "candidate";
  title?: string;
  subtitle?: string;
}

export default function DashboardLayout({
  children,
  role = "recruiter",
  title,
  subtitle,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex">

      {/* Sidebar */}

      <Sidebar role={role} />

      {/* Main Content */}

      <div className="flex-1 flex flex-col overflow-hidden">

        <Topbar
          role={role}
        />

        <main className="flex-1 overflow-y-auto">

          {(title || subtitle) && (

            <section className="border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950">

              <div className="max-w-7xl mx-auto px-8 py-8">

                {title && (

                  <h1 className="text-4xl font-bold tracking-tight">

                    {title}

                  </h1>

                )}

                {subtitle && (

                  <p className="mt-2 text-gray-500 dark:text-slate-400">

                    {subtitle}

                  </p>

                )}

              </div>

            </section>

          )}

          <section className="max-w-7xl mx-auto px-8 py-8">

            {children}

          </section>

        </main>

      </div>

    </div>
  );
}