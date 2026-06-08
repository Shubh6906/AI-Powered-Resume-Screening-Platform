import CandidateLayout from "../../../components/dashboard/CandidateLayout";

export default function ProfilePage() {
  return (
    <CandidateLayout>
      <h1 className="text-4xl font-bold mb-4">
        Profile
      </h1>

      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 max-w-3xl">
        <div className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              value="John Doe"
              readOnly
              className="w-full p-3 border border-gray-300 dark:border-slate-700 rounded-xl bg-transparent"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              value="john@example.com"
              readOnly
              className="w-full p-3 border border-gray-300 dark:border-slate-700 rounded-xl bg-transparent"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Skills
            </label>

            <textarea
              rows={4}
              readOnly
              className="w-full p-3 border border-gray-300 dark:border-slate-700 rounded-xl bg-transparent"
              value="React, Next.js, TypeScript, Tailwind CSS"
            />
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
}