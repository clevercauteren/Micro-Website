window.addEventListener('scroll', function() {
    const parallax = document.querySelector('body');
    let scrollPosition = window.pageYOffset; // Verkrijgt de huidige scrollpositie
    parallax.style.backgroundPosition = `center ${(scrollPosition * (1 / 3))}px`; // Verander de achtergrondpositie, maar trager dan scrollen
  });
  