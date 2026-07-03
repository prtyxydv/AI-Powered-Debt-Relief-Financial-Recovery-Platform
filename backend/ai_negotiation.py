import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

# Configure Gemini
api_key = os.getenv("GEMINI_API_KEY")
if api_key:
    genai.configure(api_key=api_key)

def generate_negotiation_strategy(loan_details, user_income, hardship_reason, tone="professional"):
    """
    Generates a negotiation letter using Google Gemini AI.
    Includes fallback logic if AI is unavailable.
    """
    if not api_key:
        return fallback_strategy(loan_details, hardship_reason)
        
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
    
    try:
        model = genai.GenerativeModel('gemini-1.5-flash')
        response = model.generate_content(prompt)
        content = response.text
        
        return {
            "strategy": "AI Generated Strategy (See Letter)",
            "letter": content,
            "source": "gemini-ai"
        }
    except Exception as e:
        print(f"AI Generation Failed: {e}")
        return fallback_strategy(loan_details, hardship_reason)

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
