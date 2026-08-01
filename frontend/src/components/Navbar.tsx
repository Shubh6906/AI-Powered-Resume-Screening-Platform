"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-gray-200/70 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          Resume
          <span className="text-blue-600">
            AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">

          <a
            href="#features"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            How It Works
          </a>

          <a href="#testimonials">
            Testimonials
          </a>

          <a
            href="#faq"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            FAQ
          </a>

          <ThemeToggle />

          <Link
            href="/login"
            className="px-5 py-2 rounded-xl border border-gray-300 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition shadow-lg shadow-blue-600/20"
          >
            Get Started
          </Link>

        </div>

        {/* Mobile Right */}
        <div className="flex items-center gap-3 lg:hidden">

          <ThemeToggle />

          <button
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      {isOpen && (

        <div className="lg:hidden border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950">

          <div className="px-6 py-6 flex flex-col gap-5">

            <a
              href="#features"
              onClick={closeMenu}
              className="hover:text-blue-600"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              onClick={closeMenu}
              className="hover:text-blue-600"
            >
              How It Works
            </a>

            <a
              href="#pricing"
              onClick={closeMenu}
              className="hover:text-blue-600"
            >
              Pricing
            </a>

            <a
              href="#faq"
              onClick={closeMenu}
              className="hover:text-blue-600"
            >
              FAQ
            </a>

            <Link
              href="/login"
              onClick={closeMenu}
              className="border border-gray-300 dark:border-slate-700 rounded-xl py-3 text-center"
            >
              Login
            </Link>

            <Link
              href="/register"
              onClick={closeMenu}
              className="bg-blue-600 hover:bg-blue-700 rounded-xl py-3 text-center text-white font-medium transition"
            >
              Get Started
            </Link>

          </div>

        </div>

      )}
    </nav>
  );
}