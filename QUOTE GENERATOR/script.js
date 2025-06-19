const generate = document.querySelector("#generate");
const quoteText = document.querySelector("#quoteText");
const quoteTag = document.querySelector("#quoteTag");

async function fetchQuote() {
  try {
    const response = await fetch(
      "https://go-quote.azurewebsites.net/random-quote?format=json"
    );
    const data = await response.json();

    setTimeout(() => {
      quoteText.textContent = `"${data.text}"`;
      quoteTag.textContent = `#${data.tags?.[0] || "wisdom"}`;

      quoteText.style.animation = "fadeIn 0.6s forwards";
      quoteTag.style.animation = "fadeIn 0.6s forwards 0.2s";
    }, 200);
  } catch (error) {
    quoteText.textContent = "⚠️ Failed to fetch quote.";
    quoteTag.textContent = "";
    console.error(error);
  }
}

generate.addEventListener("click", fetchQuote);

fetchQuote();
