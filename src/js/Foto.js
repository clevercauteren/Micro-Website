document.getElementById("CurrentYear").innerText = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".FotosContent img");
  const FSF = document.getElementById("lightboxFullscreenFoto");
  const FSFImage = document.getElementById("FullscreenFotoImage");
  const closeBtn = document.querySelector(".FullscreenFoto-close");
  const prevBtn = document.querySelector(".FullscreenFoto-prev");
  const nextBtn = document.querySelector(".FullscreenFoto-next");

  let currentIndex = 0;

  function openFSF(index) {
    currentIndex = index;
    FSFImage.src = images[currentIndex].src;
    FSF.style.display = "flex";
  }

  function closeFSF() {
    FSF.style.display = "none";
  }

  function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    FSFImage.src = images[currentIndex].src;
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    FSFImage.src = images[currentIndex].src;
  }

  images.forEach((img, index) => {
    img.addEventListener("click", () => openFSF(index));
  });

  closeBtn.addEventListener("click", closeFSF);
  prevBtn.addEventListener("click", showPrevImage);
  nextBtn.addEventListener("click", showNextImage);

  window.addEventListener("click", (event) => {
    if (event.target === FSF) {
      closeFSF();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeFSF();
    if (event.key === "ArrowLeft") showPrevImage();
    if (event.key === "ArrowRight") showNextImage();
  });
});

// Animation on scroll
const fotosDivs = document.querySelectorAll(".Fotos div");

// Voeg een dynamische vertraging toe aan elk element
fotosDivs.forEach((div, index) => {
  div.style.animationDelay = `${index * 0.3}s`; // 0.3s vertraging per element
});
