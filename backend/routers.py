from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import User, Loan, AIHistory
# The user's code uses get_current_user, calculate_financial_health, calculate_settlement_probability, generate_negotiation_strategy
from financial_engine import calculate_financial_health
from settlement_engine import predict_settlements as calculate_settlement_probability # Aliased to match snippet
from ai_negotiation import generate_negotiation_strategy

# Placeholder for get_current_user to make the code valid, assuming auth is implemented here
def get_current_user():
    pass

router = APIRouter()

@router.get("/ai-negotiation-strategy")
def get_ai_negotiation_strategy(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    try:
        user = db.query(User).filter(User.id == current_user.id).first()
        loans = db.query(Loan).filter(Loan.user_id == user.id).all()
        if not loans:
            return {"strategy": "Please add at least one loan to generate an AI strategy."}
        financial_health = calculate_financial_health(user, loans)
        settlement_data = calculate_settlement_probability(user, loans)
        strategy = generate_negotiation_strategy(user, loans, financial_health, settlement_data)
        try:
            db.add(AIHistory(user_id=user.id, query_type="Negotiation Strategy", response=strategy))
            db.commit()
        except Exception:
            db.rollback()
        return {"strategy": strategy}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI Strategy error: {str(e)}")

from pydantic import BaseModel

class ProfileUpdate(BaseModel):
    monthly_income: float
    monthly_expenses: float
    lump_sum_available: float

class LoanCreate(BaseModel):
    lender_name: str
    outstanding_amount: float
    interest_rate: float
    emi: float
    overdue_months: int
    loan_type: str

@router.put("/update-profile")
def update_profile(profile: ProfileUpdate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    try:
        user = db.query(User).filter(User.id == current_user.id).first()
        user.monthly_income = profile.monthly_income
        user.monthly_expenses = profile.monthly_expenses
        user.lump_sum_available = profile.lump_sum_available
        db.commit()
        return {"message": "Profile Updated Successfully"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Failed to update profile: {str(e)}")

@router.post("/add-loan")
def add_loan(loan: LoanCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    try:
        new_loan = Loan(
            user_id=current_user.id, lender_name=loan.lender_name,
            outstanding_amount=loan.outstanding_amount, interest_rate=loan.interest_rate,
            emi=loan.emi, overdue_months=loan.overdue_months, loan_type=loan.loan_type
        )
        db.add(new_loan)
        db.commit()
        db.refresh(new_loan)
        return {"message": "Loan Added Successfully", "id": new_loan.id}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Failed to add loan: {str(e)}")
