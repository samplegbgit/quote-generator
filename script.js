const q=document.getElementById("quote");
const a=document.getElementById("author");
const b=document.getElementById("newQuote");
const copyBtn=document.createElement("button");
copyBtn.textContent="Copy Quote";
document.querySelector(".container").appendChild(copyBtn);

function getQuote(){
  fetch("https://type.fit/api/quotes").then(r=>r.json()).then(d=>{
    const rand=d[Math.floor(Math.random()*d.length)];
    q.textContent=`"${rand.text}"`;
    a.textContent=rand.author?`- ${rand.author}`:"- Unknown";
  });
}
b.onclick=getQuote;
copyBtn.onclick=()=>navigator.clipboard.writeText(`${q.textContent} ${a.textContent}`);
getQuote();
