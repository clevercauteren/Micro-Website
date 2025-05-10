document.addEventListener('DOMContentLoaded', () => {
  const vakkenTabel = document.getElementById('vakken-tabel');
  const popup = document.getElementById('popup');
  const popupTitle = document.getElementById('popup-title');
  const popupDescription = document.getElementById('popup-description');
  const closeButton = document.getElementById('close-btn');

  // Laad de vakken vanuit vakken.json
  fetch('../Json/vakken.json')
    .then((response) => response.json())
    .then((vakken) => {
      // Voeg klikgebeurtenissen toe aan de SVG-iconen
      document.querySelectorAll('.info-icon').forEach((icon) => {
        icon.addEventListener('click', (event) => {
          const vakTitle = event.target.closest('svg').dataset.vak;
          const vakInfo = vakken[vakTitle];
          if (vakInfo) {
            popupTitle.textContent = vakInfo.title;
            popupDescription.textContent = vakInfo.description;
            popup.classList.remove('hidden');
          }
        });
      });
    })
    .catch(error => {
      console.error('Error loading vakken.json:', error);
    });

  // Verberg de pop-up wanneer op de sluitknop wordt geklikt
  closeButton.addEventListener('click', () => {
    popup.classList.add('hidden');
  });

  // Verberg de pop-up wanneer er buiten wordt geklikt
  window.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.classList.add('hidden');
    }
  });
});