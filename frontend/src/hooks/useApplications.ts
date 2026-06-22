import api from "../lib/api";

export async function getJobApplications(
  jobId: number
) {
  const response = await api.get(
    `/applications/job/${jobId}`
  );

  return response.data;
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