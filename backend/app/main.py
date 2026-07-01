from fastapi import FastAPI
from app.routes import resume
from app.routes import question_routes

app = FastAPI(
    title="AI Interview Copilot API",
    description="Backend API",
    version="1.0.0"
)

app.include_router(resume.router)
app.include_router(question_routes.router)

@app.get("/")
def home():
    return {"message": "Welcome"}

@app.get("/health")
def health():
    return {"status": "Running"}