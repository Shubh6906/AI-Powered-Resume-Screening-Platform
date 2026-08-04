"use client";

import {
  Brain,
  BadgeCheck,
  ScanSearch,
} from "lucide-react";

import {
  ResumeAnalysis as ResumeAnalysisType,
} from "../../hooks/useResume";

interface ResumeAnalysisProps {
  analysis: ResumeAnalysisType | null;
}

export default function ResumeAnalysis({
  analysis,
}: ResumeAnalysisProps) {
  if (!analysis) {
    return null;
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">

      {/* Resume Score */}

      <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition hover:shadow-lg">

        <Brain
          size={34}
          className="mb-4 text-purple-600"
        />

        <h3 className="text-lg font-semibold">
          Resume Score
        </h3>

        <p className="mt-4 text-5xl font-bold text-blue-600">

          {analysis.resume_score}

        </p>

        <p className="mt-3 text-gray-500">
          Overall quality of your resume.
        </p>

      </div>

      {/* ATS */}

      <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition hover:shadow-lg">

        <ScanSearch
          size={34}
          className="mb-4 text-green-600"
        />

        <h3 className="text-lg font-semibold">
          ATS Score
        </h3>

        <p className="mt-4 text-5xl font-bold text-green-600">

          {analysis.ats_score}%

        </p>

        <p className="mt-3 text-gray-500">
          Applicant Tracking System compatibility.
        </p>

      </div>

      {/* AI Summary */}

      <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition hover:shadow-lg">

        <BadgeCheck
          size={34}
          className="mb-4 text-orange-600"
        />

        <h3 className="text-lg font-semibold">
          AI Summary
        </h3>

        <p className="mt-4 leading-7 text-gray-500">

          {analysis.summary}

        </p>

      </div>

    </div>
  );
}