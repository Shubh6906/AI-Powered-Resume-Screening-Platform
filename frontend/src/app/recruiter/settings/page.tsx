import DashboardLayout from "../../../components/dashboard/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-4">
        Settings
      </h1>

      <p className="text-gray-500">
        Account and platform settings.
      </p>
    </DashboardLayout>
  );
}