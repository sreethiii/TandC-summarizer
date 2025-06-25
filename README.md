# 📄 Terms & Conditions Summarizer Extension

A Chrome extension powered by AI that **automatically detects Terms and Conditions on websites**, sends the content to a FastAPI backend, summarizes it using **Google Gemini**, and lets the user **view and download a simplified PDF summary**.

---

## 🚀 Features

- ✅ Detects Terms & Conditions text from web pages
- 🤖 Summarizes using Google Gemini (models/gemini-pro)
- 📤 Sends data to a FastAPI backend for processing
- 🧾 Shows the summary in the Chrome popup
- 📄 Lets users **download the summary as a PDF**
- 🔐 Uses `.env` file to securely store API keys

---

## 🧠 Tech Stack

| Frontend | Backend  | AI / NLP       |
|----------|----------|----------------|
| HTML, JS | FastAPI  | Gemini (Google Generative AI) |
| Chrome Extension API | Python | dotenv |

---

## 🧑‍💻 Folder Structure

TandC/

│

├── backend/

│ ├── main.py

│ ├── summarizer.py

│ ├── requirements.txt

│ ├── .env (not pushed)

│

├── extension/

│ ├── manifest.json

│ ├── popup.html

│ ├── popup.js

│ ├── icon16.png (etc.)

│

├── README.md

├── .gitignore

## ⚙️ Setup Instructions

### ✅ 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/terms-and-conditions-summarizer.git
cd terms-and-conditions-summarizer
```
### ✅ 2. Backend Setup (FastAPI)
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # On Windows
pip install -r requirements.txt
```
### Create a .env file:
```bash
env
GEMINI_API_KEY=your_google_api_key_here
```
### Run the backend:

```bash
uvicorn main:app --reload
```

### Screenshots
![Screenshot 2025-06-25 131640](https://github.com/user-attachments/assets/91b0a75b-a0e1-4959-a540-6f91394f66d4)
![Screenshot 2025-06-25 131703](https://github.com/user-attachments/assets/79a22fee-9615-4a98-b5d9-073ef8c6425c)
![Screenshot 2025-06-25 131912](https://github.com/user-attachments/assets/b988a2b0-e6ef-44d4-ba97-e5990cdf079f)
