from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

# --- User Schemas ---
class UserBase(BaseModel):
    name: str
    email: EmailStr
    monthly_income: float
    monthly_expenses: float

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int

    class Config:
        from_attributes = True

# --- Financial Profile Schemas ---
class FinancialProfileResponse(BaseModel):
    id: int
    user_id: int
    emi_ratio: float
    dti_ratio: float
    monthly_surplus: float
    stress_level: str

    class Config:
        from_attributes = True

# --- Loan Schemas ---
class LoanBase(BaseModel):
    lender_name: str
    loan_type: str
    outstanding_amount: float
    interest_rate: float
    emi: float
    overdue_months: int

class LoanCreate(LoanBase):
    pass

class LoanResponse(LoanBase):
    id: int
    user_id: int

    class Config:
        from_attributes = True

# --- Settlement Prediction Schemas ---
class SettlementPredictionResponse(BaseModel):
    id: int
    loan_id: int
    suggested_settlement: float
    risk_category: str
    predicted_amount: float

    class Config:
        from_attributes = True

# --- AI Negotiation Schemas ---
class AINegotiationCreate(BaseModel):
    hardship_reason: str
    tone: str

class AINegotiationResponse(BaseModel):
    id: int
    loan_id: int
    user_id: int
    negotiation_strategy: str
    negotiation_letter: str
    generated_date: datetime

    class Config:
        from_attributes = True
