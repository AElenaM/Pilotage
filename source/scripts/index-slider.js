
  const carousel = document.getElementById('carousel');
  const indicatorsContainer = document.getElementById('indicatorContainer');
  const items = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  function updateIndicators() {
      indicatorsContainer.innerHTML = '';
      items.forEach((_, index) => {
          const indicator = document.createElement('div');
          indicator.className = 'indicator';
          if (index === currentIndex) {
              indicator.classList.add('active');
          }
          indicator.addEventListener('click', () => {
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

  document.getElementById('prevBtn').addEventListener('click', prevSlide);
  document.getElementById('nextBtn').addEventListener('click', nextSlide);

  // Initialize
  updateIndicators();
  goToSlide(0);

  // Add touch support
  let startX = 0;
  let endX = 0;

  carousel.addEventListener('touchstart', (event) => {
      startX = event.touches[0].clientX;
  });

  carousel.addEventListener('touchend', (event) => {
      endX = event.changedTouches[0].clientX;
      if (startX - endX > 50) {
          nextSlide();
      } else if (endX - startX > 50) {
          prevSlide();
      }
  });

