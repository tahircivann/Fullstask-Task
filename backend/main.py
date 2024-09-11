from fastapi import FastAPI
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allows React frontend
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Updated Mock search results data
mock_data = [
    {
        "id": 1,
        "title": "New Banking Regulation 2023",
        "description": "This regulation affects all banking institutions with new capital requirements.",
        "publish_date": "2023-08-01",
        "category": {"name": "Banking"},
        "decision": {"name": "Approved"},
        "company": {"name": "Federal Reserve"},
    },
    {
        "id": 2,
        "title": "Cybersecurity Guidelines for Fintech Companies",
        "description": "Guidelines for improving cybersecurity measures in fintech organizations.",
        "publish_date": "2023-07-15",
        "category": {"name": "Fintech"},
        "decision": {"name": "Adopted"},
        "company": {"name": "Securities and Exchange Commission"},
    },
    {
        "id": 3,
        "title": "Climate Risk Management for Insurers",
        "description": "A new framework for managing climate risk for insurance companies.",
        "publish_date": "2023-06-25",
        "category": {"name": "Insurance"},
        "decision": {"name": "In Review"},
        "company": {"name": "National Association of Insurance Commissioners"},
    },
    {
        "id": 4,
        "title": "Data Protection Act Updates",
        "description": "Revised rules for the protection of customer data across various industries.",
        "publish_date": "2023-05-10",
        "category": {"name": "Data Privacy"},
        "decision": {"name": "Approved"},
        "company": {"name": "European Data Protection Board"},
    },
    {
        "id": 5,
        "title": "Anti-Money Laundering (AML) Compliance Guidelines",
        "description": "New compliance guidelines for financial institutions regarding AML measures.",
        "publish_date": "2023-04-05",
        "category": {"name": "Compliance"},  # Fixed the invalid data format here
        "decision": {"name": "Implemented"},
        "company": {"name": "Financial Conduct Authority"},
    },
]


@app.get("/search")
def search_results():
    return {"items": mock_data}


@app.get("/")
async def hello_world():
    return {"message": "Hello World"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=3101)
