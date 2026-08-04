import os
import shutil
from uuid import uuid4

UPLOAD_DIR = "uploads/resumes"

os.makedirs(
    UPLOAD_DIR,
    exist_ok=True,
)


def save_resume(file):
    extension = os.path.splitext(
        file.filename
    )[1]

    filename = (
        f"{uuid4()}{extension}"
    )

    path = os.path.join(
        UPLOAD_DIR,
        filename,
    )

    with open(path, "wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer,
        )

    return filename, path


def delete_resume(path):
    if (
        path
        and os.path.exists(path)
    ):
        os.remove(path)