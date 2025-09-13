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

// Ativa o flip ao clicar no botão
document.querySelectorAll('.btn-flip').forEach(btn => {
  btn.addEventListener('click', function() {
    const card = this.closest('.unidade-card');
    card.classList.toggle('flipped');
  });
});


/* Reveal on scroll - IntersectionObserver */
const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealItems.forEach(el => revealObserver.observe(el));

/* Modal logic + typewriter effect */
function openMemberModal(buttonOrEl) {
  // recover card element (the button might be inside)
  const card = buttonOrEl.closest ? buttonOrEl.closest('.membro-card') : buttonOrEl;
  if (!card) return;

  const name = card.getAttribute('data-name') || '';
  const role = card.getAttribute('data-role') || '';
  const bio = card.getAttribute('data-bio') || '';
  const photoEl = card.querySelector('.membro-photo img');
  const photoSrc = photoEl ? photoEl.getAttribute('src') : '';

  // populate modal
  document.getElementById('member-modal-name').innerText = name;
  document.getElementById('member-modal-role').innerText = role;
  document.getElementById('modal-photo').setAttribute('src', photoSrc);
  document.getElementById('modal-photo').setAttribute('alt', name);

  const bioContainer = document.getElementById('member-modal-bio');
  bioContainer.textContent = ''; // clear
  openModalUI();

  // Typewriter effect for bio
  typewriter(bioContainer, bio, 800); // duration ~800ms? adjust below
}



/* open / close UI */
function openModalUI() {
  const modal = document.getElementById('member-modal');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // lock scroll
}
function closeMemberModal() {
  const modal = document.getElementById('member-modal');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; // restore scroll
}

/* Close modal on Esc */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMemberModal();
});

/* Typewriter util: duration in ms */
function typewriter(element, text, duration) {
  element.textContent = '';
  const total = text.length;
  if (total === 0) return;
  // clamp duration between 600ms and 5000ms for usability
  const dur = Math.max(600, Math.min(duration || 2000, 5000));
  const interval = dur / total;
  let i = 0;
  const timer = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i >= total) clearInterval(timer);
  }, interval);
}
