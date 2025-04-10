// testimonial
const btns = document.querySelectorAll(".testimonial-btn");
const slideRow = document.getElementById("slide-row");
const main = document.getElementById("testimonial");

let currentIndex = 0;

function updateSlide() {
  const mainWidth = main.offsetWidth;
  const translateValue = currentIndex * -mainWidth;
  slideRow.style.transform = `translateX(${translateValue}px)`;

  btns.forEach((btn, index) => {
    btn.classList.toggle("active", index === currentIndex);
  });
}

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currentIndex = index;
    updateSlide();
  });
});

window.addEventListener("resize", () => {
  updateSlide();
});

// autoplay
setInterval(() => {
  currentIndex = (currentIndex + 1) % btns.length;
  updateSlide();
}, 5000);
// change every 5 seconds
