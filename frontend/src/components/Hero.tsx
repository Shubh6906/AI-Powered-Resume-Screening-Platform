export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-24 text-center">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
          AI-Powered Recruitment Solution
        </span>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Hire Smarter with
          <span className="text-blue-500"> AI-Powered </span>
          Resume Screening
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto">
          Automatically analyze resumes, rank candidates,
          identify top talent, and reduce hiring time with
          advanced AI matching and skill assessment.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white transition px-8 py-4 rounded-lg font-semibold">
            Get Started
          </button>

          <button className="border border-gray-300 dark:border-slate-700 hover:border-slate-500 transition px-8 py-4 rounded-lg font-semibold">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}