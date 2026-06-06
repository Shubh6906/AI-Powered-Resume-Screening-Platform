export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          AI-Powered Resume Screening Platform
        </h1>

        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
          Automate resume screening, rank candidates intelligently,
          and help recruiters identify top talent faster using AI.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 px-6 py-3 rounded-lg font-semibold">
            Get Started
          </button>

          <button className="border border-slate-600 px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}