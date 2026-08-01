import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700" />

      <div className="absolute -top-32 left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 backdrop-blur">

          <Sparkles size={16} />

          <span className="text-sm font-medium">
            AI Recruitment Platform
          </span>

        </div>

        <h2 className="mt-8 text-5xl md:text-6xl font-bold leading-tight">

          Ready to Transform

          <br />

          Your Hiring Process?

        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-xl leading-8 text-blue-100">

          Join recruiters and candidates using ResumeAI
          to simplify hiring, discover top talent,
          and make better hiring decisions with AI.

        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-blue-700 px-8 py-4 font-semibold hover:scale-105 transition-all shadow-xl"
          >
            Get Started Free

            <ArrowRight size={18} />
          </Link>

          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-xl border border-white/30 px-8 py-4 font-semibold hover:bg-white/10 transition"
          >
            Login
          </Link>

        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-blue-100">

          <span>✓ AI Resume Parsing</span>

          <span>✓ Smart Candidate Ranking</span>

          <span>✓ AI Job Matching</span>

          <span>✓ Recruitment Analytics</span>

        </div>

      </div>

    </section>
  );
}