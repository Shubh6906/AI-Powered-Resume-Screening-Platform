import {
  Upload,
  BrainCircuit,
  ScanSearch,
  Trophy,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Resume",
      description:
        "Candidates securely upload their resumes in PDF format to begin the AI hiring process.",
    },
    {
      icon: BrainCircuit,
      title: "AI Analysis",
      description:
        "ResumeAI analyzes resumes using intelligent parsing and semantic skill recognition.",
    },
    {
      icon: ScanSearch,
      title: "Skill Matching",
      description:
        "The platform compares extracted skills with job requirements and calculates an AI match score.",
    },
    {
      icon: Trophy,
      title: "Smart Ranking",
      description:
        "Recruiters instantly receive AI-ranked candidates based on compatibility and hiring potential.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-28 bg-gray-50 dark:bg-slate-900/40"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}

        <div className="max-w-3xl mx-auto text-center mb-24">

          <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 px-4 py-2 text-sm font-medium">
            AI Recruitment Workflow
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">

            Hiring Made

            <span className="text-blue-600">
              {" "}Simple
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400">
            ResumeAI automates every stage of the recruitment
            workflow—from resume upload to intelligent candidate
            ranking—helping recruiters hire faster and smarter.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Connection Line */}

          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          <div className="grid lg:grid-cols-4 gap-10">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative group"
                >

                  {/* Step Number */}

                  <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl relative z-10">

                    <Icon size={34} />

                  </div>

                  {/* Card */}

                  <div className="rounded-3xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                    <div className="text-sm font-semibold text-blue-600 mb-3">

                      STEP {index + 1}

                    </div>

                    <h3 className="text-2xl font-semibold mb-4">

                      {step.title}

                    </h3>

                    <p className="text-gray-600 dark:text-slate-400 leading-7">

                      {step.description}

                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}