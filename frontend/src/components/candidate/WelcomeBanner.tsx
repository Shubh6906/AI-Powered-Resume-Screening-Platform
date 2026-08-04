"use client";

import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Upload,
} from "lucide-react";

interface WelcomeBannerProps {
  resumeUploaded: boolean;
}

export default function WelcomeBanner({
  resumeUploaded,
}: WelcomeBannerProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 text-white mb-8">

      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium mb-5">

            <Sparkles size={16} />

            AI Powered Career Assistant

          </div>

          <h1 className="text-4xl font-bold mb-3">

            Welcome Back 👋

          </h1>

          <p className="max-w-2xl text-blue-100 leading-7">

            Manage your job applications, improve your resume,
            receive AI-powered recommendations and track your
            hiring journey—all from one place.

          </p>

        </div>

        <div className="flex flex-col gap-3">

          {resumeUploaded ? (
            <Link
              href="/candidate/recommendations"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition"
            >
              View AI Recommendations

              <ArrowRight size={18} />

            </Link>
          ) : (
            <Link
              href="/candidate/resume"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition"
            >
              <Upload size={18} />

              Upload Resume

            </Link>
          )}

          <Link
            href="/candidate/jobs"
            className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 font-medium hover:bg-white/10 transition"
          >
            Browse Jobs
          </Link>

        </div>

      </div>

    </div>
  );
}