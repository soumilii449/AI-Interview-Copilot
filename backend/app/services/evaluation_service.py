import json

from app.services.gemini_service import ask_gemini


def evaluate_answer(question, answer):

    prompt = f"""
You are a senior technical interviewer.

Interview Question:
{question}

Candidate Answer:
{answer}

Evaluate the answer.

Return ONLY valid JSON.

Format:

{{
    "score": 8,
    "strengths": [
        "...",
        "..."
    ],
    "weaknesses": [
        "...",
        "..."
    ],
    "improved_answer": "..."
}}

Do not use markdown.
Do not write ```json.
Do not add any explanation.
Return only the JSON object.
"""

    response = ask_gemini(prompt)

    # Remove markdown if Gemini still returns it
    response = response.replace("```json", "")
    response = response.replace("```", "")
    response = response.strip()

    # Convert JSON string into Python dictionary
    return json.loads(response)