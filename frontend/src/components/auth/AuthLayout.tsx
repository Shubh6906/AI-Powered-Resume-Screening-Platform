"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

import ThemeToggle from "../ThemeToggle";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">

      {/* Grid Background */}

      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#94a3b8 1px,transparent 1px),linear-gradient(to bottom,#94a3b8 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Gradient Glow */}

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      {/* Header */}

      <header className="relative z-20">

        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold hover:text-blue-600 transition"
          >
            <ArrowLeft size={18} />

            Resume
            <span className="text-blue-600">
              AI
            </span>

          </Link>

          <ThemeToggle />

        </div>

      </header>

      {/* Content */}

      <section className="relative z-10 flex justify-center px-6 pb-16">

        <div className="w-full max-w-md">

          {/* Floating Logo */}

          <div className="flex justify-center mb-8">

            <div className="h-16 w-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-xl shadow-blue-600/30">

              <Sparkles size={28} />

            </div>

          </div>

          {/* Card */}

          <div className="rounded-3xl border border-white/40 dark:border-slate-800 bg-white/75 dark:bg-slate-900/75 backdrop-blur-2xl shadow-2xl p-8 md:p-10">

            {children}

          </div>

        </div>

      </section>

    </main>
  );
}