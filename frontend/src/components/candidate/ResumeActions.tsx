"use client";

import { useRef } from "react";

import {
  Upload,
  RefreshCcw,
  Download,
  Trash2,
} from "lucide-react";

import {
  Resume,
  uploadResume,
  replaceResume,
  deleteResume,
  downloadResume,
} from "../../hooks/useResume";

interface ResumeActionsProps {
  resume: Resume | null;

  refreshResume: () => void;
}

export default function ResumeActions({
  resume,
  refreshResume,
}: ResumeActionsProps) {
  const uploadInputRef =
    useRef<HTMLInputElement>(null);

  const replaceInputRef =
    useRef<HTMLInputElement>(null);

  async function handleUpload(
    file: File
  ) {
    try {
      await uploadResume(file);

      await refreshResume();

      alert(
        "Resume uploaded successfully."
      );
    } catch (error) {
      console.error(error);

      alert(
        "Failed to upload resume."
      );
    }
  }

  async function handleReplace(
    file: File
  ) {
    try {
      await replaceResume(file);

      await refreshResume();

      alert(
        "Resume replaced successfully."
      );
    } catch (error) {
      console.error(error);

      alert(
        "Failed to replace resume."
      );
    }
  }

  async function handleDelete() {
    if (
      !confirm(
        "Delete your resume?"
      )
    ) {
      return;
    }

    try {
      await deleteResume();

      await refreshResume();

      alert(
        "Resume deleted."
      );
    } catch (error) {
      console.error(error);

      alert(
        "Failed to delete."
      );
    }
  }

  async function handleDownload() {
    try {
      const blob =
        await downloadResume();

      const url =
        window.URL.createObjectURL(
          blob
        );

      const link =
        document.createElement("a");

      link.href = url;

      link.download =
        resume?.file_name ??
        "resume.pdf";

      document.body.appendChild(
        link
      );

      link.click();

      link.remove();

      window.URL.revokeObjectURL(
        url
      );
    } catch (error) {
      console.error(error);

      alert(
        "Download failed."
      );
    }
  }

  return (
    <div
      id="upload"
      className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6"
    >
      <h2 className="mb-6 text-2xl font-bold">
        Resume Actions
      </h2>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        {/* Upload */}

        <button
          onClick={() =>
            resume
              ? replaceInputRef.current?.click()
              : uploadInputRef.current?.click()
          }
          className="flex items-center justify-center gap-3 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <Upload size={20} />

          {resume
            ? "Upload New"
            : "Upload Resume"}
        </button>

        {/* Replace */}

        <button
          disabled={!resume}
          onClick={() =>
            replaceInputRef.current?.click()
          }
          className="flex items-center justify-center gap-3 rounded-xl border border-gray-300 py-3 transition hover:bg-gray-100 disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          <RefreshCcw size={20} />

          Replace
        </button>

        {/* Download */}

        <button
          disabled={!resume}
          onClick={
            handleDownload
          }
          className="flex items-center justify-center gap-3 rounded-xl border border-gray-300 py-3 transition hover:bg-gray-100 disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          <Download size={20} />

          Download
        </button>

        {/* Delete */}

        <button
          disabled={!resume}
          onClick={
            handleDelete
          }
          className="flex items-center justify-center gap-3 rounded-xl border border-red-300 py-3 text-red-600 transition hover:bg-red-50 disabled:opacity-50 dark:hover:bg-red-950/30"
        >
          <Trash2 size={20} />

          Delete
        </button>

      </div>

      {/* Hidden Upload */}

      <input
        ref={uploadInputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        hidden
        onChange={(e) => {
          const file =
            e.target.files?.[0];

          if (file) {
            handleUpload(file);
          }
        }}
      />

      {/* Hidden Replace */}

      <input
        ref={replaceInputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        hidden
        onChange={(e) => {
          const file =
            e.target.files?.[0];

          if (file) {
            handleReplace(file);
          }
        }}
      />

    </div>
  );
}