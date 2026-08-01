"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  Mail,
  Lock,
  User,
  Briefcase,
  Building2,
  Eye,
  EyeOff,
  Loader2,
  Sparkles,
} from "lucide-react";

import AuthLayout from "../../components/auth/AuthLayout";

import { registerUser } from "../../hooks/useAuth";

export default function RegisterPage() {
  const router = useRouter();

  const [role, setRole] =
    useState("candidate");

  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const [companyName, setCompanyName] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (
      password !== confirmPassword
    ) {
      alert(
        "Passwords do not match"
      );
      return;
    }

    try {
      setLoading(true);

      await registerUser(
        fullName,
        email,
        password,
        role
      );

      alert(
        "Account created successfully"
      );

      router.push("/login");
    } catch (error) {
      console.error(error);

      alert(
        "Registration failed"
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

          Join ResumeAI

        </div>

        <h1 className="text-4xl font-bold">
          Create Account
        </h1>

        <p className="mt-3 text-gray-600 dark:text-slate-400">
          {role === "candidate"
            ? "Start your journey towards your next opportunity."
            : "Hire smarter with AI-powered recruitment."}
        </p>

      </div>

      <form
        className="space-y-5"
        onSubmit={handleSubmit}
      >

        {/* Role */}

        <div>

          <label className="block mb-3 font-medium">
            Select Role
          </label>

          <div className="grid grid-cols-2 gap-4">

            <button
              type="button"
              onClick={() =>
                setRole("candidate")
              }
              className={`rounded-2xl border p-5 transition text-left ${role === "candidate"
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-950/40"
                  : "border-gray-300 dark:border-slate-700"
                }`}
            >

              <User
                size={28}
                className="text-blue-600 mb-3"
              />

              <h3 className="font-semibold">
                Candidate
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Apply for jobs
              </p>

            </button>

            <button
              type="button"
              onClick={() =>
                setRole("recruiter")
              }
              className={`rounded-2xl border p-5 transition text-left ${role === "recruiter"
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-950/40"
                  : "border-gray-300 dark:border-slate-700"
                }`}
            >

              <Building2
                size={28}
                className="text-blue-600 mb-3"
              />

              <h3 className="font-semibold">
                Recruiter
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Hire talent
              </p>

            </button>

          </div>

        </div>

        {/* Full Name */}

        <div>

          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <div className="relative">

            <User
              size={18}
              className="absolute left-3 top-4 text-gray-400"
            />

            <input
              type="text"
              value={fullName}
              onChange={(e) =>
                setFullName(
                  e.target.value
                )
              }
              placeholder="John Doe"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition"
            />

          </div>

        </div>

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
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              placeholder="you@example.com"
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition"
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
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              placeholder="Create password"
              required
              className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition"
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

        {/* Confirm Password */}

        <div>

          <label className="block mb-2 font-medium">
            Confirm Password
          </label>

          <div className="relative">

            <Lock
              size={18}
              className="absolute left-3 top-4 text-gray-400"
            />

            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              placeholder="Confirm password"
              required
              className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute right-3 top-3 text-gray-400 hover:text-blue-600 transition"
            >
              {showConfirmPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

        </div>

        {/* Company */}

        {role === "recruiter" && (

          <div>

            <label className="block mb-2 font-medium">
              Company Name
            </label>

            <div className="relative">

              <Briefcase
                size={18}
                className="absolute left-3 top-4 text-gray-400"
              />

              <input
                type="text"
                value={companyName}
                onChange={(e) =>
                  setCompanyName(
                    e.target.value
                  )
                }
                placeholder="Acme Inc."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition"
              />

            </div>

          </div>

        )}

        {/* Create Account */}

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
            ? "Creating Account..."
            : "Create Account"}

        </button>

        {/* Terms */}

        <p className="text-xs leading-6 text-center text-gray-500">

          By creating an account you agree to our{" "}

          <Link
            href="/terms"
            className="text-blue-600 hover:underline"
          >
            Terms of Service
          </Link>

          {" "}and{" "}

          <Link
            href="/privacy"
            className="text-blue-600 hover:underline"
          >
            Privacy Policy
          </Link>

          .

        </p>

      </form>

      <div className="mt-8 text-center text-gray-600 dark:text-slate-400">

        Already have an account?{" "}

        <Link
          href="/login"
          className="text-blue-600 font-semibold hover:underline"
        >
          Sign In
        </Link>

      </div>

    </AuthLayout>
  );
}