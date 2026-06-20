import api from "../lib/api";

export async function getJobs() {
  const response = await api.get(
    "/jobs"
  );

  return response.data;
}

export async function createJob(
  jobData: any
) {
  const response = await api.post(
    "/jobs",
    jobData
  );

  return response.data;
}

export async function updateJob(
  id: number,
  jobData: any
) {
  const response = await api.put(
    `/jobs/${id}`,
    jobData
  );

  return response.data;
}

export async function deleteJob(
  id: number
) {
  const response = await api.delete(
    `/jobs/${id}`
  );

  return response.data;
}