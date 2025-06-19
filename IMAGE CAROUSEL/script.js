const images = document.querySelectorAll(".carousel-image");
const track = document.querySelector(".carousel-track");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let counter = 0;

function updateSlider() {
  track.style.transform = `translateX(-${counter * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  counter = (counter + 1) % images.length;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  counter = (counter - 1 + images.length) % images.length;
  updateSlider();
});
