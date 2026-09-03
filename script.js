const openBtn = document.getElementById("openBtn");
const hero = document.getElementById("hero");
const letter = document.getElementById("letter");
const readyBtn = document.getElementById("readyBtn");
const toast = document.getElementById("toast");
const reply = document.getElementById("reply");

openBtn.addEventListener("click", () => {
  hero.style.display = "none";
  letter.classList.remove("hidden");
  window.scrollTo({top:0, behavior:"smooth"});
});

readyBtn.addEventListener("click", () => {
  reply.textContent = "✓ Status: SIAP. Tinggal buka Mobile Legends.";
  reply.style.color = "#ffb000";
  toast.classList.add("show");
  readyBtn.textContent = "✓ OKE, GUE IKUT";
  setTimeout(() => toast.classList.remove("show"), 2800);
});

// efek kecil saat tombol ditekan
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("mousedown", () => btn.style.transform = "translate(4px,4px)");
  btn.addEventListener("mouseup", () => btn.style.transform = "");
});
