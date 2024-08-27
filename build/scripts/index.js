// source/scripts/index.js
var slides = document.querySelector(".sliders-images");
var images = document.querySelectorAll(".sliders-images__item");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var index = 0;
var startX = 0;
var currentX = 0;
var isDragging = false;
function showSlide(index2) {
  const slideWidth = images[index2].clientWidth;
  slides.style.transform = `translateX(${-index2 * slideWidth}px)`;
}
function nextSlide() {
  index = (index + 1) % images.length;
  showSlide(index);
}
function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  showSlide(index);
}
nextBtn.addEventListener(`click`, nextSlide);
prevBtn.addEventListener(`click`, prevSlide);
slides.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});
slides.addEventListener("touchmove", (e) => {
  if (!isDragging)
    return;
  currentX = e.touches[0].clientX;
  const deltaX = currentX - startX;
  slides.style.transform = `translateX(${-index * images[0].clientWidth + deltaX}px)`;
});
slides.addEventListener("touchend", () => {
  isDragging = false;
  const deltaX = currentX - startX;
  if (deltaX > 50) {
    prevSlide();
  } else if (deltaX < -50) {
    nextSlide();
  } else {
    showSlide(index);
  }
  startX = 0;
  currentX = 0;
});
//# sourceMappingURL=index.js.map
