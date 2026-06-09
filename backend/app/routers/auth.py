from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.schemas.user import UserCreate
from app.schemas.user import UserLogin

from app.models.user import User
from app.core.auth import get_current_user

from app.core.deps import get_db

from app.core.security import hash_password
from app.core.security import verify_password
from app.core.security import create_access_token

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post("/register")
def register_user(
    user: UserCreate,
    db: Session = Depends(get_db),
):
    print("=" * 50)
    print("REGISTER REQUEST")
    print("FULL NAME:", user.full_name)
    print("EMAIL:", user.email)
    print("PASSWORD:", user.password)
    print("PASSWORD LENGTH:", len(user.password))
    print("=" * 50)

    existing_user = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered",
        )

    hashed_password = hash_password(user.password)

    print("HASH GENERATED:")
    print(hashed_password)
    print("HASH LENGTH:", len(hashed_password))

    new_user = User(
        full_name=user.full_name,
        email=user.email,
        password=hashed_password,
        role=user.role,
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User registered successfully",
        "user_id": new_user.id,
    }


@router.post("/login")
def login_user(
    user: UserLogin,
    db: Session = Depends(get_db),
):
    db_user = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if not db_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials",
        )

    print("=" * 50)
    print("LOGIN REQUEST")
    print("INPUT PASSWORD:", user.password)
    print("INPUT PASSWORD LENGTH:", len(user.password))
    print("DB PASSWORD:", db_user.password)
    print("DB PASSWORD LENGTH:", len(db_user.password))
    print("=" * 50)

    if not verify_password(
        user.password,
        db_user.password,
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials",
        )

    access_token = create_access_token(
        {
            "sub": str(db_user.id),
            "role": db_user.role,
        }
    )

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "role": db_user.role,
    }

@router.get("/me")
def get_me(
    current_user: User = Depends(get_current_user),
):
    return {
        "id": current_user.id,
        "full_name": current_user.full_name,
        "email": current_user.email,
        "role": current_user.role,
    }