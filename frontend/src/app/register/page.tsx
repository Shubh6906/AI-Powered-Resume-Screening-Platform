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
} from "lucide-react";

import AuthCard from "../../components/AuthCard";
import AuthShowcase from "../../components/AuthShowcase";

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
    <main className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:block bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        <AuthShowcase />
      </div>

      <div className="flex items-center justify-center px-6 py-12 bg-gray-50 dark:bg-slate-950">
        <AuthCard
          title="Create Account"
          subtitle={
            role === "candidate"
              ? "Find your next opportunity"
              : "Hire smarter with AI"
          }
        >
          <form
            className="space-y-5"
            onSubmit={handleSubmit}
          >
            {/* Role Selection */}
            <div>
              <label className="block mb-3 font-medium">
                Select Role
              </label>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setRole(
                      "candidate"
                    )
                  }
                  className={`p-4 rounded-xl border transition text-left ${
                    role ===
                    "candidate"
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                      : "border-gray-300 dark:border-slate-700"
                  }`}
                >
                  <User
                    size={24}
                    className="mb-2 text-blue-500"
                  />

                  <h3 className="font-semibold">
                    Candidate
                  </h3>

                  <p className="text-sm text-gray-500">
                    Apply for jobs
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setRole(
                      "recruiter"
                    )
                  }
                  className={`p-4 rounded-xl border transition text-left ${
                    role ===
                    "recruiter"
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                      : "border-gray-300 dark:border-slate-700"
                  }`}
                >
                  <Building2
                    size={24}
                    className="mb-2 text-blue-500"
                  />

                  <h3 className="font-semibold">
                    Recruiter
                  </h3>

                  <p className="text-sm text-gray-500">
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
                  className="w-full pl-10 p-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full pl-10 p-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  placeholder="Create password"
                  className="w-full pl-10 p-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
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
                  type="password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  placeholder="Confirm password"
                  className="w-full pl-10 p-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
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
                    className="w-full pl-10 p-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition"
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>

            <p className="text-xs text-center text-gray-500">
              By creating an account,
              you agree to our{" "}
              <Link
                href="/terms"
                className="text-blue-600 hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600 dark:text-slate-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-600 font-medium hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </AuthCard>
      </div>
    </main>
  );
}