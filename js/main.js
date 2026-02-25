// Menú hamburguesa para móviles
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Voz en off accesible con Web Speech API
const voiceButton = document.getElementById('voice-toggle');
let isSpeaking = false;
let utterance;

voiceButton.addEventListener('click', () => {
  if (!isSpeaking) {
    // Selecciona todo el texto que quieras leer
    const textToRead = document.querySelector('main').innerText;

    // Crear narración
    utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'es-ES'; // idioma español
    utterance.rate = 1;       // velocidad normal
    utterance.pitch = 1;      // tono normal

    // Iniciar narración
    speechSynthesis.speak(utterance);
    isSpeaking = true;
    voiceButton.textContent = "🔇 Detener Narración";

    // Cuando termine de hablar, resetear estado
    utterance.onend = () => {
      isSpeaking = false;
      voiceButton.textContent = "🔊 Activar Narración";
    };
  } else {
    // Detener narración
    speechSynthesis.cancel();
    isSpeaking = false;
    voiceButton.textContent = "🔊 Activar Narración";
  }
});


