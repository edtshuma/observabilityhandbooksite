const yearNode = document.getElementById("year");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const slideshows = document.querySelectorAll("[data-slideshow]");

slideshows.forEach((slideshow) => {
  const slides = Array.from(slideshow.querySelectorAll(".callout-image"));
  const controls = slideshow.querySelectorAll("[data-slide-dir]");
  let currentIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));

  if (slides.length < 2) {
    return;
  }

  if (currentIndex < 0) {
    currentIndex = 0;
    slides[0].classList.add("is-active");
  }

  const setActiveSlide = (nextIndex) => {
    slides[currentIndex].classList.remove("is-active");
    currentIndex = (nextIndex + slides.length) % slides.length;
    slides[currentIndex].classList.add("is-active");
  };

  controls.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.getAttribute("data-slide-dir");
      setActiveSlide(direction === "prev" ? currentIndex - 1 : currentIndex + 1);
    });
  });
});
