"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 dark:border-slate-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl tracking-tight">
            ResumeAI
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="hover:text-blue-500 transition"
            >
              Features
            </a>

            <a
              href="#"
              className="hover:text-blue-500 transition"
            >
              Pricing
            </a>

            <a
              href="#"
              className="hover:text-blue-500 transition"
            >
              Contact
            </a>

            <ThemeToggle />

            <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg font-medium text-white">
              Login
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 border-t border-gray-200 dark:border-slate-800 pt-4">
            <a
              href="#"
              className="hover:text-blue-500 transition"
            >
              Features
            </a>

            <a
              href="#"
              className="hover:text-blue-500 transition"
            >
              Pricing
            </a>

            <a
              href="#"
              className="hover:text-blue-500 transition"
            >
              Contact
            </a>

            <div>
              <ThemeToggle />
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg font-medium text-white w-full">
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}