export default function Hero() {
    return (
      <section className="container mx-auto px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            AI-Powered Recruitment Solution
          </span>
  
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hire Smarter with
            <span className="text-blue-500"> AI-Powered </span>
            Resume Screening
          </h1>
  
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            Automatically analyze resumes, rank candidates,
            identify top talent, and reduce hiring time with
            advanced AI matching and skill assessment.
          </p>
  
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-lg font-semibold">
              Get Started
            </button>
  
            <button className="border border-slate-700 hover:border-slate-500 transition px-8 py-4 rounded-lg font-semibold">
              Watch Demo
            </button>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h3 className="text-3xl font-bold text-blue-500">95%</h3>
              <p className="text-slate-400 mt-2">
                Screening Accuracy
              </p>
            </div>
  
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h3 className="text-3xl font-bold text-blue-500">10x</h3>
              <p className="text-slate-400 mt-2">
                Faster Hiring Process
              </p>
            </div>
  
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h3 className="text-3xl font-bold text-blue-500">1000+</h3>
              <p className="text-slate-400 mt-2">
                Resumes Processed
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }