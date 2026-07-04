import os
import json
import importlib
from dotenv import load_dotenv

load_dotenv()

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY", "")

def _call_gemini(prompt: str) -> str:
    """Call Google Gemini API if key is available, otherwise use rule-based fallback."""
    if not GOOGLE_API_KEY:
        return None # Will fall through to fallback
        
    try:
        genai = importlib.import_module("google.generativeai")
        genai.configure(api_key=GOOGLE_API_KEY)
        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(prompt)
        return response.text
    except ImportError:
        return None
    except Exception as e:
        print(f"Gemini API error: {e}")
        return None

def generate_negotiation_strategy(user, loans, financial_health, settlement_data, tone="professional"):
    prompt = f"""
    You are an expert financial negotiator. Draft a {tone} debt settlement negotiation letter 
    and strategy for a borrower with the following details:
    
    Borrower Monthly Income: ${user.monthly_income}
    Total Outstanding Debt: ${financial_health['total_outstanding']}
    Total Loans: {financial_health['total_loans']}
    Financial Stress Level: {financial_health['stress_level']}
    
    Settlement Details:
    {json.dumps(settlement_data, indent=2)}
    
    Provide:
    1. A short internal negotiation strategy for the borrower.
    2. The email/letter draft to send to the lender.
    """
    
    content = _call_gemini(prompt)
    
    if content is None:
        return fallback_strategy(loan_details, hardship_reason)
        
    return {
        "strategy": "AI Generated Strategy (See Letter)",
        "letter": content,
        "source": "gemini-ai"
    }

def fallback_strategy(user, loans, financial_health, settlement_data):
    """Fallback logic when AI fails or no API key is set."""
    strategy = "Start by offering 30% of the balance in a lump sum. Explain your financial hardship clearly."
    
    # Generate letter for the highest priority/first loan in settlement data if available
    target_lender = "Your Lender"
    target_amount = financial_health['total_outstanding']
    if settlement_data and len(settlement_data) > 0:
        target_lender = settlement_data[0]['lender_name']
        target_amount = settlement_data[0]['outstanding_amount']
        
    letter = f"""
    Subject: Settlement Offer for Account with {target_lender}

    To Whom It May Concern,

    I am writing regarding my outstanding debt of ${target_amount}. 
    Due to unforeseen financial difficulties, I am unable to meet the standard payments.

    I would like to propose a settlement of 40% of the balance to resolve this account entirely. 
    Please let me know if we can reach an agreement.

    Sincerely,
    [Your Name]
    """
    return {
        "strategy": strategy,
        "letter": letter,
        "source": "fallback-rule-engine"
    }
