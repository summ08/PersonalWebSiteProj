document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const intervalTime = 3000; // 3 saniye

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.remove('active');
          if (i === index) {
              slide.classList.add('active');
          }
      });
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
  }

  setInterval(nextSlide, intervalTime);
  showSlide(currentIndex); // İlk slaytı göster
});
