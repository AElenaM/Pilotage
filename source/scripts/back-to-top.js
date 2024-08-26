window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const backToTopButton = document.querySelector('.back-to-top');

  if (scrollPosition > 300) { // Показываем кнопку после прокрутки на 300px
      backToTopButton.classList.add('show');
  } else {
      backToTopButton.classList.remove('show');
  }
});

document.querySelector('.back-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
