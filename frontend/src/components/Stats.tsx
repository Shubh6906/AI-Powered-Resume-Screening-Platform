import {
  FileText,
  Target,
  Users,
  Building2,
} from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: FileText,
      value: "10K+",
      label: "Resumes Processed",
      description:
        "AI-powered resume parsing and screening.",
    },
    {
      icon: Target,
      value: "98%",
      label: "Matching Accuracy",
      description:
        "Precise candidate-job matching using AI.",
    },
    {
      icon: Users,
      value: "500+",
      label: "Recruiters",
      description:
        "Professionals hiring with ResumeAI.",
    },
    {
      icon: Building2,
      value: "50+",
      label: "Companies",
      description:
        "Organizations trusting ResumeAI.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-900/40">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 px-4 py-2 text-sm font-medium">
            Platform Statistics
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            Trusted by Recruiters &
            <span className="text-blue-600">
              {" "}Growing Teams
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-slate-400">
            ResumeAI helps organizations streamline hiring,
            identify top talent faster, and make smarter
            recruitment decisions using artificial intelligence.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group rounded-3xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">

                  <Icon
                    className="text-blue-600"
                    size={28}
                  />

                </div>

                <h3 className="text-5xl font-bold text-blue-600">
                  {stat.value}
                </h3>

                <h4 className="mt-4 text-xl font-semibold">
                  {stat.label}
                </h4>

                <p className="mt-3 text-gray-600 dark:text-slate-400 leading-7">
                  {stat.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}