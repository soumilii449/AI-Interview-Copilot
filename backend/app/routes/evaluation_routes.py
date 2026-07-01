from fastapi import APIRouter
from app.models.answer_model import AnswerRequest
from app.services.evaluation_service import evaluate_answer

router = APIRouter(tags=["Answer Evaluation"])


@router.post("/evaluate-answer")
def evaluate(data: AnswerRequest):

    result = evaluate_answer(
        data.question,
        data.answer
    )

    return result