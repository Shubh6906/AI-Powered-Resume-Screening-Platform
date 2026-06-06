const candidates = [
    {
      name: "John Doe",
      role: "Frontend Developer",
      score: "94%",
    },
    {
      name: "Sarah Wilson",
      role: "Backend Developer",
      score: "92%",
    },
    {
      name: "Alex Johnson",
      role: "Full Stack Developer",
      score: "89%",
    },
    {
      name: "Emily Davis",
      role: "UI/UX Designer",
      score: "87%",
    },
  ];
  
  export default function TopCandidates() {
    return (
      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          Top Candidates
        </h2>
  
        <div className="space-y-4">
          {candidates.map((candidate) => (
            <div
              key={candidate.name}
              className="flex justify-between items-center"
            >
              <div>
                <h3 className="font-medium">
                  {candidate.name}
                </h3>
  
                <p className="text-sm text-gray-500">
                  {candidate.role}
                </p>
              </div>
  
              <span className="font-bold text-blue-600">
                {candidate.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }