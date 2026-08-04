"use client";

import Link from "next/link";
import {
  FileText,
  Brain,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

interface ResumeHealthProps {
  resumeUploaded: boolean;
}

export default function ResumeHealth({
  resumeUploaded,
}: ResumeHealthProps) {
  if (!resumeUploaded) {
    return (
      <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

        <div className="flex items-center gap-3 mb-5">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-950/40">

            <FileText
              className="text-orange-600"
              size={24}
            />

          </div>

          <div>

            <h2 className="text-xl font-bold">
              Resume Health
            </h2>

            <p className="text-sm text-gray-500">
              Upload your resume to unlock AI analysis.
            </p>

          </div>

        </div>

        <Link
          href="/candidate/resume"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition"
        >
          Upload Resume

          <ArrowRight size={18} />

        </Link>

      </div>
    );
  }

  const resumeScore = 88;
  const atsScore = 91;
  const skillsExtracted = 24;

  const suggestions = [
    "Add measurable achievements",
    "Include Docker & Kubernetes",
    "Expand project descriptions",
  ];

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">

      <div className="flex items-center gap-3 mb-6">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-950/40">

          <Brain
            className="text-purple-600"
            size={24}
          />

        </div>

        <div>

          <h2 className="text-xl font-bold">
            AI Resume Health
          </h2>

          <p className="text-sm text-gray-500">
            AI analysis of your latest resume.
          </p>

        </div>

      </div>

      <div className="space-y-5">

        <div>

          <div className="flex justify-between mb-2">

            <span className="font-medium">
              Resume Score
            </span>

            <span className="font-bold text-blue-600">
              {resumeScore}/100
            </span>

          </div>

          <div className="h-3 rounded-full bg-gray-200 dark:bg-slate-800 overflow-hidden">

            <div
              className="h-full rounded-full bg-blue-600"
              style={{
                width: `${resumeScore}%`,
              }}
            />

          </div>

        </div>

        <div>

          <div className="flex justify-between mb-2">

            <span className="font-medium">
              ATS Compatibility
            </span>

            <span className="font-bold text-green-600">
              {atsScore}%
            </span>

          </div>

          <div className="h-3 rounded-full bg-gray-200 dark:bg-slate-800 overflow-hidden">

            <div
              className="h-full rounded-full bg-green-600"
              style={{
                width: `${atsScore}%`,
              }}
            />

          </div>

        </div>

        <div className="rounded-xl bg-gray-50 dark:bg-slate-800 p-4">

          <div className="flex justify-between">

            <span className="font-medium">
              Skills Extracted
            </span>

            <span className="font-bold">
              {skillsExtracted}
            </span>

          </div>

        </div>

        <div>

          <h3 className="font-semibold mb-3">
            AI Suggestions
          </h3>

          <div className="space-y-3">

            {suggestions.map((item) => (

              <div
                key={item}
                className="flex items-start gap-3"
              >

                <AlertTriangle
                  size={18}
                  className="mt-0.5 text-yellow-500"
                />

                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

        <div className="rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 p-4">

          <div className="flex items-start gap-3">

            <CheckCircle2
              size={20}
              className="text-green-600 mt-0.5"
            />

            <div>

              <h4 className="font-semibold text-green-700 dark:text-green-400">
                AI Summary
              </h4>

              <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                Your resume is well structured and
                ATS friendly. Adding stronger project
                achievements and cloud technologies
                can further improve job matching.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}