"use client";

import { Search, X } from "lucide-react";

interface CandidateFiltersProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  statusFilter: string;
  setStatusFilter: React.Dispatch<
    React.SetStateAction<string>
  >;
}

export default function CandidateFilters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
}: CandidateFiltersProps) {
  function clearFilters() {
    setSearch("");
    setStatusFilter("all");
  }

  return (
    <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-5 mb-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-3 top-3.5 text-gray-400"
          />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search candidates..."
            className="w-full rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
          className="rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent px-4 py-3"
        >
          <option value="all">
            All Status
          </option>
          <option value="Applied">
            Applied
          </option>
          <option value="Shortlisted">
            Shortlisted
          </option>
          <option value="Rejected">
            Rejected
          </option>
          <option value="Interview">
            Interview
          </option>
          <option value="Hired">
            Hired
          </option>
        </select>

        <button
          type="button"
          onClick={clearFilters}
          className="inline-flex items-center gap-2 rounded-xl border border-gray-300 dark:border-slate-700 px-5 py-3 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
        >
          <X size={18} />
          Clear
        </button>
      </div>
    </div>
  );
}