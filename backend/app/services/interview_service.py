import json

from app.services.resume_parser import extract_text_from_pdf
from app.services.gemini_service import ask_gemini


def generate_interview_questions():

    print("Step 1")

    resume_text = extract_text_from_pdf(
        "uploads/ServiceNow Certified Application Developer (CAD).pdf"
    )

    print("Step 2")

    prompt = f"""
You are an expert technical interviewer.

Read the following resume/document carefully.

Generate EXACTLY 10 interview questions.

Return ONLY valid JSON in this format:

{{
    "questions": [
        "Question 1",
        "Question 2",
        "Question 3",
        "Question 4",
        "Question 5",
        "Question 6",
        "Question 7",
        "Question 8",
        "Question 9",
        "Question 10"
    ]
}}

Do not add markdown.
Do not add explanation.
Do not write anything except the JSON object.

Document:

{resume_text}
"""

    print("Step 3")

    response = ask_gemini(prompt)

    print("Step 4")

    try:
        return json.loads(response)
    except json.JSONDecodeError:
        return {
            "questions": response
        }