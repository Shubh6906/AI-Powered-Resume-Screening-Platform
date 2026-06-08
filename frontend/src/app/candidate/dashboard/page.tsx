import CandidateLayout from "../../../components/dashboard/CandidateLayout";
import StatCard from "../../../components/dashboard/StatCard";

export default function CandidateDashboard() {
  return (
    <CandidateLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Candidate Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Track your job applications.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <StatCard
          title="Applications"
          value="18"
          change="+4 this month"
        />

        <StatCard
          title="Interviews"
          value="5"
          change="+2 this month"
        />

        <StatCard
          title="Shortlisted"
          value="7"
          change="+3 this month"
        />

        <StatCard
          title="Resume Score"
          value="92%"
          change="+8%"
        />
      </div>
    </CandidateLayout>
  );
}