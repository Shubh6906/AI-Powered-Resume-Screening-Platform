import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "HR Manager",
    company: "TechNova",
    initials: "SJ",
    review:
      "ResumeAI reduced our resume screening time dramatically. The AI ranking consistently surfaced our strongest candidates first.",
  },
  {
    name: "Michael Chen",
    role: "Talent Acquisition Lead",
    company: "CloudSphere",
    initials: "MC",
    review:
      "The AI matching engine is incredibly useful. It helps our recruiters focus on quality candidates instead of manually reviewing hundreds of resumes.",
  },
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "Candidate",
    initials: "PS",
    review:
      "The AI job recommendations were surprisingly accurate. I quickly found roles matching my skills and experience.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28 bg-gray-50 dark:bg-slate-900/40"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mx-auto text-center mb-20">

          <span className="inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 px-4 py-2 text-sm font-medium">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">

            Trusted by

            <span className="text-blue-600">
              {" "}Recruiters & Candidates
            </span>

          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-slate-400">
            Hear what professionals say about using ResumeAI.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((person) => (

            <div
              key={person.name}
              className="rounded-3xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition"
            >

              <div className="flex gap-1 text-yellow-500 mb-6">

                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="currentColor"
                  />
                ))}

              </div>

              <p className="leading-8 text-gray-600 dark:text-slate-400">

                "{person.review}"

              </p>

              <div className="flex items-center gap-4 mt-8">

                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

                  {person.initials}

                </div>

                <div>

                  <h3 className="font-semibold">

                    {person.name}

                  </h3>

                  <p className="text-sm text-gray-500">

                    {person.role}

                    {" • "}

                    {person.company}

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}