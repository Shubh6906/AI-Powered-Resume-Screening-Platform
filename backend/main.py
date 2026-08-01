from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.database import Base
from app.core.database import engine

from app.models.user import User
from app.models.job import Job
from app.models.application import Application
from app.models.resume import Resume

from app.routers.auth import router as auth_router
from app.routers.jobs import router as jobs_router
from app.routers.applications import router as applications_router
from app.routers.resume import router as resume_router
from app.routers.ai import router as ai_router
from app.routers.analytics import router as analytics_router
from app.routers.candidate import (
    router as candidate_router,
)

app = FastAPI()

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create database tables
Base.metadata.create_all(bind=engine)

# Register routers
app.include_router(auth_router)
app.include_router(jobs_router)
app.include_router(applications_router)
app.include_router(resume_router)
app.include_router(ai_router)
app.include_router(analytics_router)
app.include_router(candidate_router)

@app.get("/")
def root():
    return {
        "message": "ResumeAI Backend Running"
    }