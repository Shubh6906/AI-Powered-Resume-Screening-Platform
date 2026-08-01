"use client";

import { useEffect, useState } from "react";

import CandidateLayout from "../../../components/dashboard/CandidateLayout";
import StatCard from "../../../components/dashboard/StatCard";

import { Briefcase, Sparkles } from "lucide-react";

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

  async function fetchDashboard() {
    try {
      const data =
        await getCandidateDashboard();

      setDashboard(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchRecommendations() {
    try {
      const data =
        await getRecommendedJobs();

      setRecommendedJobs(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchDashboard();
    fetchRecommendations();
  }, []);

  if (!dashboard) {
    return (
      <CandidateLayout>
        <div className="flex justify-center items-center py-20 text-lg">
          Loading dashboard...
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

      <div className="grid md:grid-cols-4 gap-6 mb-10">
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

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Recent Applications */}

        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl shadow-sm">

          <div className="p-6 border-b border-gray-200 dark:border-slate-800">
            <h2 className="text-2xl font-semibold">
              Recent Applications
            </h2>

            <p className="text-gray-500 mt-1">
              Your latest applications
            </p>
          </div>

          {dashboard.recent_applications.length === 0 ? (
            <div className="py-16 text-center text-gray-500">
              No applications yet.
            </div>
          ) : (
            <div className="divide-y divide-gray-200 dark:divide-slate-800">
              {dashboard.recent_applications.map(
                (application) => (
                  <div
                    key={application.application_id}
                    className="flex justify-between items-center p-6"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <Briefcase
                          className="text-blue-600"
                          size={22}
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          {application.job_title}
                        </h3>

                        <p className="text-gray-500 text-sm">
                          {application.company}
                          {" • "}
                          {application.location}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        application.status ===
                        "shortlisted"
                          ? "bg-green-100 text-green-700"
                          : application.status ===
                            "rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {application.status}
                    </span>
                  </div>
                )
              )}
            </div>
          )}
        </div>

        {/* AI Recommendations */}

        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl shadow-sm">

          <div className="p-6 border-b border-gray-200 dark:border-slate-800 flex items-center gap-2">
            <Sparkles
              className="text-purple-600"
              size={22}
            />

            <h2 className="text-xl font-semibold">
              AI Recommended Jobs
            </h2>
          </div>

          {recommendedJobs.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No recommendations available.
            </div>
          ) : (
            <div className="divide-y divide-gray-200 dark:divide-slate-800">
              {recommendedJobs.map((job) => (
                <div
                  key={job.job_id}
                  className="p-5"
                >
                  <div className="flex justify-between items-start mb-2">

                    <div>
                      <h3 className="font-semibold">
                        {job.title}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {job.company}
                      </p>
                    </div>

                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {job.match_score}%
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mb-3">
                    {job.location}
                  </p>

                  <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition"
                  >
                    View Job
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </CandidateLayout>
  );
}