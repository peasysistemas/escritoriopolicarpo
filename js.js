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

window.addEventListener("load", () => {
  const heroBg = document.getElementById("hero-bg");
  const heroText = document.getElementById("hero-text");

  // Primeiro: anima o fundo (hero-bg)
  heroBg.classList.add("animate-bg");

  // Depois de 1s (quando terminar a primeira animação), entra o texto
  setTimeout(() => {
    heroText.classList.add("animate-text");
  }, 1500); 
});
