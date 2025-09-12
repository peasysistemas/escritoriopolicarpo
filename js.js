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

// Efeito máquina de escrever para a seção "Sobre Nós"



 function typeEffect(element, text, duration, callback) {
    let i = 0;
    const totalChars = text.length;
    const interval = duration / totalChars; // velocidade calculada para durar "duration"

    element.textContent = "";

    const timer = setInterval(() => {
      element.textContent += text.charAt(i);
      i++;
      if (i === totalChars) {
        clearInterval(timer);
        if (callback) callback();
      }
    }, interval);
  }

  window.addEventListener("load", () => {
    const titulo = document.getElementById("sobre-title");
    const texto = document.getElementById("sobre-text");

    // Salva o conteúdo original
    const tituloTexto = titulo.textContent;
    const textoTexto = texto.textContent;

    // Apaga o conteúdo inicial
    titulo.textContent = "";
    texto.textContent = "";

    // Digita primeiro o título (4s) e depois o parágrafo (7s)
    typeEffect(titulo, tituloTexto, 2000, () => {
      typeEffect(texto, textoTexto, 7000);
    });
  });

// Efeito de expansão dos cards na seção "Areas de atuacao"

function toggleCard(card) {
  // Fecha todos os outros cards antes
  document.querySelectorAll('.card').forEach(c => {
    if (c !== card) c.classList.remove('active');
  });

  // Alterna o card clicado
  card.classList.toggle('active');
}
