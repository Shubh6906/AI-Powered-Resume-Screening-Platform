import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-20 border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 flex items-center justify-between">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="pl-10 py-2 pr-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent"
        />
      </div>

      <div className="flex items-center gap-4">
        <Bell size={20} />

        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
          A
        </div>
      </div>
    </header>
  );
}