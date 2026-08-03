from datetime import datetime
from typing import Optional

from pydantic import BaseModel


class ApplicationStatusUpdate(BaseModel):
    status: str


class ApplicationResponse(BaseModel):
    application_id: int
    candidate_id: int

    full_name: str
    email: str

    job_id: int
    job_title: str
    company: str

    status: str

    resume_uploaded: bool

    ai_match_score: float

    recruiter_notes: Optional[str] = None

    created_at: datetime

    class Config:
        from_attributes = True