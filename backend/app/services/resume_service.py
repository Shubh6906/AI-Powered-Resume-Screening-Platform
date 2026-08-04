from app.models.resume import Resume

from app.utils.file_manager import (
    save_resume,
    delete_resume,
)


def upload_resume(
    db,
    current_user,
    file,
):
    existing = (
        db.query(Resume)
        .filter(
            Resume.candidate_id
            == current_user.id
        )
        .first()
    )

    if existing:
        delete_resume(
            existing.file_path
        )

        db.delete(existing)

        db.commit()

    filename, path = save_resume(
        file
    )

    resume = Resume(
        candidate_id=current_user.id,
        file_name=filename,
        file_path=path,
    )

    db.add(resume)

    db.commit()

    db.refresh(resume)

    return resume