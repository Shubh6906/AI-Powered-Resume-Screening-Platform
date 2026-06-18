from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.core.deps import get_db
from app.core.auth import get_current_user

from app.models.user import User
from app.models.job import Job
from app.models.application import Application

from app.schemas.job import JobCreate

router = APIRouter(
    prefix="/jobs",
    tags=["Jobs"],
)


@router.post("/")
def create_job(
    job: JobCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if current_user.role != "recruiter":
        raise HTTPException(
            status_code=403,
            detail="Only recruiters can create jobs",
        )

    new_job = Job(
        title=job.title,
        company=job.company,
        location=job.location,
        description=job.description,
        requirements=job.requirements,
        salary=job.salary,
        created_by=current_user.id,
    )

    db.add(new_job)
    db.commit()
    db.refresh(new_job)

    return {
        "message": "Job created successfully",
        "job_id": new_job.id,
    }


@router.get("/")
def get_jobs(
    db: Session = Depends(get_db),
):
    jobs = db.query(Job).all()

    return jobs


@router.put("/{job_id}")
def update_job(
    job_id: int,
    job: JobCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if current_user.role != "recruiter":
        raise HTTPException(
            status_code=403,
            detail="Only recruiters can update jobs",
        )

    db_job = (
        db.query(Job)
        .filter(Job.id == job_id)
        .first()
    )

    if not db_job:
        raise HTTPException(
            status_code=404,
            detail="Job not found",
        )

    db_job.title = job.title
    db_job.company = job.company
    db_job.location = job.location
    db_job.description = job.description
    db_job.requirements = job.requirements
    db_job.salary = job.salary

    db.commit()
    db.refresh(db_job)

    return {
        "message": "Job updated successfully",
    }


@router.delete("/{job_id}")
def delete_job(
    job_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if current_user.role != "recruiter":
        raise HTTPException(
            status_code=403,
            detail="Only recruiters can delete jobs",
        )

    db_job = (
        db.query(Job)
        .filter(Job.id == job_id)
        .first()
    )

    if not db_job:
        raise HTTPException(
            status_code=404,
            detail="Job not found",
        )

    (
        db.query(Application)
        .filter(
            Application.job_id == job_id
        )
        .delete()
    )

    db.delete(db_job)

    db.commit()

    return {
        "message": "Job deleted successfully",
    }