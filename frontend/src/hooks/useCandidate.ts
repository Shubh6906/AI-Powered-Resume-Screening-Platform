import api from "../lib/api";

export async function getCandidateDashboard() {
  const response = await api.get(
    "/candidate/dashboard"
  );

  return response.data;
}