from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.core.deps import get_db
from app.core.auth import get_current_user

from app.models.user import User
from app.models.job import Job
from app.models.resume import Resume

from app.services.pdf_extractor import (
    extract_text_from_pdf,
)

from app.services.resume_parser import (
    parse_resume,
)

from app.services.match_engine import (
    calculate_match_score,
)

router = APIRouter(
    prefix="/ai",
    tags=["AI"],
)

@router.post("/match/{job_id}")
def match_resume_to_job(
    job_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if current_user.role != "candidate":
        raise HTTPException(
            status_code=403,
            detail="Only candidates can use AI matching",
        )

    resume = (
        db.query(Resume)
        .filter(
            Resume.candidate_id == current_user.id
        )
        .first()
    )

    if not resume:
        raise HTTPException(
            status_code=404,
            detail="Resume not found",
        )

    job = (
        db.query(Job)
        .filter(
            Job.id == job_id
        )
        .first()
    )

    if not job:
        raise HTTPException(
            status_code=404,
            detail="Job not found",
        )

    text = extract_text_from_pdf(
        resume.file_path
    )

    parsed_data = parse_resume(
        text
    )

    result = calculate_match_score(
        parsed_data["skills"],
        job.requirements,
    )

    return result