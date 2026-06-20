"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "../../../components/dashboard/DashboardLayout";
import JobModal from "../../../components/dashboard/JobModal";

import {
  Plus,
  Search,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
} from "../../../hooks/useJobs";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string;
  salary: string;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] =
    useState("");

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [editingJob, setEditingJob] =
    useState<Job | null>(null);

  async function fetchJobs() {
    try {
      const data = await getJobs();

      setJobs(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  async function handleDelete(
    id: number
  ) {
    const confirmed =
      window.confirm(
        "Delete this job?"
      );

    if (!confirmed) return;

    try {
      await deleteJob(id);

      await fetchJobs();

      alert(
        "Job deleted successfully"
      );
    } catch (error) {
      console.error(error);

      alert(
        "Failed to delete job"
      );
    }
  }

  async function handleCreate(
    jobData: any
  ) {
    try {
      await createJob(jobData);

      await fetchJobs();

      alert(
        "Job created successfully"
      );
    } catch (error) {
      console.error(error);

      alert(
        "Failed to create job"
      );
    }
  }

  async function handleEdit(
    jobData: any
  ) {
    if (!editingJob) return;

    try {
      await updateJob(
        editingJob.id,
        jobData
      );

      await fetchJobs();

      setEditingJob(null);

      alert(
        "Job updated successfully"
      );
    } catch (error) {
      console.error(error);

      alert(
        "Failed to update job"
      );
    }
  }

  const filteredJobs = jobs.filter(
    (job) =>
      job.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
  );

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold">
            Jobs
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all job postings
          </p>
        </div>

        <button
          onClick={() => {
            setEditingJob(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
        >
          <Plus size={18} />
          Create Job
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-4 mb-6">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            placeholder="Search jobs..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full pl-10 py-2 pr-4 border border-gray-300 dark:border-slate-700 rounded-xl bg-transparent"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-slate-800">
              <th className="text-left p-4">
                Position
              </th>

              <th className="text-left p-4">
                Company
              </th>

              <th className="text-left p-4">
                Location
              </th>

              <th className="text-left p-4">
                Salary
              </th>

              <th className="text-left p-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredJobs.map(
              (job) => (
                <tr
                  key={job.id}
                  className="border-b border-gray-200 dark:border-slate-800"
                >
                  <td className="p-4">
                    {job.title}
                  </td>

                  <td className="p-4">
                    {job.company}
                  </td>

                  <td className="p-4">
                    {job.location}
                  </td>

                  <td className="p-4">
                    {job.salary}
                  </td>

                  <td className="p-4">
                    <div className="flex gap-4">
                      <Eye
                        size={18}
                        className="cursor-pointer"
                      />

                      <Pencil
                        size={18}
                        className="cursor-pointer"
                        onClick={() => {
                          setEditingJob(
                            job
                          );

                          setIsModalOpen(
                            true
                          );
                        }}
                      />

                      <Trash2
                        size={18}
                        className="cursor-pointer text-red-500"
                        onClick={() =>
                          handleDelete(
                            job.id
                          )
                        }
                      />
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      <JobModal
        isOpen={isModalOpen}
        onClose={() =>
          setIsModalOpen(false)
        }
        initialData={editingJob}
        onSubmit={
          editingJob
            ? handleEdit
            : handleCreate
        }
      />
    </DashboardLayout>
  );
}