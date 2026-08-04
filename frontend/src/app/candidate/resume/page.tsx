"use client";

import { useEffect, useState } from "react";

import CandidateLayout from "../../../components/dashboard/CandidateLayout";

import ResumeHeader from "../../../components/candidate/ResumeHeader";
import ResumeViewer from "../../../components/candidate/ResumeViewer";
import ResumeActions from "../../../components/candidate/ResumeActions";
import ResumeAnalysis from "../../../components/candidate/ResumeAnalysis";
import SkillsCard from "../../../components/candidate/SkillsCard";
import MissingSkills from "../../../components/candidate/MissingSkills";
import AISuggestions from "../../../components/candidate/AISuggestions";

import {
  Resume,
  ResumeAnalysis as ResumeAnalysisType,
  getResume,
  getResumeAnalysis,
} from "../../../hooks/useResume";

export default function ResumePage() {
  const [resume, setResume] =
    useState<Resume | null>(null);

  const [analysis, setAnalysis] =
    useState<ResumeAnalysisType | null>(null);

  const [loading, setLoading] =
    useState(true);

  async function loadResume() {
    try {
      const resumeData =
        await getResume();

      setResume(resumeData);

      try {
        const analysisData =
          await getResumeAnalysis();

        setAnalysis(
          analysisData
        );
      } catch (error) {
        console.error(
          "Analysis unavailable",
          error
        );

        setAnalysis(null);
      }
    } catch (error) {
      console.error(error);

      setResume(null);
      setAnalysis(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadResume();
  }, []);

  if (loading) {
    return (
      <CandidateLayout>
        <div className="flex justify-center items-center py-32">

          <div className="h-12 w-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />

        </div>
      </CandidateLayout>
    );
  }

  return (
    <CandidateLayout>

      <ResumeHeader
        resume={resume}
      />

      <div className="mt-8">

        <ResumeViewer
          resume={resume}
        />

      </div>

      <div className="mt-8">

        <ResumeActions
          resume={resume}
          refreshResume={
            loadResume
          }
        />

      </div>

      {analysis && (
        <>
          <div className="mt-8">

            <ResumeAnalysis
              analysis={analysis}
            />

          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-8">

            <SkillsCard
              analysis={analysis}
            />

            <MissingSkills
              analysis={analysis}
            />

          </div>

          <div className="mt-8">

            <AISuggestions
              analysis={analysis}
            />

          </div>
        </>
      )}

    </CandidateLayout>
  );
}