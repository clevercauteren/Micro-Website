window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset; // Verkrijgt de huidige scrollpositie
    parallax.style.backgroundPosition = `center ${(scrollPosition * 0.2) - 500}px`; // Verander de achtergrondpositie, maar trager dan scrollen
  });
  