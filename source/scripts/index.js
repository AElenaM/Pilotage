const slides = document.querySelector('.sliders-images');
const images = document.querySelectorAll('.sliders-images__item');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

  let index = 0;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  function showSlide(index) {
    const slideWidth = images[index].clientWidth;
    slides.style.transform = `translateX(${-index * slideWidth}px)`;
  }

  function nextSlide() {
    index = (index + 1) %
    images.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    showSlide(index);
  }

  nextBtn.addEventListener(`click`, nextSlide);

  prevBtn.addEventListener(`click`, prevSlide);

   // Обработка начала касания
   slides.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

// Обработка движения пальца
slides.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    slides.style.transform = `translateX(${(-index * images[0].clientWidth) + deltaX}px)`;
});

// Обработка окончания касания
slides.addEventListener('touchend', () => {
    isDragging = false;
    const deltaX = currentX - startX;

    // Если сдвиг больше 50px, переключаем слайд
    if (deltaX > 50) {
        prevSlide();
    } else if (deltaX < -50) {
        nextSlide();
    } else {
        showSlide(index);
    }
  // Сброс переменных
  startX = 0;
  currentX = 0;
  });
