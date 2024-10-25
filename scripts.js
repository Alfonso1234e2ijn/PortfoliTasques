document.addEventListener("DOMContentLoaded", function () {
  const text =
    "I am a dedicated and hardworking student who consistently strives for excellence in all my endeavors. I take pride in my punctuality and reliability, always ensuring that I meet deadlines and commitments. My strong work ethic drives me to be proactive in my studies, seeking to understand concepts deeply and apply them effectively. I believe that continuous learning is key to personal and professional growth, and I actively engage in projects that challenge me.";
  const typingTextElement = document.getElementById("typing-text");
  let index = 0; // Current character index

  function type() {
    if (index < text.length) {
      typingTextElement.textContent += text.charAt(index); // Add one character
      index++;
      setTimeout(type, 100); // Adjust the speed here (100ms per character)
    }
  }

  // Start typing effect after a short delay
  setTimeout(type, 500); // Starts after 500ms
});

// Seleccionar todos los enlaces de navegación
const navLinks = document.querySelectorAll("nav a");

// Función para resaltar el enlace activo
function highlightActiveLink() {
  navLinks.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("active"); // Añadir la clase 'active' si coincide con la URL actual
    }
  });
}

// Llamar a la función cuando se carga la página
document.addEventListener("DOMContentLoaded", highlightActiveLink);
