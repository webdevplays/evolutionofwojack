document.getElementById("copy").addEventListener("click", function () {
  // Get the token text
  const tokenText = document.getElementById("token").innerText;

  // Copy to clipboard
  navigator.clipboard
    .writeText(tokenText)
    .then(() => {
      // Optional feedback to user
      const copyBtn = document.getElementById("copy");
      const originalText = copyBtn.innerText;
      copyBtn.innerText = "COPIED!";
      setTimeout(() => (copyBtn.innerText = originalText), 1500);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
});
