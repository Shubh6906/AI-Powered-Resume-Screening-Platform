from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session
from sqlalchemy import desc

from app.core.auth import get_current_user
from app.core.deps import get_db

from app.models.user import User
from app.models.job import Job
from app.models.application import Application

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"],
)


@router.get("/")
def get_analytics(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if current_user.role != "recruiter":
        raise HTTPException(
            status_code=403,
            detail="Only recruiters can access analytics",
        )

    # Dashboard Statistics

    total_jobs = (
        db.query(Job)
        .count()
    )

    total_applications = (
        db.query(Application)
        .count()
    )

    shortlisted_candidates = (
        db.query(Application)
        .filter(
            Application.status == "shortlisted"
        )
        .count()
    )

    rejected_candidates = (
        db.query(Application)
        .filter(
            Application.status == "rejected"
        )
        .count()
    )

    pending_candidates = (
        db.query(Application)
        .filter(
            Application.status == "Applied"
        )
        .count()
    )

    # Recent Applications

    recent_applications = []

    applications = (
        db.query(Application)
        .order_by(desc(Application.id))
        .limit(5)
        .all()
    )

    for application in applications:

        candidate = (
            db.query(User)
            .filter(
                User.id == application.candidate_id
            )
            .first()
        )

        job = (
            db.query(Job)
            .filter(
                Job.id == application.job_id
            )
            .first()
        )

        if candidate and job:
            recent_applications.append(
                {
                    "application_id": application.id,
                    "candidate_name": candidate.full_name,
                    "candidate_email": candidate.email,
                    "job_id": job.id,
                    "job_title": job.title,
                    "company": job.company,
                    "status": application.status,
                }
            )

    # Job Performance

    job_statistics = []

    jobs = (
        db.query(Job)
        .all()
    )

    for job in jobs:

        application_count = (
            db.query(Application)
            .filter(
                Application.job_id == job.id
            )
            .count()
        )

        shortlisted_count = (
            db.query(Application)
            .filter(
                Application.job_id == job.id,
                Application.status == "shortlisted",
            )
            .count()
        )

        job_statistics.append(
            {
                "job_id": job.id,
                "title": job.title,
                "company": job.company,
                "applications": application_count,
                "shortlisted": shortlisted_count,
            }
        )

    # Future AI Score
    average_match_score = 91

    return {
        "stats": {
            "total_jobs": total_jobs,
            "total_applications": total_applications,
            "shortlisted": shortlisted_candidates,
            "rejected": rejected_candidates,
            "pending": pending_candidates,
            "average_match_score": average_match_score,
        },
        "recent_applications": recent_applications,
        "job_statistics": job_statistics,
    }