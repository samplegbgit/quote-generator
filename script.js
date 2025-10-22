const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const btn = document.getElementById("newQuote");

btn.onclick = () => {
  fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then(data => {
      const random = data[Math.floor(Math.random()*data.length)];
      quoteEl.textContent = `"${random.text}"`;
      authorEl.textContent = random.author ? `- ${random.author}` : "- Unknown";
    });
};
