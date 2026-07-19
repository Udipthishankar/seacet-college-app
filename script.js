const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
  navLinks.classList.remove("show");
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.innerHTML = "☰";
}

function openMenu() {
  navLinks.classList.add("show");
  menuBtn.setAttribute("aria-expanded", "true");
  menuBtn.innerHTML = "✕";
}

menuBtn.addEventListener("click", () => {
  const expanded = menuBtn.getAttribute("aria-expanded") === "true";
  if (expanded) {
    closeMenu();
  } else {
    openMenu();
  }
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    closeMenu();
  }
});
