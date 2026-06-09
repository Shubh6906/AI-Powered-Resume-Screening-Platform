from pydantic import BaseModel


class JobCreate(BaseModel):
    title: str
    company: str
    location: str
    description: str
    requirements: str
    salary: str


class JobResponse(BaseModel):
    id: int
    title: str
    company: str
    location: str
    description: str
    requirements: str
    salary: str

    class Config:
        from_attributes = True