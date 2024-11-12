// source/scripts/index-slider.js
var carousel = document.getElementById("carousel");
var indicatorsContainer = document.getElementById("indicatorContainer");
var items = document.querySelectorAll(".carousel-item");
var currentIndex = 0;
function updateIndicators() {
  indicatorsContainer.innerHTML = "";
  items.forEach((_, index) => {
    const indicator = document.createElement("div");
    indicator.className = "indicator";
    if (index === currentIndex) {
      indicator.classList.add("active");
    }
    indicator.addEventListener("click", () => {
      goToSlide(index);
    });
    indicatorsContainer.appendChild(indicator);
  });
}
function goToSlide(index) {
  currentIndex = (index + items.length) % items.length;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateIndicators();
}
function prevSlide() {
  goToSlide(currentIndex - 1);
}
function nextSlide() {
  goToSlide(currentIndex + 1);
}
document.getElementById("prevBtn").addEventListener("click", prevSlide);
document.getElementById("nextBtn").addEventListener("click", nextSlide);
updateIndicators();
goToSlide(0);
var startX = 0;
var endX = 0;
carousel.addEventListener("touchstart", (event) => {
  startX = event.touches[0].clientX;
});
carousel.addEventListener("touchend", (event) => {
  endX = event.changedTouches[0].clientX;
  if (startX - endX > 50) {
    nextSlide();
  } else if (endX - startX > 50) {
    prevSlide();
  }
});
//# sourceMappingURL=index-slider.js.map
