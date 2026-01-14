const slides = document.querySelectorAll(".slide");

window.addEventListener("scroll", () => {
  slides.forEach(slide => {
    const rect = slide.getBoundingClientRect();
    const center = window.innerHeight / 2;

    if (rect.top < center && rect.bottom > center) {
      slide.style.opacity = "1";
      slide.style.transform = "scale(1)";
    } else {
      slide.style.opacity = "0.6";
      slide.style.transform = "scale(0.95)";
    }
  });
});
