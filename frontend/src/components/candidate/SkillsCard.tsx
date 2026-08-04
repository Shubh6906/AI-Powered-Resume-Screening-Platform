"use client";

import {
  Code2,
  CheckCircle2,
} from "lucide-react";

import {
  ResumeAnalysis as ResumeAnalysisType,
} from "../../hooks/useResume";

interface SkillsCardProps {
  analysis: ResumeAnalysisType | null;
}

export default function SkillsCard({
  analysis,
}: SkillsCardProps) {
  if (!analysis) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition hover:shadow-lg">

      <div className="mb-6 flex items-center gap-3">

        <Code2
          size={28}
          className="text-blue-600"
        />

        <div>

          <h2 className="text-xl font-bold">
            Skills Extracted
          </h2>

          <p className="text-sm text-gray-500">
            AI detected these skills from your resume.
          </p>

        </div>

      </div>

      {analysis.skills.length === 0 ? (

        <div className="rounded-xl border border-dashed border-gray-300 dark:border-slate-700 p-8 text-center text-gray-500">

          No skills detected.

        </div>

      ) : (

        <div className="flex flex-wrap gap-3">

          {analysis.skills.map(
            (skill) => (

              <span
                key={skill}
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/30 px-4 py-2 text-sm font-medium"
              >

                <CheckCircle2
                  size={15}
                  className="text-blue-600"
                />

                {skill}

              </span>

            )
          )}

        </div>

      )}

    </div>
  );
}