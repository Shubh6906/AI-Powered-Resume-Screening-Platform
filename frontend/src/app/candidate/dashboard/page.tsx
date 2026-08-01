"use client";

import { useEffect, useState } from "react";

import CandidateLayout from "../../../components/dashboard/CandidateLayout";
import StatCard from "../../../components/dashboard/StatCard";

import { getCandidateDashboard } from "../../../hooks/useCandidate";

interface DashboardData {
  applications: number;
  shortlisted: number;
  rejected: number;
  resume_uploaded: boolean;
}

export default function CandidateDashboard() {
  const [dashboard, setDashboard] =
    useState<DashboardData | null>(null);

  async function fetchDashboard() {
    try {
      const data =
        await getCandidateDashboard();

      setDashboard(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (!dashboard) {
    return (
      <CandidateLayout>
        <div className="text-center py-20">
          Loading Dashboard...
        </div>
      </CandidateLayout>
    );
  }

  return (
    <CandidateLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Candidate Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Track your career journey with ResumeAI.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <StatCard
          title="Applications"
          value={dashboard.applications.toString()}
          change="Total Applications"
        />

        <StatCard
          title="Shortlisted"
          value={dashboard.shortlisted.toString()}
          change="Applications Shortlisted"
        />

        <StatCard
          title="Rejected"
          value={dashboard.rejected.toString()}
          change="Applications Rejected"
        />

        <StatCard
          title="Resume"
          value={
            dashboard.resume_uploaded
              ? "Uploaded"
              : "Missing"
          }
          change={
            dashboard.resume_uploaded
              ? "Ready for AI Matching"
              : "Upload Resume"
          }
        />
      </div>
    </CandidateLayout>
  );
}