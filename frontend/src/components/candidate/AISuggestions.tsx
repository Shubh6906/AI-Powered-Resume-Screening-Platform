"use client";

import { Sparkles } from "lucide-react";

import {
  ResumeAnalysis as ResumeAnalysisType,
} from "../../hooks/useResume";

interface AISuggestionsProps {
  analysis: ResumeAnalysisType | null;
}

export default function AISuggestions({
  analysis,
}: AISuggestionsProps) {
  if (!analysis) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-purple-200 dark:border-purple-900 bg-purple-50 dark:bg-purple-950/20 p-6 transition hover:shadow-lg">

      <div className="mb-5 flex items-center gap-3">

        <Sparkles
          size={24}
          className="text-purple-600"
        />

        <div>

          <h2 className="text-xl font-bold">
            AI Suggestions
          </h2>

          <p className="text-sm text-purple-700 dark:text-purple-300">
            Recommendations to improve your resume.
          </p>

        </div>

      </div>

      <div className="space-y-3">

        {analysis.suggestions.map((suggestion) => (

          <div
            key={suggestion}
            className="rounded-xl border border-purple-100 dark:border-purple-900 bg-white dark:bg-slate-900 p-4"
          >
            {suggestion}
          </div>

        ))}

      </div>

    </div>
  );
}