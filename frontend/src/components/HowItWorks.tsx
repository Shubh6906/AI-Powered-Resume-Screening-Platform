export default function HowItWorks() {
    const steps = [
      "Upload Resume",
      "AI Analysis",
      "Skill Extraction",
      "Candidate Ranking",
    ];
  
    return (
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          How It Works
        </h2>
  
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step}
              className="bg-gray-100 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-8 text-center"
            >
              <div className="text-3xl font-bold text-blue-500 mb-4">
                {index + 1}
              </div>
  
              <h3 className="font-semibold">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </section>
    );
  }