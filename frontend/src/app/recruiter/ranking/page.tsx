"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import DashboardLayout from "../../../components/dashboard/DashboardLayout";

import { Search, Trophy } from "lucide-react";

import { getRankedCandidates } from "../../../hooks/useAI";

interface CandidateRanking {
  candidate_id: number;
  full_name: string;
  email: string;
  match_score: number;
  matched_skills: string[];
  missing_skills: string[];
}

export default function RankingPage() {
  const searchParams = useSearchParams();

  const jobId = Number(
    searchParams.get("jobId") || 1
  );

  const [rankings, setRankings] =
    useState<CandidateRanking[]>([]);

  const [search, setSearch] =
    useState("");

  async function fetchRankings() {
    try {
      const data =
        await getRankedCandidates(
          jobId
        );

      setRankings(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchRankings();
  }, [jobId]);

  const filteredRankings =
    rankings.filter((candidate) =>
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
          AI Candidate Ranking
        </h1>

        <p className="text-gray-500 mt-2">
          Ranked candidates for Job #{jobId}
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 p-4 mb-8">
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
            className="w-full pl-10 py-2 pr-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent"
          />
        </div>
      </div>

      <div className="space-y-6">
        {filteredRankings.map(
          (
            candidate,
            index
          ) => (
            <div
              key={
                candidate.candidate_id
              }
              className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy
                      className="text-yellow-500"
                      size={22}
                    />

                    <h2 className="text-2xl font-bold">
                      Rank #{index + 1}
                    </h2>
                  </div>

                  <h3 className="text-xl font-semibold">
                    {
                      candidate.full_name
                    }
                  </h3>

                  <p className="text-gray-500">
                    {
                      candidate.email
                    }
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-gray-500 text-sm">
                    Match Score
                  </p>

                  <h2 className="text-4xl font-bold text-green-600">
                    {
                      candidate.match_score
                    }
                    %
                  </h2>
                </div>
              </div>

              <div className="mt-6">
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{
                      width: `${candidate.match_score}%`,
                    }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">
                    Matched Skills
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {candidate.matched_skills.map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-red-600">
                    Missing Skills
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {candidate.missing_skills.map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </DashboardLayout>
  );
}