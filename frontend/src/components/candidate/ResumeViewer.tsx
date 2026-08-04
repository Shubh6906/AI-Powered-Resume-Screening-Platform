"use client";

import {
  Eye,
  FileText,
  CheckCircle2,
} from "lucide-react";

import {
  Resume,
} from "../../hooks/useResume";

interface ResumeViewerProps {
  resume: Resume | null;
}

export default function ResumeViewer({
  resume,
}: ResumeViewerProps) {

  if (!resume) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-16 text-center">

        <FileText
          size={60}
          className="mx-auto mb-6 text-gray-400"
        />

        <h2 className="text-2xl font-bold">
          No Resume Uploaded
        </h2>

        <p className="mt-3 text-gray-500">
          Upload your resume to enable AI
          analysis and job recommendations.
        </p>

      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-800 p-6">

        <div>

          <h2 className="text-2xl font-bold">
            Resume Preview
          </h2>

          <p className="mt-1 text-gray-500">

            {resume.file_name}

          </p>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700 dark:bg-green-900/30 dark:text-green-300">

          <CheckCircle2 size={18} />

          Uploaded

        </div>

      </div>

      {/* Preview */}

      <div className="flex h-[650px] items-center justify-center bg-gray-100 dark:bg-slate-950">

        <div className="w-[430px] rounded-2xl border border-gray-300 bg-white p-10 shadow-lg dark:border-slate-700 dark:bg-slate-900">

          <div className="mb-6 flex justify-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950">

              <FileText
                size={46}
                className="text-blue-600"
              />

            </div>

          </div>

          <h3 className="text-center text-2xl font-bold">

            {resume.file_name}

          </h3>

          <p className="mt-3 text-center text-gray-500">

            Resume uploaded successfully.

          </p>

          <div className="mt-10 rounded-xl border border-dashed border-gray-300 p-8 text-center dark:border-slate-700">

            <Eye
              size={34}
              className="mx-auto mb-4 text-blue-600"
            />

            <p className="font-semibold">

              PDF Preview

            </p>

            <p className="mt-2 text-sm text-gray-500">

              PDF viewer integration will be
              added in the next phase.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}