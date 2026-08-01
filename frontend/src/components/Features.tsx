import {
  FileSearch,
  BrainCircuit,
  BarChart3,
  Zap,
  Target,
  Trophy,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: FileSearch,
      title: "AI Resume Parsing",
      description:
        "Automatically extract candidate skills, education, experience, and technologies from resumes within seconds.",
    },
    {
      icon: BrainCircuit,
      title: "Smart AI Matching",
      description:
        "Our intelligent matching engine compares resumes with job requirements and calculates an accurate compatibility score.",
    },
    {
      icon: BarChart3,
      title: "Recruitment Analytics",
      description:
        "Monitor hiring performance with real-time dashboards, application statistics, and recruiter insights.",
    },
    {
      icon: Zap,
      title: "Lightning Fast Screening",
      description:
        "Reduce manual resume review from hours to minutes using automated AI-powered screening workflows.",
    },
    {
      icon: Target,
      title: "Skill Gap Analysis",
      description:
        "Instantly identify missing skills and receive AI recommendations to improve candidate-job compatibility.",
    },
    {
      icon: Trophy,
      title: "Candidate Ranking",
      description:
        "Rank applicants automatically using AI-generated match scores, helping recruiters focus on top talent first.",
    },
  ];

  return (
    <section
      id="features"
      className="py-28 bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="max-w-3xl mx-auto text-center mb-20">

          <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 px-4 py-2 text-sm font-medium">
            Powerful AI Features
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">

            Everything You Need to

            <span className="text-blue-600">
              {" "}Hire Smarter
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400">
            ResumeAI combines artificial intelligence,
            automation, and analytics into a single hiring
            platform designed for modern recruitment teams.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                {/* Gradient Glow */}

                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />

                {/* Icon */}

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">

                  <Icon size={30} />

                </div>

                {/* Title */}

                <h3 className="text-2xl font-semibold mb-4">

                  {feature.title}

                </h3>

                {/* Description */}

                <p className="text-gray-600 dark:text-slate-400 leading-7">

                  {feature.description}

                </p>

                {/* Learn More */}

                <div className="mt-8 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">

                  Learn More →

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}