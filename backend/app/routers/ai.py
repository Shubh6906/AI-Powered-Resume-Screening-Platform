from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.core.deps import get_db
from app.core.auth import get_current_user

from app.models.user import User
from app.models.job import Job
from app.models.resume import Resume
from app.models.application import Application

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


@router.get("/rank/{job_id}")
def rank_candidates(
    job_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if current_user.role != "recruiter":
        raise HTTPException(
            status_code=403,
            detail="Only recruiters can rank candidates",
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

    applications = (
        db.query(Application)
        .filter(
            Application.job_id == job_id
        )
        .all()
    )

    rankings = []

    for application in applications:
        candidate = (
            db.query(User)
            .filter(
                User.id == application.candidate_id
            )
            .first()
        )

        if not candidate:
            continue

        resume = (
            db.query(Resume)
            .filter(
                Resume.candidate_id
                ==
                application.candidate_id
            )
            .first()
        )

        if not resume:
            continue

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

        rankings.append(
            {
                "candidate_id": candidate.id,
                "full_name": candidate.full_name,
                "email": candidate.email,
                "match_score": result["match_score"],
                "matched_skills": result["matched_skills"],
                "missing_skills": result["missing_skills"],
            }
        )

    rankings.sort(
        key=lambda x: x["match_score"],
        reverse=True,
    )

    return rankings