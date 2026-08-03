"use client";

import {
  CheckCircle,
  XCircle,
  UserCircle,
} from "lucide-react";

import StatusBadge from "./StatusBadge";
import ResumeButton from "./ResumeButton";

import { Application } from "../../hooks/useApplications";

interface CandidateTableProps {
  candidates: Application[];

  onStatusUpdate: (
    applicationId: number,
    status: string
  ) => void;
}

export default function CandidateTable({
  candidates,
  onStatusUpdate,
}: CandidateTableProps) {
  if (candidates.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-10 text-center">

        <UserCircle
          size={60}
          className="mx-auto text-gray-400 mb-4"
        />

        <h2 className="text-2xl font-semibold">
          No Candidates Found
        </h2>

        <p className="text-gray-500 mt-2">
          No applicants match your current
          filters.
        </p>

      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-gray-50 dark:bg-slate-800">

            <tr>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Candidate
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Applied Job
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Resume
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                AI Match
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {candidates.map((candidate) => (

              <tr
                key={candidate.application_id}
                className="border-t border-gray-200 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/40 transition"
              >

                {/* Candidate */}

                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">

                      {candidate.full_name
                        .charAt(0)
                        .toUpperCase()}

                    </div>

                    <div>

                      <h3 className="font-semibold">

                        {candidate.full_name}

                      </h3>

                      <p className="text-sm text-gray-500">

                        {candidate.email}

                      </p>

                    </div>

                  </div>

                </td>

                {/* Job */}

                <td className="px-6 py-5">

                  <div>

                    <p className="font-medium">

                      {candidate.job_title}

                    </p>

                    <p className="text-sm text-gray-500">

                      {candidate.company}

                    </p>

                  </div>

                </td>

                {/* Resume */}

                <td className="px-6 py-5">

                  <ResumeButton
                    candidateId={
                      candidate.candidate_id
                    }
                    hasResume={
                      candidate.resume_uploaded
                    }
                  />

                </td>

                {/* AI */}

                <td className="px-6 py-5">

                  <div className="flex items-center gap-2">

                    <div className="h-2 w-24 rounded-full bg-gray-200 dark:bg-slate-700 overflow-hidden">

                      <div
                        style={{
                          width: `${candidate.ai_match_score}%`,
                        }}
                        className="h-full bg-blue-600"
                      />

                    </div>

                    <span className="font-semibold">

                      {candidate.ai_match_score}%

                    </span>

                  </div>

                </td>

                {/* Status */}

                <td className="px-6 py-5">

                  <StatusBadge
                    status={candidate.status}
                  />

                </td>

                {/* Actions */}

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() =>
                        onStatusUpdate(
                          candidate.application_id,
                          "Shortlisted"
                        )
                      }
                      className="rounded-lg p-2 text-green-600 hover:bg-green-100 dark:hover:bg-green-950/40 transition"
                    >

                      <CheckCircle size={20} />

                    </button>

                    <button
                      onClick={() =>
                        onStatusUpdate(
                          candidate.application_id,
                          "Rejected"
                        )
                      }
                      className="rounded-lg p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-950/40 transition"
                    >

                      <XCircle size={20} />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}