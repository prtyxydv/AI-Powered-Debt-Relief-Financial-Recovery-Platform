# FinRelief AI

FinRelief AI is an AI-powered debt relief and financial recovery platform designed to help borrowers manage and negotiate their debt.

## Features
- **Dashboard**: Overview of financial health and active loans.
- **Settlement Predictor**: AI estimates of potential settlement amounts based on your profile.
- **Negotiation Email Generator**: Custom, professional emails drafted by AI to send to your lenders.
- **Know Your Rights**: Information regarding your rights as a borrower.

## Setup Instructions

### Backend
1. Navigate to the `app` directory.
2. Install dependencies: `pip install -r ../requirements.txt`
3. Configure the `.env` file at the root.
4. Run the server: `uvicorn main:app --reload`

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
