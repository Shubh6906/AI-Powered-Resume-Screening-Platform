"use client";

import { Bell, Search, Menu, LogOut } from "lucide-react";
import { removeToken } from "../../lib/auth";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const router = useRouter();

  function handleLogout() {
    removeToken();

    router.push("/login");
  }

  return (
    <header className="h-20 border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="md:hidden">
          <Menu size={22} />
        </button>

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
      </div>

      <div className="flex items-center gap-6">
        <Bell
          size={20}
          className="cursor-pointer"
        />

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
            A
          </div>

          <div className="hidden md:block">
            <h3 className="font-semibold">
              Admin
            </h3>

            <p className="text-sm text-gray-500">
              Recruiter
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-500 hover:text-red-600"
        >
          <LogOut size={20} />

          <span className="hidden md:block">
            Logout
          </span>
        </button>
      </div>
    </header>
  );
}