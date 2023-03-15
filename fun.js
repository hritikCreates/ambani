const carousel = document.querySelector(".carousel__container");
const carouselItems = document.querySelectorAll(".carousel__item");
const prevButton = document.querySelector(".carousel__button--left");
const nextButton = document.querySelector(".carousel__button--right");

let currentIndex = 0;
const maxIndex = carouselItems.length - 1;
const itemWidth = carouselItems[0].clientWidth;

function updateCarousel() {
  carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
});

// carousel 2
const carouselSlide = document.querySelector('.carousel-slide');
const cards = document.querySelectorAll('.card');

const cardWidth = cards[0].offsetWidth;
let slideIndex = 0;

window.addEventListener('resize', () => {
  cardWidth = cards[0].offsetWidth;
});

