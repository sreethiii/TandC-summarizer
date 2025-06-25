// content.js

// Keywords to match in the DOM
const keywords = [
  "terms and conditions",
  "terms of service",
  "privacy policy",
  "user agreement",
  "terms of use"
];

// Convert keyword array to lowercase for matching
const keywordRegex = new RegExp(keywords.join("|"), "i");

// Function to extract large blocks of text containing keywords
function extractTandCText() {
  const elements = document.querySelectorAll("p, div, section");

  let extractedText = "";

  elements.forEach((el) => {
    const text = el.innerText;
    if (text && keywordRegex.test(text) && text.length > 200) {
      extractedText += text.trim() + "\n\n";
    }
  });

  return extractedText;
}

// Function to send extracted text to backend API
async function sendToBackend(summaryText) {
  if (!summaryText) return;

  try {
    const response = await fetch("http://localhost:8000/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: summaryText })
    });

    const result = await response.json();

    // Store result in local storage for popup
    chrome.storage.local.set({ summary: result.summary });

    alert("✅ T&C Summary Ready! Click the extension to view.");
  } catch (error) {
    console.error("❌ Error sending to backend:", error);
  }
}

// Run the script on page load
window.addEventListener("load", () => {
  const tandcText = extractTandCText();
  if (tandcText.length > 500) {
    sendToBackend(tandcText);
  }
});
