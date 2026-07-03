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

def generate_negotiation_strategy(loan_details, user_income, hardship_reason, tone="professional"):
    prompt = f"""
    You are an expert financial negotiator. Draft a {tone} debt settlement negotiation letter 
    for a borrower with the following details:
    
    Lender: {loan_details.lender_name}
    Outstanding Debt: ${loan_details.outstanding_amount}
    Months Overdue: {loan_details.overdue_months}
    Hardship Reason: {hardship_reason}
    Borrower Monthly Income: ${user_income}
    
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

def fallback_strategy(loan_details, hardship_reason):
    """Fallback logic when AI fails or no API key is set."""
    strategy = "Start by offering 30% of the balance in a lump sum. Explain your financial hardship clearly."
    letter = f"""
    Subject: Settlement Offer for Account with {loan_details.lender_name}

    To Whom It May Concern,

    I am writing regarding my outstanding debt of ${loan_details.outstanding_amount}. 
    Due to unforeseen financial difficulties ({hardship_reason}), I am unable to meet the standard payments.

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
