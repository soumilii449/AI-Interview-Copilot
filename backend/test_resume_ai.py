from app.services.resume_parser import extract_text_from_pdf
from app.services.gemini_service import ask_gemini

# Read resume
resume_text = extract_text_from_pdf(
    "uploads/ServiceNow Certified Application Developer (CAD).pdf"
)

# Prompt
prompt = f"""
You are an AI document analyzer.

Analyze the following document.

Tell me:
1. What is this document?
2. Who is it issued to?
3. Which organization issued it?
4. What certification is this?
5. Give a short summary.

Document:
{resume_text}
"""
response = ask_gemini(prompt)

print(response)