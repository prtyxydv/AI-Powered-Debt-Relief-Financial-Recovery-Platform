from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, Text
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    
    # 🔒 Authentication Fields
    email = Column(String(255), unique=True, index=True, nullable=False)
    password = Column(String(255), nullable=False)
    
    # 💰 Financial Profile
    monthly_income = Column(Float, nullable=False, default=0.0)
    monthly_expenses = Column(Float, nullable=False, default=0.0)
    lump_sum_available = Column(Float, nullable=False, default=0.0)

    financial_profile = relationship("FinancialProfile", back_populates="user", uselist=False)
    loans = relationship("Loan", back_populates="user")
    ai_history = relationship("AIHistory", back_populates="user")

class FinancialProfile(Base):
    __tablename__ = "financial_profiles"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    emi_ratio = Column(Float)
    dti_ratio = Column(Float)
    monthly_surplus = Column(Float)
    stress_level = Column(String)
    
    user = relationship("User", back_populates="financial_profile")

class Loan(Base):
    __tablename__ = "loans"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    lender_name = Column(String)
    loan_type = Column(String)
    outstanding_amount = Column(Float)
    interest_rate = Column(Float)
    emi = Column(Float)
    overdue_months = Column(Integer)
    
    user = relationship("User", back_populates="loans")
    settlement_predictions = relationship("SettlementPrediction", back_populates="loan")
    ai_negotiations = relationship("AINegotiation", back_populates="loan")

class SettlementPrediction(Base):
    __tablename__ = "settlement_predictions"
    id = Column(Integer, primary_key=True, index=True)
    loan_id = Column(Integer, ForeignKey("loans.id"))
    suggested_settlement = Column(Float)
    risk_category = Column(String)
    predicted_amount = Column(Float)

    loan = relationship("Loan", back_populates="settlement_predictions")

class AINegotiation(Base):
    __tablename__ = "ai_negotiations"
    id = Column(Integer, primary_key=True, index=True)
    loan_id = Column(Integer, ForeignKey("loans.id"))
    user_id = Column(Integer, ForeignKey("users.id"))
    negotiation_strategy = Column(Text)
    negotiation_letter = Column(Text)
    generated_date = Column(DateTime, default=datetime.utcnow)

    loan = relationship("Loan", back_populates="ai_negotiations")

class AIHistory(Base):
    __tablename__ = "ai_history"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    generated_content = Column(Text)
    query_type = Column(String)
    timestamp = Column(DateTime, default=datetime.utcnow)
    
    user = relationship("User", back_populates="ai_history")
