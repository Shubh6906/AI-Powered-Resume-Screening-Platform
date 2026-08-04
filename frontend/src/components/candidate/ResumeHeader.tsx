"use client";

import Link from "next/link";

import {
  FileText,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import {
  Resume,
} from "../../hooks/useResume";

interface ResumeHeaderProps {
  resume: Resume | null;
}

export default function ResumeHeader({
  resume,
}: ResumeHeaderProps) {
  const uploaded = !!resume;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 text-white">

      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex flex-col lg:flex-row justify-between gap-8">

        <div>

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium">

            <Sparkles size={16} />

            AI Resume Center

          </div>

          <h1 className="mb-3 text-4xl font-bold">
            Resume Center
          </h1>

          <p className="max-w-2xl text-blue-100 leading-7">

            Upload your resume, improve your ATS
            score, receive AI suggestions and
            maximize your chances of getting
            shortlisted.

          </p>

          <div className="mt-6 flex items-center gap-3">

            <CheckCircle2
              size={18}
            />

            <span>

              {uploaded
                ? "Resume Uploaded Successfully"
                : "No Resume Uploaded"}

            </span>

          </div>

        </div>

        <div className="flex items-start">

          {uploaded ? (

            <Link
              href="/candidate/recommendations"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
            >

              View AI Matches

              <ArrowRight size={18} />

            </Link>

          ) : (

            <a
              href="#upload"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
            >

              <FileText size={18} />

              Upload Resume

            </a>

          )}

        </div>

      </div>

    </div>
  );
}