from fastapi import FastAPI

from app.core.database import Base
from app.core.database import engine

from app.models.user import User
from app.models.job import Job

from app.routers.auth import router as auth_router
from app.routers.jobs import router as jobs_router
from app.routers.applications import router as applications_router

from app.models.application import Application

from app.models.resume import Resume

from app.routers.resume import (
    router as resume_router,
)

from app.routers.ai import (
    router as ai_router,
)

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(auth_router)
app.include_router(jobs_router)
app.include_router(applications_router)

@app.get("/")
def root():
    return {
        "message": "ResumeAI Backend Running"
    }

from app.routers.applications import (
    router as applications_router,
)

app.include_router(
    applications_router
)

app.include_router(
    resume_router
)

app.include_router(
    ai_router
)