import Link from "next/link";
import {
  Globe,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand */}

          <div className="lg:col-span-2">

            <Link
              href="/"
              className="text-3xl font-bold"
            >
              Resume
              <span className="text-blue-600">
                AI
              </span>
            </Link>

            <p className="mt-6 text-gray-600 dark:text-slate-400 leading-7 max-w-md">
              AI-powered recruitment platform that helps
              recruiters hire smarter and candidates
              discover better career opportunities through
              intelligent resume analysis and AI matching.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-xl border border-gray-200 dark:border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <Globe size={20} />
              </a>

              <a
                href="mailto:contact@resumeai.com"
                className="w-11 h-11 rounded-xl border border-gray-200 dark:border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <Mail size={20} />
              </a>

              <a
                href="tel:+910000000000"
                className="w-11 h-11 rounded-xl border border-gray-200 dark:border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <Phone size={20} />
              </a>

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="font-semibold text-lg mb-5">
              Product
            </h3>

            <ul className="space-y-4">

              <li>
                <a
                  href="#features"
                  className="text-gray-600 dark:text-slate-400 hover:text-blue-600 transition"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-600 dark:text-slate-400 hover:text-blue-600 transition"
                >
                  How It Works
                </a>
              </li>

              <li>
                <Link
                  href="/login"
                  className="text-gray-600 dark:text-slate-400 hover:text-blue-600 transition"
                >
                  Live Demo
                </Link>
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="font-semibold text-lg mb-5">
              Resources
            </h3>

            <ul className="space-y-4">

              <li>
                <a
                  href="#faq"
                  className="text-gray-600 dark:text-slate-400 hover:text-blue-600 transition"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="text-gray-600 dark:text-slate-400 hover:text-blue-600 transition"
                >
                  Testimonials
                </a>
              </li>

              <li>
                <Link
                  href="/register"
                  className="text-gray-600 dark:text-slate-400 hover:text-blue-600 transition"
                >
                  Get Started
                </Link>
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-semibold text-lg mb-5">
              Company
            </h3>

            <ul className="space-y-4">

              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-slate-400 hover:text-blue-600 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-slate-400 hover:text-blue-600 transition"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-slate-400 hover:text-blue-600 transition"
                >
                  Privacy Policy
                </a>
              </li>

            </ul>

          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 ResumeAI. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Built with ❤️ using Next.js, FastAPI & AI
          </p>

        </div>

      </div>
    </footer>
  );
}