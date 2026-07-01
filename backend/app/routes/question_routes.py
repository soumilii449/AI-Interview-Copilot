from fastapi import APIRouter
from app.services.interview_service import generate_interview_questions

router = APIRouter(tags=["Interview Questions"])


@router.post("/generate-questions")
def generate_questions():

    response = generate_interview_questions()

    return response