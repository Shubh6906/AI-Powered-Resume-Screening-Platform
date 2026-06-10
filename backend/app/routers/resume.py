import os
import shutil

from fastapi import APIRouter
from fastapi import Depends
from fastapi import File
from fastapi import HTTPException
from fastapi import UploadFile

from sqlalchemy.orm import Session

from app.core.auth import get_current_user
from app.core.deps import get_db

from app.models.user import User
from app.models.resume import Resume

router = APIRouter(
    prefix="/resume",
    tags=["Resume"],
)


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

    file_path = f"uploads/{current_user.id}_{file.filename}"

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