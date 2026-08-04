import os
import shutil

from fastapi import APIRouter
from fastapi import Depends
from fastapi import File
from fastapi import UploadFile
from fastapi import HTTPException
from fastapi.responses import FileResponse

from sqlalchemy.orm import Session

from app.core.auth import get_current_user
from app.core.deps import get_db

from app.models.user import User
from app.models.resume import Resume

from app.services.pdf_extractor import (
    extract_text_from_pdf,
)

from app.services.resume_parser import (
    parse_resume,
)

router = APIRouter(
    prefix="/resume",
    tags=["Resume"],
)


# ==================================================
# Upload Resume
# ==================================================

@router.post("/upload")
def upload_resume(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if current_user.role != "candidate":
        raise HTTPException(
            status_code=403,
            detail="Only candidates can upload resumes",
        )

    os.makedirs(
        "uploads",
        exist_ok=True,
    )

    file_path = (
        f"uploads/{current_user.id}_{file.filename}"
    )

    with open(
        file_path,
        "wb",
    ) as buffer:
        shutil.copyfileobj(
            file.file,
            buffer,
        )

    existing_resume = (
        db.query(Resume)
        .filter(
            Resume.candidate_id == current_user.id
        )
        .first()
    )

    if existing_resume:
        if os.path.exists(existing_resume.file_path):
            os.remove(existing_resume.file_path)

        existing_resume.file_name = file.filename
        existing_resume.file_path = file_path

        db.commit()

        return {
            "message": "Resume updated successfully"
        }

    resume = Resume(
        candidate_id=current_user.id,
        file_name=file.filename,
        file_path=file_path,
    )

    db.add(resume)
    db.commit()

    return {
        "message": "Resume uploaded successfully"
    }


# ==================================================
# Get Resume
# ==================================================

@router.get("")
def get_resume(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
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

    return resume


# ==================================================
# Get My Resume
# ==================================================

@router.get("/me")
def get_my_resume(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
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

    return resume


# ==================================================
# Replace Resume
# ==================================================

@router.put("/replace")
def replace_resume(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
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

    if os.path.exists(resume.file_path):
        os.remove(resume.file_path)

    file_path = (
        f"uploads/{current_user.id}_{file.filename}"
    )

    with open(
        file_path,
        "wb",
    ) as buffer:
        shutil.copyfileobj(
            file.file,
            buffer,
        )

    resume.file_name = file.filename
    resume.file_path = file_path

    db.commit()

    return {
        "message": "Resume replaced successfully"
    }


# ==================================================
# Download Resume
# ==================================================

@router.get("/download")
def download_resume(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
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

    return FileResponse(
        path=resume.file_path,
        filename=resume.file_name,
    )


# ==================================================
# Delete Resume
# ==================================================

@router.delete("/delete")
def delete_resume(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
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

    if os.path.exists(resume.file_path):
        os.remove(resume.file_path)

    db.delete(resume)
    db.commit()

    return {
        "message": "Resume deleted successfully"
    }


# ==================================================
# Parse Resume
# ==================================================

@router.post("/parse")
def parse_candidate_resume(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
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

    extracted_text = extract_text_from_pdf(
        resume.file_path
    )

    parsed_data = parse_resume(
        extracted_text
    )

    return parsed_data


# ==================================================
# Resume Analysis
# ==================================================

@router.get("/analysis")
def resume_analysis(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
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

    return {
        "resume_score": 88,
        "ats_score": 91,
        "skills": [
            "Python",
            "FastAPI",
            "React",
            "Next.js",
            "PostgreSQL",
            "Git",
            "REST API",
        ],
        "missing_skills": [
            "Docker",
            "AWS",
            "Redis",
            "CI/CD",
        ],
        "summary": (
            "Your resume is ATS friendly and well structured. "
            "Add stronger project achievements and cloud "
            "technologies to improve recruiter matching."
        ),
        "suggestions": [
            "Add measurable achievements.",
            "Expand project descriptions.",
            "Include Docker experience.",
            "Mention cloud platforms.",
        ],
    }


# ==================================================
# Recruiter View Candidate Resume
# IMPORTANT: Keep this LAST
# ==================================================

@router.get("/{candidate_id}")
def get_candidate_resume(
    candidate_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if current_user.role != "recruiter":
        raise HTTPException(
            status_code=403,
            detail="Only recruiters can view resumes",
        )

    resume = (
        db.query(Resume)
        .filter(
            Resume.candidate_id == candidate_id
        )
        .first()
    )

    if not resume:
        raise HTTPException(
            status_code=404,
            detail="Resume not found",
        )

    return resume