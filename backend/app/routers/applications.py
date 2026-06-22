from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.core.auth import get_current_user
from app.core.deps import get_db

from app.models.user import User
from app.models.job import Job
from app.models.application import Application

from app.schemas.application import ApplicationStatusUpdate

router = APIRouter(
    prefix="/applications",
    tags=["Applications"],
)


@router.post("/{job_id}")
def apply_for_job(
    job_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if current_user.role != "candidate":
        raise HTTPException(
            status_code=403,
            detail="Only candidates can apply",
        )

    job = (
        db.query(Job)
        .filter(Job.id == job_id)
        .first()
    )

    if not job:
        raise HTTPException(
            status_code=404,
            detail="Job not found",
        )

    existing_application = (
        db.query(Application)
        .filter(
            Application.job_id == job_id,
            Application.candidate_id == current_user.id,
        )
        .first()
    )

    if existing_application:
        raise HTTPException(
            status_code=400,
            detail="Already applied to this job",
        )

    application = Application(
        candidate_id=current_user.id,
        job_id=job_id,
    )

    db.add(application)
    db.commit()
    db.refresh(application)

    return {
        "message": "Application submitted successfully"
    }


@router.get("/my")
def get_my_applications(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return (
        db.query(Application)
        .filter(
            Application.candidate_id == current_user.id
        )
        .all()
    )


@router.get("/job/{job_id}")
def get_job_applications(
    job_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if current_user.role != "recruiter":
        raise HTTPException(
            status_code=403,
            detail="Only recruiters can view applicants",
        )

    applications = (
        db.query(Application)
        .filter(
            Application.job_id == job_id
        )
        .all()
    )

    result = []

    for application in applications:
        candidate = (
            db.query(User)
            .filter(
                User.id == application.candidate_id
            )
            .first()
        )

        if candidate:
            result.append(
                {
                    "application_id": application.id,
                    "candidate_id": candidate.id,
                    "full_name": candidate.full_name,
                    "email": candidate.email,
                    "status": application.status,
                }
            )

    return result


@router.put("/{application_id}/status")
def update_application_status(
    application_id: int,
    status_data: ApplicationStatusUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if current_user.role != "recruiter":
        raise HTTPException(
            status_code=403,
            detail="Only recruiters can update status",
        )

    application = (
        db.query(Application)
        .filter(
            Application.id == application_id
        )
        .first()
    )

    if not application:
        raise HTTPException(
            status_code=404,
            detail="Application not found",
        )

    application.status = status_data.status

    db.commit()

    return {
        "message": "Application status updated successfully"
    }