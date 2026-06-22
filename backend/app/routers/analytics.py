from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

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

    applied_candidates = (
        db.query(Application)
        .filter(
            Application.status == "Applied"
        )
        .count()
    )

    return {
        "total_jobs": total_jobs,
        "total_applications": total_applications,
        "shortlisted_candidates": shortlisted_candidates,
        "rejected_candidates": rejected_candidates,
        "applied_candidates": applied_candidates,
    }