document.getElementById("CurrentYear").innerText = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".photo-item img");
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
