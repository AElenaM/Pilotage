// source/scripts/back-to-top.js
window.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY;
  const backToTopButton = document.querySelector(".back-to-top");
  if (scrollPosition > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});
document.querySelector(".back-to-top").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
//# sourceMappingURL=back-to-top.js.map
