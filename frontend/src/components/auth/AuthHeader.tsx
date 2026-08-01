"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import ThemeToggle from "../ThemeToggle";

export default function AuthHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg hover:text-blue-600 transition"
        >
          <ArrowLeft size={18} />

          <span>
            Resume
            <span className="text-blue-600">
              AI
            </span>
          </span>

        </Link>

        <ThemeToggle />

      </div>

    </header>
  );
}