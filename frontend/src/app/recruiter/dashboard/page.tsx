import DashboardLayout from "../../../components/dashboard/DashboardLayout";
import StatCard from "../../../components/dashboard/StatCard";
import HiringChart from "../../../components/dashboard/HiringChart";
import TopCandidates from "../../../components/dashboard/TopCandidates";
import RecentActivity from "../../../components/dashboard/RecentActivity";

export default function RecruiterDashboard() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Recruiter Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back, Admin.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Jobs"
          value="24"
          change="+8% this month"
        />

        <StatCard
          title="Candidates"
          value="248"
          change="+12% this month"
        />

        <StatCard
          title="Shortlisted"
          value="63"
          change="+5% this month"
        />

        <StatCard
          title="Avg Match"
          value="91%"
          change="+3% this month"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <HiringChart />
        </div>

        <TopCandidates />
      </div>

      <RecentActivity />
    </DashboardLayout>
  );
}