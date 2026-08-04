"use client";

import { AlertTriangle } from "lucide-react";

import {
  ResumeAnalysis as ResumeAnalysisType,
} from "../../hooks/useResume";

interface MissingSkillsProps {
  analysis: ResumeAnalysisType | null;
}

export default function MissingSkills({
  analysis,
}: MissingSkillsProps) {
  if (!analysis) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition hover:shadow-lg">

      <div className="mb-6 flex items-center gap-3">

        <AlertTriangle
          size={24}
          className="text-yellow-500"
        />

        <div>

          <h2 className="text-xl font-bold">
            Missing Skills
          </h2>

          <p className="text-sm text-gray-500">
            Frequently requested skills missing from your resume.
          </p>

        </div>

      </div>

      {analysis.missing_skills.length === 0 ? (

        <div className="rounded-xl border border-dashed border-gray-300 dark:border-slate-700 p-8 text-center text-gray-500">

          No missing skills detected.

        </div>

      ) : (

        <div className="flex flex-wrap gap-3">

          {analysis.missing_skills.map((skill) => (

            <span
              key={skill}
              className="rounded-full border border-yellow-200 dark:border-yellow-900 bg-yellow-50 dark:bg-yellow-950/30 px-4 py-2 text-sm font-medium"
            >
              {skill}
            </span>

          ))}

        </div>

      )}

    </div>
  );
}