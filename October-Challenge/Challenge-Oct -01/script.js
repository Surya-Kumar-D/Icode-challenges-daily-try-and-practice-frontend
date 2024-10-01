const slider = document.querySelector(".slider");
const images = slider.querySelectorAll("img");
let currentImage = 0;
const interval = 5000;

function autoScroll() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  slider.scrollTo({
    left: slider.scrollWidth * (currentImage / images.length),
    behavior: "smooth",
  });
  setTimeout(autoScroll, interval);
}
setTimeout(autoScroll, interval);
