from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="FinRelief AI Backend", version="1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from sqlalchemy import text
from database import engine

# Root Route
@app.get("/")
def read_root():
    return {"message": "Welcome to FinRelief AI 🚀", "status": "running"}

# Test Database Connection
@app.get("/test-db")
def test_db():
    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))
    return {"database_status": "Connected ✅"}

# Include routers
from routers import router as ai_router
app.include_router(ai_router)
