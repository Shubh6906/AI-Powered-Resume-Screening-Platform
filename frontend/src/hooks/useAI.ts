import api from "../lib/api";

export async function getRankedCandidates(
  jobId: number
) {
  const response = await api.get(
    `/ai/rank/${jobId}`
  );

  return response.data;
}