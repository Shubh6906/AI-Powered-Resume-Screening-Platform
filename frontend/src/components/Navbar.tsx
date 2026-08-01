"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] =
    useState(false);

  const [isScrolled, setIsScrolled] =
    useState(false);

  const closeMenu = () =>
    setIsOpen(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(
        window.scrollY > 20
      );
    }

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-gray-200/70 dark:border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "h-16"
            : "h-20"
        }`}
      >

        {/* Logo */}

        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold tracking-tight"
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

          <a
            href="#testimonials"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
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

        {/* Mobile */}

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

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-h-96 border-t border-gray-200 dark:border-slate-800"
            : "max-h-0"
        }`}
      >

        <div className="bg-white dark:bg-slate-950 px-6 py-6 flex flex-col gap-5">

          <a
            href="#features"
            onClick={closeMenu}
            className="hover:text-blue-600 transition"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            onClick={closeMenu}
            className="hover:text-blue-600 transition"
          >
            How It Works
          </a>

          <a
            href="#testimonials"
            onClick={closeMenu}
            className="hover:text-blue-600 transition"
          >
            Testimonials
          </a>

          <a
            href="#faq"
            onClick={closeMenu}
            className="hover:text-blue-600 transition"
          >
            FAQ
          </a>

          <Link
            href="/login"
            onClick={closeMenu}
            className="border border-gray-300 dark:border-slate-700 rounded-xl py-3 text-center hover:bg-gray-100 dark:hover:bg-slate-800 transition"
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

    </nav>
  );
}