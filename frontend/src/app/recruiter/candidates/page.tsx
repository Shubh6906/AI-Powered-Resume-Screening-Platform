"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import DashboardLayout from "../../../components/dashboard/DashboardLayout";

import {
  Search,
  CheckCircle,
  XCircle,
} from "lucide-react";

import {
  getJobApplications,
  updateApplicationStatus,
} from "../../../hooks/useApplications";

interface Candidate {
  application_id: number;
  candidate_id: number;
  full_name: string;
  email: string;
  status: string;
}

export default function CandidatesPage() {
  const searchParams = useSearchParams();

  const jobId = Number(
    searchParams.get("jobId") || 1
  );

  const [candidates, setCandidates] =
    useState<Candidate[]>([]);

  const [search, setSearch] =
    useState("");

  async function fetchCandidates() {
    try {
      const data =
        await getJobApplications(
          jobId
        );

      setCandidates(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCandidates();
  }, [jobId]);

  async function handleStatusUpdate(
    applicationId: number,
    status: string
  ) {
    try {
      await updateApplicationStatus(
        applicationId,
        status
      );

      await fetchCandidates();

      alert(
        `Candidate ${status}`
      );
    } catch (error) {
      console.error(error);

      alert(
        "Failed to update status"
      );
    }
  }

  const filteredCandidates =
    candidates.filter(
      (candidate) =>
        candidate.full_name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Candidates
        </h1>

        <p className="text-gray-500 mt-2">
          Applicants for Job #{jobId}
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-4 mb-6">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            placeholder="Search candidates..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full pl-10 py-2 pr-4 border border-gray-300 dark:border-slate-700 rounded-xl bg-transparent"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-slate-800">
              <th className="text-left p-4">
                Candidate
              </th>

              <th className="text-left p-4">
                Email
              </th>

              <th className="text-left p-4">
                Status
              </th>

              <th className="text-left p-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredCandidates.length >
            0 ? (
              filteredCandidates.map(
                (candidate) => (
                  <tr
                    key={
                      candidate.application_id
                    }
                    className="border-b border-gray-200 dark:border-slate-800"
                  >
                    <td className="p-4 font-medium">
                      {
                        candidate.full_name
                      }
                    </td>

                    <td className="p-4">
                      {candidate.email}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          candidate.status.toLowerCase() ===
                          "shortlisted"
                            ? "bg-green-100 text-green-700"
                            : candidate.status.toLowerCase() ===
                              "rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {
                          candidate.status
                        }
                      </span>
                    </td>

                    <td className="p-4">
                      <div className="flex gap-4">
                        <button
                          onClick={() =>
                            handleStatusUpdate(
                              candidate.application_id,
                              "shortlisted"
                            )
                          }
                          className="text-green-600 hover:scale-110 transition"
                        >
                          <CheckCircle
                            size={20}
                          />
                        </button>

                        <button
                          onClick={() =>
                            handleStatusUpdate(
                              candidate.application_id,
                              "rejected"
                            )
                          }
                          className="text-red-600 hover:scale-110 transition"
                        >
                          <XCircle
                            size={20}
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-10 text-gray-500"
                >
                  No applicants found for
                  this job.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}