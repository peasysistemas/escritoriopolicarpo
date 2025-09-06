const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Efeito do scroll no header
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.remove("transparent");
    navbar.classList.add("solid");
  } else {
    navbar.classList.remove("solid");
    navbar.classList.add("transparent");
  }
});

// Toggle do menu hamburguer
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});
