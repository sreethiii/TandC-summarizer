import google.generativeai as genai

# ✅ Paste your Gemini API key here — inside quotes
genai.configure(api_key="api_key")

# ✅ Use this exact model name for MakerSuite compatibility
model = genai.GenerativeModel("models/gemini-1.5-flash-latest")

def summarize_text(text):
    try:
        # ✅ Use chat method (not generate_content)
        chat = model.start_chat()
        prompt = (
            "Summarize the following Terms and Conditions into simple bullet points. "
            "Include user rights, privacy terms, data sharing, refund/cancellation policy:\n\n"
            + text
        )
        response = chat.send_message(prompt)
        return response.text.strip()

    except Exception as e:
        return f"Error during summarization: {str(e)}"
