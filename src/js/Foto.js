document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".FotosContent img");
  const modal = document.getElementById("lightboxModal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentIndex = 0;

  function openModal(index) {
    currentIndex = index;
    modalImage.src = images[currentIndex].src;
    modal.style.display = "flex";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentIndex].src;
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImage.src = images[currentIndex].src;
  }

  images.forEach((img, index) => {
    img.addEventListener("click", () => openModal(index));
  });

  closeBtn.addEventListener("click", closeModal);
  prevBtn.addEventListener("click", showPrevImage);
  nextBtn.addEventListener("click", showNextImage);

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowLeft") showPrevImage();
    if (event.key === "ArrowRight") showNextImage();
  });
});
