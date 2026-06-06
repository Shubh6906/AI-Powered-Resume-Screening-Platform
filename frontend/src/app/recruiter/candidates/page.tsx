import DashboardLayout from "../../../components/dashboard/DashboardLayout";

export default function CandidatesPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-4">
        Candidates
      </h1>

      <p className="text-gray-500">
        View and manage candidates.
      </p>
    </DashboardLayout>
  );
}