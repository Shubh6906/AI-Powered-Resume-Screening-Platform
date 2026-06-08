import CandidateLayout from "../../../components/dashboard/CandidateLayout";
import { Upload } from "lucide-react";

export default function ResumePage() {
  return (
    <CandidateLayout>
      <h1 className="text-4xl font-bold mb-4">
        My Resume
      </h1>

      <p className="text-gray-500 mb-8">
        Upload and manage your resume.
      </p>

      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-12 text-center">
        <Upload
          size={48}
          className="mx-auto mb-4 text-blue-500"
        />

        <h2 className="text-xl font-semibold mb-2">
          Upload Resume
        </h2>

        <p className="text-gray-500 mb-6">
          PDF and DOCX supported
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
          Choose File
        </button>
      </div>
    </CandidateLayout>
  );
}