import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("models/gemini-pro")

def summarize_text(text):
    try:
        chat = model.start_chat()
        prompt = (
            "Summarize the following Terms and Conditions into bullet points. "
            "Include user rights, data sharing, cancellations, and risks:\n\n" + text
        )
        response = chat.send_message(prompt)
        return response.text.strip()
    except Exception as e:
        return f"Error during summarization: {str(e)}"
