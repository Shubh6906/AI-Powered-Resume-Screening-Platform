"use client";

import { useState, useEffect } from "react";

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (jobData: any) => void;
  initialData?: any;
}

export default function JobModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}: JobModalProps) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] =
    useState("");

  const [requirements, setRequirements] =
    useState("");

  const [salary, setSalary] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setCompany(initialData.company);
      setLocation(initialData.location);
      setDescription(initialData.description);
      setRequirements(initialData.requirements);
      setSalary(initialData.salary);
    } else {
      setTitle("");
      setCompany("");
      setLocation("");
      setDescription("");
      setRequirements("");
      setSalary("");
    }
  }, [initialData]);

  if (!isOpen) return null;

  function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    onSubmit({
      title,
      company,
      location,
      description,
      requirements,
      salary,
    });

    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6">
          {initialData
            ? "Edit Job"
            : "Create Job"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            placeholder="Title"
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
            className="w-full p-3 border rounded-xl"
          />

          <input
            placeholder="Company"
            value={company}
            onChange={(e) =>
              setCompany(
                e.target.value
              )
            }
            className="w-full p-3 border rounded-xl"
          />

          <input
            placeholder="Location"
            value={location}
            onChange={(e) =>
              setLocation(
                e.target.value
              )
            }
            className="w-full p-3 border rounded-xl"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className="w-full p-3 border rounded-xl"
          />

          <textarea
            placeholder="Requirements"
            value={requirements}
            onChange={(e) =>
              setRequirements(
                e.target.value
              )
            }
            className="w-full p-3 border rounded-xl"
          />

          <input
            placeholder="Salary"
            value={salary}
            onChange={(e) =>
              setSalary(
                e.target.value
              )
            }
            className="w-full p-3 border rounded-xl"
          />

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-3 rounded-xl"
            >
              Save
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex-1 border py-3 rounded-xl"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}