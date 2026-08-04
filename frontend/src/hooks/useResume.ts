import api from "../lib/api";

export interface Resume {
  id: number;

  candidate_id: number;

  file_name: string;

  file_path: string;
}

export interface ResumeAnalysis {
  resume_score: number;

  ats_score: number;

  skills: string[];

  missing_skills: string[];

  summary: string;

  suggestions: string[];
}

/* ===========================
   Resume
=========================== */

export async function getResume() {
  const response = await api.get(
    "/resume"
  );

  return response.data as Resume;
}

export async function uploadResume(
  file: File
) {
  const formData =
    new FormData();

  formData.append(
    "file",
    file
  );

  const response =
    await api.post(
      "/resume/upload",
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

  return response.data;
}

export async function replaceResume(
  file: File
) {
  const formData =
    new FormData();

  formData.append(
    "file",
    file
  );

  const response =
    await api.put(
      "/resume/replace",
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

  return response.data;
}

export async function deleteResume() {
  const response =
    await api.delete(
      "/resume/delete"
    );

  return response.data;
}

export async function downloadResume() {
  const response =
    await api.get(
      "/resume/download",
      {
        responseType: "blob",
      }
    );

  return response.data;
}

/* ===========================
   AI Resume Analysis
=========================== */

export async function getResumeAnalysis() {
  const response =
    await api.get(
      "/resume/analysis"
    );

  return response.data as ResumeAnalysis;
}