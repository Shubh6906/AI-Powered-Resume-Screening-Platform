from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.core.auth import get_current_user
from app.core.deps import get_db

from app.models.user import User
from app.models.application import Application
from app.models.resume import Resume

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

    return {
        "applications": total_applications,
        "shortlisted": shortlisted,
        "rejected": rejected,
        "resume_uploaded": resume is not None,
    }