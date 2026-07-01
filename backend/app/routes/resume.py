from fastapi import APIRouter, UploadFile, File, HTTPException
import os
import shutil

router = APIRouter(tags=["Resume"])

UPLOAD_FOLDER = "uploads"

# Create uploads folder if it doesn't exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):

    # Allow only PDF files
    if file.content_type != "application/pdf":
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    # Always save the uploaded resume with the same name
    file_path = os.path.join(UPLOAD_FOLDER, "resume.pdf")

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "message": "Resume uploaded successfully!",
        "filename": "resume.pdf"
    }