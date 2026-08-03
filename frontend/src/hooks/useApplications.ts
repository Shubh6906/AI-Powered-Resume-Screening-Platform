import api from "../lib/api";

export interface Application {
  application_id: number;
  candidate_id: number;

  full_name: string;
  email: string;

  job_id: number;
  job_title: string;
  company: string;

  status: string;

  resume_uploaded: boolean;

  ai_match_score: number;

  recruiter_notes?: string;

  created_at: string;
}

/* ===========================
   Recruiter APIs
=========================== */

export async function getApplications() {
  const response = await api.get(
    "/applications"
  );

  return response.data as Application[];
}

export async function getJobApplications(
  jobId: number
) {
  const response = await api.get(
    `/applications/job/${jobId}`
  );

  return response.data as Application[];
}

export async function updateApplicationStatus(
  applicationId: number,
  status: string
) {
  const response = await api.put(
    `/applications/${applicationId}/status`,
    {
      status,
    }
  );

  return response.data;
}

/* ===========================
   Candidate APIs
=========================== */

export async function applyForJob(
  jobId: number
) {
  const response = await api.post(
    `/applications/${jobId}`
  );

  return response.data;
}