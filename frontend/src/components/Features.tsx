export default function Features() {
    const features = [
      "AI Resume Parsing",
      "Candidate Ranking",
      "Skill Gap Analysis",
      "Resume Scoring",
      "Job Matching",
      "Recruiter Analytics",
    ];
  
    return (
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Features
        </h2>
  
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-slate-900 p-6 rounded-xl"
            >
              <h3 className="font-semibold">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </section>
    );
  }