const activities = [
    "New candidate applied for Frontend Developer",
    "Resume screened successfully",
    "Candidate shortlisted",
    "New job posted",
    "Interview scheduled",
  ];
  
  export default function RecentActivity() {
    return (
      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          Recent Activity
        </h2>
  
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="border-l-2 border-blue-500 pl-4"
            >
              <p>{activity}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }