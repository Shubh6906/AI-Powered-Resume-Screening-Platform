import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Users,
  Briefcase,
  Sparkles,
} from "lucide-react";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 mb-8">

              <Sparkles
                size={16}
                className="text-blue-600"
              />

              <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
                AI Powered Recruitment Platform
              </span>

            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">

              Hire the

              <span className="text-blue-600">
                {" "}
                Right Talent
              </span>

              <br />

              10x Faster

            </h1>

            <p className="mt-8 text-xl text-gray-600 dark:text-slate-300 leading-8 max-w-xl">

              Automatically screen resumes,
              rank candidates using AI,
              discover top talent,
              and streamline your hiring
              workflow with ResumeAI.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition shadow-xl shadow-blue-600/20"
              >
                Get Started

                <ArrowRight size={18} />
              </Link>

              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 dark:border-slate-700 px-8 py-4 font-semibold hover:bg-gray-100 dark:hover:bg-slate-900 transition"
              >
                Live Demo
              </Link>

            </div>

            <div className="flex flex-wrap items-center gap-8 mt-12">

              <div className="flex items-center gap-2">

                <CheckCircle2
                  className="text-green-500"
                  size={18}
                />

                <span className="text-sm">
                  AI Resume Parsing
                </span>

              </div>

              <div className="flex items-center gap-2">

                <CheckCircle2
                  className="text-green-500"
                  size={18}
                />

                <span className="text-sm">
                  Smart Candidate Ranking
                </span>

              </div>

              <div className="flex items-center gap-2">

                <CheckCircle2
                  className="text-green-500"
                  size={18}
                />

                <span className="text-sm">
                  AI Job Matching
                </span>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative">

            <div className="rounded-3xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl p-8">

              <div className="flex justify-between items-center mb-8">

                <h3 className="font-semibold text-xl">
                  Recruiter Dashboard
                </h3>

                <BrainCircuit
                  className="text-blue-600"
                  size={26}
                />

              </div>

              <div className="space-y-5">

                <div className="flex justify-between items-center rounded-2xl bg-gray-50 dark:bg-slate-800 p-5">

                  <div className="flex items-center gap-3">

                    <Users className="text-blue-600" />

                    <div>

                      <p className="font-semibold">
                        Candidates
                      </p>

                      <p className="text-sm text-gray-500">
                        AI Ranked
                      </p>

                    </div>

                  </div>

                  <span className="font-bold text-green-600">
                    94%
                  </span>

                </div>

                <div className="flex justify-between items-center rounded-2xl bg-gray-50 dark:bg-slate-800 p-5">

                  <div className="flex items-center gap-3">

                    <Briefcase className="text-purple-600" />

                    <div>

                      <p className="font-semibold">
                        Open Jobs
                      </p>

                      <p className="text-sm text-gray-500">
                        Active Hiring
                      </p>

                    </div>

                  </div>

                  <span className="font-bold">
                    18
                  </span>

                </div>

                <div className="rounded-2xl bg-blue-600 text-white p-6">

                  <p className="text-sm opacity-80">
                    AI Match Accuracy
                  </p>

                  <h2 className="text-5xl font-bold mt-2">
                    98%
                  </h2>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}