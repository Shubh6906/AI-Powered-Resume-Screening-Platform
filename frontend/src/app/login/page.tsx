"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  Sparkles,
} from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout";
import { loginUser } from "../../hooks/useAuth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

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
    <AuthLayout>

      <div className="text-center mb-8">

        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 px-4 py-2 text-sm font-medium mb-5">

          <Sparkles size={16} />

          ResumeAI Secure Login

        </div>

        <h1 className="text-4xl font-bold">
          Welcome Back
        </h1>

        <p className="mt-3 text-gray-600 dark:text-slate-400">
          Sign in to continue your hiring journey.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Email */}

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
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />

          </div>

        </div>

        {/* Password */}

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
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="absolute right-3 top-3 text-gray-400 hover:text-blue-600 transition"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

        </div>

        {/* Remember */}

        <div className="flex justify-between items-center text-sm">

          <label className="flex items-center gap-2">

            <input
              type="checkbox"
              className="rounded"
            />

            Remember me

          </label>

          <button
            type="button"
            className="text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>

        </div>

        {/* Login */}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2"
        >

          {loading && (
            <Loader2
              size={18}
              className="animate-spin"
            />
          )}

          {loading
            ? "Logging in..."
            : "Login"}

        </button>

        {/* Divider */}

        <div className="relative py-2">

          <div className="border-t border-gray-300 dark:border-slate-700" />

          <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 px-3 text-sm text-gray-500">

            OR

          </span>

        </div>

        {/* Google */}

        <button
          type="button"
          className="w-full border border-gray-300 dark:border-slate-700 py-3 rounded-xl font-medium hover:bg-gray-100 dark:hover:bg-slate-800 transition"
        >
          Continue with Google
        </button>

      </form>

      <div className="mt-8 text-center text-gray-600 dark:text-slate-400">

        Don't have an account?{" "}

        <Link
          href="/register"
          className="text-blue-600 font-semibold hover:underline"
        >
          Sign Up
        </Link>

      </div>

    </AuthLayout>
  );
}