"use client";

import { Eye, FileText } from "lucide-react";

interface ResumeButtonProps {
  hasResume: boolean;
  candidateId: number;
}

export default function ResumeButton({
  hasResume,
  candidateId,
}: ResumeButtonProps) {
  function handleViewResume() {
    // TODO:
    // Replace with actual resume preview page/modal
    alert(
      `Resume preview for Candidate #${candidateId} will be available soon.`
    );
  }

  if (!hasResume) {
    return (
      <div className="inline-flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-slate-800 px-3 py-2 text-sm text-gray-500">
        <FileText size={16} />
        <span>No Resume</span>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleViewResume}
      className="inline-flex items-center gap-2 rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/30 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-950/50 transition"
    >
      <Eye size={16} />
      <span>View Resume</span>
    </button>
  );
}