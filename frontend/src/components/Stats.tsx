export default function Stats() {
    const stats = [
      { value: "10,000+", label: "Resumes Processed" },
      { value: "95%", label: "Matching Accuracy" },
      { value: "500+", label: "Recruiters" },
      { value: "50+", label: "Companies" },
    ];
  
    return (
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-100 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-6 text-center"
            >
              <h3 className="text-3xl font-bold text-blue-500">
                {stat.value}
              </h3>
  
              <p className="text-gray-600 dark:text-slate-400 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }