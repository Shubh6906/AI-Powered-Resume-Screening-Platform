from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.core.auth import get_current_user
from app.core.deps import get_db

from app.models.user import User
from app.models.application import Application
from app.models.resume import Resume
from app.models.job import Job

router = APIRouter(
    prefix="/candidate",
    tags=["Candidate"],
)


@router.get("/dashboard")
def get_candidate_dashboard(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if current_user.role != "candidate":
        raise HTTPException(
            status_code=403,
            detail="Only candidates can access this endpoint",
        )

    total_applications = (
        db.query(Application)
        .filter(
            Application.candidate_id == current_user.id
        )
        .count()
    )

    shortlisted = (
        db.query(Application)
        .filter(
            Application.candidate_id == current_user.id,
            Application.status == "shortlisted",
        )
        .count()
    )

    rejected = (
        db.query(Application)
        .filter(
            Application.candidate_id == current_user.id,
            Application.status == "rejected",
        )
        .count()
    )

    resume = (
        db.query(Resume)
        .filter(
            Resume.candidate_id == current_user.id
        )
        .first()
    )

    applications = (
        db.query(Application)
        .filter(
            Application.candidate_id == current_user.id
        )
        .order_by(Application.id.desc())
        .all()
    )

    recent_applications = []

    for application in applications:
        job = (
            db.query(Job)
            .filter(
                Job.id == application.job_id
            )
            .first()
        )

        if not job:
            continue

        recent_applications.append(
            {
                "application_id": application.id,
                "job_id": job.id,
                "job_title": job.title,
                "company": job.company,
                "location": job.location,
                "status": application.status,
            }
        )

    return {
        "applications": total_applications,
        "shortlisted": shortlisted,
        "rejected": rejected,
        "resume_uploaded": resume is not None,
        "recent_applications": recent_applications,
    }