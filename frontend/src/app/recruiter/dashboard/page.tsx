import DashboardLayout from "../../../components/dashboard/DashboardLayout";
import StatCard from "../../../components/dashboard/StatCard";

export default function RecruiterDashboard() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Recruiter Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <StatCard
          title="Total Jobs"
          value="24"
        />

        <StatCard
          title="Candidates"
          value="248"
        />

        <StatCard
          title="Shortlisted"
          value="63"
        />

        <StatCard
          title="Avg Match"
          value="91%"
        />
      </div>
    </DashboardLayout>
  );
}