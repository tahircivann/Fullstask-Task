from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict
import uvicorn

# Import mock_data from the data folder
from data.mock_data import mock_data

app = FastAPI()

# CORS Configuration
origins = [
    "http://localhost:3000",  # Development React frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Pydantic Models
class Category(BaseModel):
    name: str


class Decision(BaseModel):
    name: str


class Company(BaseModel):
    name: str


class ResultItem(BaseModel):
    id: int
    title: str
    description: str
    publish_date: str
    category: Category
    decision: Decision
    company: Company


# Route to return mock data
@app.get("/search", response_model=Dict[str, List[ResultItem]])
def search_results():
    if not mock_data:
        raise HTTPException(status_code=404, detail="No results found")
    return {"items": mock_data}


@app.get("/")
async def hello_world():
    return {"message": "Hello World"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=3101, log_level="info")
