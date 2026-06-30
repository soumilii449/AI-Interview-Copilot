from app.services.resume_parser import extract_text_from_pdf

pdf_path = "uploads/ServiceNow Certified Application Developer (CAD).pdf"

text = extract_text_from_pdf(pdf_path)

print(text)