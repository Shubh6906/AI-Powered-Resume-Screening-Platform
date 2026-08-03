"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Menu,
  Search,
  Bell,
  LogOut,
  Home,
  UserCircle,
} from "lucide-react";

import ThemeToggle from "../ThemeToggle";
import { removeToken } from "../../lib/auth";

interface TopbarProps {
  role?: "recruiter" | "candidate";
}

export default function Topbar({
  role = "recruiter",
}: TopbarProps) {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [showProfile, setShowProfile] =
    useState(false);

  function handleLogout() {
    removeToken();
    router.push("/login");
  }

  return (
    <header className="sticky top-0 z-40 h-20 border-b border-gray-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl">

      <div className="h-full px-6 flex items-center justify-between">

        {/* Left */}

        <div className="flex items-center gap-5">

          {/* Mobile Menu (Drawer will be added next) */}

          <button className="lg:hidden rounded-xl p-2 hover:bg-gray-100 dark:hover:bg-slate-800 transition">
            <Menu size={22} />
          </button>

          {/* Home */}

          <Link
            href="/"
            className="hidden md:flex items-center gap-2 text-gray-500 hover:text-blue-600 transition"
          >
            <Home size={18} />
            <span className="font-medium">
              Home
            </span>
          </Link>

          {/* Search */}

          <div className="relative">

            <Search
              size={18}
              className="absolute left-3 top-3.5 text-gray-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search jobs, candidates..."
              className="w-72 lg:w-96 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          <ThemeToggle />

          <button className="relative rounded-xl p-2 hover:bg-gray-100 dark:hover:bg-slate-800 transition">

            <Bell size={20} />

            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
              3
            </span>

          </button>

          {/* Profile */}

          <div className="relative">

            <button
              onClick={() =>
                setShowProfile(
                  !showProfile
                )
              }
              className="flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            >

              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">

                A

              </div>

              <div className="hidden md:block text-left">

                <h3 className="font-semibold leading-none">
                  Admin
                </h3>

                <p className="text-sm text-gray-500 mt-1">

                  {role === "recruiter"
                    ? "Recruiter"
                    : "Candidate"}

                </p>

              </div>

            </button>

            {showProfile && (

              <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">

                <Link
                  href="/"
                  className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 dark:hover:bg-slate-800"
                >
                  <Home size={18} />
                  Home
                </Link>

                <button
                  className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-100 dark:hover:bg-slate-800"
                >
                  <UserCircle size={18} />
                  My Profile
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-5 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
                >
                  <LogOut size={18} />
                  Logout
                </button>

              </div>

            )}

          </div>

        </div>

      </div>

    </header>
  );
}