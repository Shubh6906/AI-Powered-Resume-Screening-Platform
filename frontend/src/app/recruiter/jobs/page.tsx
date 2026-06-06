import DashboardLayout from "../../../components/dashboard/DashboardLayout";

export default function JobsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-4">
        Jobs
      </h1>

      <p className="text-gray-500">
        Manage job postings here.
      </p>
    </DashboardLayout>
  );
}