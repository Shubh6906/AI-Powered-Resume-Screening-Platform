from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text
from sqlalchemy import ForeignKey

from app.core.database import Base


class Job(Base):
    __tablename__ = "jobs"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    title = Column(
        String,
        nullable=False,
    )

    company = Column(
        String,
        nullable=False,
    )

    location = Column(
        String,
        nullable=False,
    )

    description = Column(
        Text,
        nullable=False,
    )

    requirements = Column(
        Text,
        nullable=False,
    )

    salary = Column(
        String,
        nullable=True,
    )

    created_by = Column(
        Integer,
        ForeignKey("users.id"),
    )