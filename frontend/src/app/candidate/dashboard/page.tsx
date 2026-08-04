"use client";

import { useEffect, useState } from "react";

import CandidateLayout from "../../../components/dashboard/CandidateLayout";

import WelcomeBanner from "../../../components/candidate/WelcomeBanner";
import DashboardStats from "../../../components/candidate/DashboardStats";
import QuickActions from "../../../components/candidate/QuickActions";
import RecentApplications from "../../../components/candidate/RecentApplications";
import RecommendedJobs from "../../../components/candidate/RecommendedJobs";
import ProfileCompletion from "../../../components/candidate/ProfileCompletion";
import ResumeHealth from "../../../components/candidate/ResumeHealth";
import ActivityTimeline from "../../../components/candidate/ActivityTimeline";

import { getCandidateDashboard } from "../../../hooks/useCandidate";
import { getRecommendedJobs } from "../../../hooks/useAIRecommendations";

interface RecentApplication {
  application_id: number;
  job_id: number;
  job_title: string;
  company: string;
  location: string;
  status: string;
}

interface RecommendedJob {
  job_id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  match_score: number;
}

interface DashboardData {
  applications: number;
  shortlisted: number;
  rejected: number;
  resume_uploaded: boolean;
  recent_applications: RecentApplication[];
}

export default function CandidateDashboard() {
  const [dashboard, setDashboard] =
    useState<DashboardData | null>(null);

  const [recommendedJobs, setRecommendedJobs] =
    useState<RecommendedJob[]>([]);

  const [loading, setLoading] =
    useState(true);

  async function loadDashboard() {
    try {
      setLoading(true);

      const dashboardData =
        await getCandidateDashboard();

      const recommendations =
        await getRecommendedJobs();

      setDashboard(dashboardData);
      setRecommendedJobs(recommendations);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  if (loading || !dashboard) {
    return (
      <CandidateLayout>
        <div className="flex flex-col items-center justify-center py-32">

          <div className="h-12 w-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />

          <p className="mt-6 text-gray-500">
            Loading your dashboard...
          </p>

        </div>
      </CandidateLayout>
    );
  }

  return (
    <CandidateLayout>

      <WelcomeBanner
        resumeUploaded={
          dashboard.resume_uploaded
        }
      />

      <DashboardStats
        applications={
          dashboard.applications
        }
        shortlisted={
          dashboard.shortlisted
        }
        resumeUploaded={
          dashboard.resume_uploaded
        }
      />

      <QuickActions />

      {/* Recent Applications */}

      <div className="mb-8">

        <RecentApplications
          applications={
            dashboard.recent_applications
          }
        />

      </div>

      {/* Profile Completion & Resume Health */}

      <div className="grid gap-8 lg:grid-cols-2 mb-8">

        <ProfileCompletion
          resumeUploaded={
            dashboard.resume_uploaded
          }
        />

        <ResumeHealth
          resumeUploaded={
            dashboard.resume_uploaded
          }
        />

      </div>

      {/* AI Recommended Jobs */}

      <div className="mb-8">

        <RecommendedJobs
          jobs={recommendedJobs}
        />

      </div>

      {/* Activity Timeline */}

      <ActivityTimeline />

    </CandidateLayout>
  );
}