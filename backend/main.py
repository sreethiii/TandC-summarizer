from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from summarizer import summarize_text

app = FastAPI()

# Allow frontend extension to call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextInput(BaseModel):
    text: str

@app.post("/summarize")
async def summarize(input: TextInput):
    summary = summarize_text(input.text)
    return {"summary": summary}
