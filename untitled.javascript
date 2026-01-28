const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  result.style.display = "block";
});