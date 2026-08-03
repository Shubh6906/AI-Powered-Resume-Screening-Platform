"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "../../../components/dashboard/DashboardLayout";
import StatCard from "../../../components/dashboard/StatCard";
import HiringChart from "../../../components/dashboard/HiringChart";
import TopCandidates from "../../../components/dashboard/TopCandidates";
import RecentActivity from "../../../components/dashboard/RecentActivity";

import { getAnalytics } from "../../../hooks/useAnalytics";

interface AnalyticsData {
  stats: {
    total_jobs: number;
    total_applications: number;
    shortlisted: number;
    rejected: number;
    pending: number;
    average_match_score: number;
  };

  recent_applications: {
    application_id: number;
    candidate_name: string;
    candidate_email: string;
    job_id: number;
    job_title: string;
    company: string;
    status: string;
  }[];

  job_statistics: {
    job_id: number;
    title: string;
    company: string;
    applications: number;
    shortlisted: number;
  }[];
}

export default function RecruiterDashboard() {
  const [analytics, setAnalytics] =
    useState<AnalyticsData | null>(null);

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        const data =
          await getAnalytics();

        setAnalytics(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAnalytics();
  }, []);

  if (!analytics) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-[60vh]">
          Loading dashboard...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Recruiter Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back, Admin.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Jobs"
          value={analytics.stats.total_jobs.toString()}
          change="Live"
        />

        <StatCard
          title="Applications"
          value={analytics.stats.total_applications.toString()}
          change="Live"
        />

        <StatCard
          title="Shortlisted"
          value={analytics.stats.shortlisted.toString()}
          change="Live"
        />

        <StatCard
          title="Avg Match"
          value={`${analytics.stats.average_match_score}%`}
          change="AI Powered"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-8">

        <div className="lg:col-span-2">

          <HiringChart
            applications={
              analytics.stats.total_applications
            }
            pending={
              analytics.stats.pending
            }
            shortlisted={
              analytics.stats.shortlisted
            }
            rejected={
              analytics.stats.rejected
            }
          />

        </div>

        <TopCandidates
          applications={
            analytics.recent_applications
          }
        />

      </div>

      <RecentActivity
        jobs={
          analytics.job_statistics
        }
      />

    </DashboardLayout>
  );
}