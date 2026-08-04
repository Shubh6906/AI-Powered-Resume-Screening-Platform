from pydantic import BaseModel


class ResumeResponse(
    BaseModel
):
    id: int
    candidate_id: int
    file_name: str
    file_path: str

    class Config:
        from_attributes = True


class ResumeAnalysis(
    BaseModel
):
    resume_score: int
    ats_score: int

    skills: list[str]

    missing_skills: list[str]

    summary: str

    suggestions: list[str]