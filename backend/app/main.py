from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import resume
from app.routes import question_routes
from app.routes import evaluation_routes

app = FastAPI(
    title="AI Interview Copilot API",
    description="Backend API",
    version="1.0.0"
)

# Allow React frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register all routes
app.include_router(resume.router)
app.include_router(question_routes.router)
app.include_router(evaluation_routes.router)

@app.get("/")
def home():
    return {
        "message": "Welcome"
    }

@app.get("/health")
def health():
    return {
        "status": "Running"
    }