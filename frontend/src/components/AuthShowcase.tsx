export default function AuthShowcase() {
    return (
      <div className="hidden lg:flex flex-col justify-center p-16 text-white">
        <div>
          <span className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
            AI Recruitment Platform
          </span>
  
          <h1 className="text-6xl font-bold mb-6">
            Hire Faster.
            <br />
            Hire Smarter.
          </h1>
  
          <p className="text-xl text-blue-100 mb-12">
            Automate resume screening, candidate ranking
            and skill analysis using AI.
          </p>
        </div>
  
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
            <h2 className="text-3xl font-bold">
              10K+
            </h2>
  
            <p>Resumes Processed</p>
          </div>
  
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
            <h2 className="text-3xl font-bold">
              95%
            </h2>
  
            <p>Matching Accuracy</p>
          </div>
  
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
            <h2 className="text-3xl font-bold">
              500+
            </h2>
  
            <p>Recruiters</p>
          </div>
  
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
            <h2 className="text-3xl font-bold">
              50+
            </h2>
  
            <p>Companies</p>
          </div>
        </div>
      </div>
    );
  }