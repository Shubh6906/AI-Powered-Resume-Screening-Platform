from datetime import datetime

from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Float
from sqlalchemy import DateTime
from sqlalchemy import Text
from sqlalchemy import ForeignKey

from app.core.database import Base


class Application(Base):
    __tablename__ = "applications"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    candidate_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False,
    )

    job_id = Column(
        Integer,
        ForeignKey("jobs.id"),
        nullable=False,
    )

    status = Column(
        String,
        nullable=False,
        default="Applied",
    )

    ai_match_score = Column(
        Float,
        default=0.0,
    )

    recruiter_notes = Column(
        Text,
        nullable=True,
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )

    updated_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False,
    )