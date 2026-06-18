"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";

import AuthCard from "../../components/AuthCard";
import AuthShowcase from "../../components/AuthShowcase";

import { loginUser } from "../../hooks/useAuth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await loginUser(
        email,
        password
      );

      if (
        data.role === "recruiter"
      ) {
        router.push(
          "/recruiter/dashboard"
        );
      } else {
        router.push(
          "/candidate/dashboard"
        );
      }
    } catch (error) {
      console.error(error);

      alert(
        "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side */}
      <div className="hidden lg:block bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        <AuthShowcase />
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center px-6 py-12 bg-gray-50 dark:bg-slate-950">
        <AuthCard
          title="Welcome Back"
          subtitle="Sign in to continue your hiring journey"
        >
          <form
            className="space-y-5"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-4 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  className="w-full pl-10 p-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-4 text-gray-400"
                />

                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  className="w-full pl-10 p-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="text-blue-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition"
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </button>

            <div className="relative py-2">
              <div className="border-t border-gray-300 dark:border-slate-700" />

              <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 px-3 text-sm text-gray-500">
                OR
              </span>
            </div>

            <button
              type="button"
              className="w-full border border-gray-300 dark:border-slate-700 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            >
              Continue with Google
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600 dark:text-slate-400">
              Don't have an
              account?{" "}
              <Link
                href="/register"
                className="text-blue-600 font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </AuthCard>
      </div>
    </main>
  );
}