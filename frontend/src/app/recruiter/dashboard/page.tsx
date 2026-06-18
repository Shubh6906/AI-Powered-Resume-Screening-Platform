"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "../../../components/dashboard/DashboardLayout";
import StatCard from "../../../components/dashboard/StatCard";
import HiringChart from "../../../components/dashboard/HiringChart";
import TopCandidates from "../../../components/dashboard/TopCandidates";
import RecentActivity from "../../../components/dashboard/RecentActivity";

import { getAnalytics } from "../../../hooks/useAnalytics";

export default function RecruiterDashboard() {
  const [analytics, setAnalytics] =
    useState({
      total_jobs: 0,
      total_applications: 0,
      shortlisted_candidates: 0,
    });

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
          value={analytics.total_jobs.toString()}
          change="Live"
        />

        <StatCard
          title="Candidates"
          value={analytics.total_applications.toString()}
          change="Live"
        />

        <StatCard
          title="Shortlisted"
          value={
            analytics.shortlisted_candidates.toString()
          }
          change="Live"
        />

        <StatCard
          title="Avg Match"
          value="91%"
          change="+3% this month"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <HiringChart />
        </div>

        <TopCandidates />
      </div>

      <RecentActivity />
    </DashboardLayout>
  );
}