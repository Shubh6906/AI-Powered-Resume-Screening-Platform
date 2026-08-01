import api from "../lib/api";

export async function getRecommendedJobs() {
  const response = await api.get(
    "/ai/recommend"
  );

  return response.data;
}