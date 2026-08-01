import {
    Briefcase,
    Users,
    BrainCircuit,
    BarChart3,
    UserCheck,
    FileText,
  } from "lucide-react";
  
  export default function DashboardPreview() {
    return (
      <section className="py-28 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Header */}
  
          <div className="max-w-3xl mx-auto text-center mb-20">
  
            <span className="inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 px-4 py-2 text-sm font-medium">
              Product Preview
            </span>
  
            <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
  
              Powerful Dashboards for
  
              <span className="text-blue-600">
                {" "}Recruiters & Candidates
              </span>
  
            </h2>
  
            <p className="mt-6 text-lg text-gray-600 dark:text-slate-400 leading-8">
  
              ResumeAI provides dedicated AI-powered dashboards
              for recruiters and candidates,
              helping both sides of the hiring process.
  
            </p>
  
          </div>
  
          <div className="grid lg:grid-cols-2 gap-10">
  
            {/* Recruiter */}
  
            <div className="rounded-3xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden hover:shadow-2xl transition">
  
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
  
                <h3 className="text-2xl font-semibold">
  
                  Recruiter Dashboard
  
                </h3>
  
                <p className="opacity-80 mt-2">
  
                  Everything needed to hire faster.
  
                </p>
  
              </div>
  
              <div className="p-8 space-y-5">
  
                <Feature
                  icon={<Briefcase size={20} />}
                  title="Manage Jobs"
                />
  
                <Feature
                  icon={<Users size={20} />}
                  title="Manage Candidates"
                />
  
                <Feature
                  icon={<BrainCircuit size={20} />}
                  title="AI Candidate Ranking"
                />
  
                <Feature
                  icon={<BarChart3 size={20} />}
                  title="Hiring Analytics"
                />
  
              </div>
  
            </div>
  
            {/* Candidate */}
  
            <div className="rounded-3xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden hover:shadow-2xl transition">
  
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
  
                <h3 className="text-2xl font-semibold">
  
                  Candidate Dashboard
  
                </h3>
  
                <p className="opacity-80 mt-2">
  
                  Build your career with AI.
  
                </p>
  
              </div>
  
              <div className="p-8 space-y-5">
  
                <Feature
                  icon={<BrainCircuit size={20} />}
                  title="AI Job Recommendations"
                />
  
                <Feature
                  icon={<UserCheck size={20} />}
                  title="Track Applications"
                />
  
                <Feature
                  icon={<FileText size={20} />}
                  title="Resume Management"
                />
  
                <Feature
                  icon={<Briefcase size={20} />}
                  title="Application History"
                />
  
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  function Feature({
    icon,
    title,
  }: {
    icon: React.ReactNode;
    title: string;
  }) {
    return (
      <div className="flex items-center gap-4 rounded-xl bg-gray-50 dark:bg-slate-800 p-4">
  
        <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600">
  
          {icon}
  
        </div>
  
        <span className="font-medium">
  
          {title}
  
        </span>
  
      </div>
    );
  }