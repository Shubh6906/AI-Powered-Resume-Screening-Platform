"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does ResumeAI match candidates with jobs?",
    answer:
      "ResumeAI uses AI-powered resume parsing and skill matching to compare candidate profiles with job requirements. It calculates a match score and highlights matching as well as missing skills.",
  },
  {
    question: "Can recruiters rank candidates automatically?",
    answer:
      "Yes. Recruiters can use the AI Candidate Ranking feature to instantly rank applicants based on resume analysis and job compatibility.",
  },
  {
    question: "What file formats are supported for resumes?",
    answer:
      "Currently ResumeAI supports PDF resumes for AI parsing and analysis.",
  },
  {
    question: "Can candidates receive job recommendations?",
    answer:
      "Yes. Candidates receive AI-powered job recommendations based on the skills extracted from their uploaded resume.",
  },
  {
    question: "Is my resume stored securely?",
    answer:
      "Yes. Uploaded resumes are securely stored and are only accessible to authorized users within the recruitment workflow.",
  },
  {
    question: "Who can use ResumeAI?",
    answer:
      "ResumeAI provides dedicated dashboards for both recruiters and candidates, each with features tailored to their role.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-28 bg-white dark:bg-slate-950"
    >
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 px-4 py-2 text-sm font-medium">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Everything You Need to Know
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-slate-400">
            Find answers to the most common questions
            about ResumeAI.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => {

            const isOpen =
              openIndex === index;

            return (

              <div
                key={faq.question}
                className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900 overflow-hidden"
              >

                <button
                  onClick={() =>
                    setOpenIndex(
                      isOpen
                        ? null
                        : index
                    )
                  }
                  className="w-full flex justify-between items-center p-6 text-left"
                >

                  <span className="font-semibold text-lg">

                    {faq.question}

                  </span>

                  <ChevronDown
                    size={22}
                    className={`transition-transform ${
                      isOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                {isOpen && (

                  <div className="px-6 pb-6">

                    <p className="leading-8 text-gray-600 dark:text-slate-400">

                      {faq.answer}

                    </p>

                  </div>

                )}

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}