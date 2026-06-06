export default function Features() {
  const features = [
    {
      icon: "📄",
      title: "Resume Parsing",
      description:
        "Extract skills, education and experience automatically.",
    },
    {
      icon: "🎯",
      title: "AI Matching",
      description:
        "Match candidates with jobs using semantic analysis.",
    },
    {
      icon: "📊",
      title: "Analytics",
      description:
        "Track recruitment performance with detailed dashboards.",
    },
    {
      icon: "⚡",
      title: "Fast Screening",
      description:
        "Reduce manual resume review time dramatically.",
    },
    {
      icon: "🧠",
      title: "Skill Gap Analysis",
      description:
        "Identify missing skills against job requirements.",
    },
    {
      icon: "🏆",
      title: "Candidate Ranking",
      description:
        "Rank applicants automatically based on fit score.",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-4">
        Powerful Features
      </h2>

      <p className="text-gray-600 dark:text-slate-400 text-center mb-16">
        Everything recruiters need to hire better and faster.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-gray-100 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-8 hover:border-blue-500 transition"
          >
            <div className="text-4xl mb-4">
              {feature.icon}
            </div>

            <h3 className="text-xl font-semibold mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-600 dark:text-slate-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}