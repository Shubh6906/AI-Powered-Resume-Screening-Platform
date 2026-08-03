"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import DashboardLayout from "../../../components/dashboard/DashboardLayout";
import CandidateFilters from "../../../components/dashboard/CandidateFilters";
import CandidateTable from "../../../components/dashboard/CandidateTable";

import {
  Application,
  getJobApplications,
  updateApplicationStatus,
} from "../../../hooks/useApplications";

export default function CandidatesPage() {
  const searchParams = useSearchParams();

  const jobId = Number(
    searchParams.get("jobId") || 1
  );

  const [candidates, setCandidates] =
    useState<Application[]>([]);

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("all");

  const [loading, setLoading] =
    useState(true);

  async function fetchCandidates() {
    try {
      setLoading(true);

      const data =
        await getJobApplications(jobId);

      setCandidates(data);
    } catch (error) {
      console.error(error);

      alert("Failed to load candidates");
    } finally {
      setLoading(false);
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
    } catch (error) {
      console.error(error);

      alert(
        "Failed to update status"
      );
    }
  }

  const filteredCandidates =
    candidates.filter((candidate) => {
      const matchesSearch =
        candidate.full_name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        candidate.email
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        candidate.job_title
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        candidate.company
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesStatus =
        statusFilter === "all"
          ? true
          : candidate.status.toLowerCase() ===
            statusFilter.toLowerCase();

      return (
        matchesSearch &&
        matchesStatus
      );
    });

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Candidates
        </h1>

        <p className="mt-2 text-gray-500">
          Applicants for Job #{jobId}
        </p>
      </div>

      <CandidateFilters
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={
          setStatusFilter
        }
      />

      {loading ? (
        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-10 text-center">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />

          <p className="text-gray-500">
            Loading candidates...
          </p>
        </div>
      ) : (
        <CandidateTable
          candidates={
            filteredCandidates
          }
          onStatusUpdate={
            handleStatusUpdate
          }
        />
      )}
    </DashboardLayout>
  );
}