// popup.js

document.addEventListener("DOMContentLoaded", function () {
  const summaryElement = document.getElementById("summary");
  const downloadBtn = document.getElementById("downloadBtn");

  chrome.storage.local.get(["summary"], function (result) {
    if (result.summary && result.summary.length > 0) {
      summaryElement.textContent = result.summary;
    } else {
      summaryElement.textContent = "⚠️ No summary found.";
    }
  });

  downloadBtn.addEventListener("click", function () {
    const summaryText = summaryElement.textContent;
    if (!summaryText || summaryText.includes("No summary")) {
      alert("No summary available to download.");
      return;
    }

    // Create a Blob for the PDF
    const blob = new Blob([summaryText], { type: "application/pdf" });

    // Create a URL and auto-download
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "TandC_Summary.pdf";
    a.click();
    URL.revokeObjectURL(url);
  });
});
