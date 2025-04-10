// img shadow click
document.querySelectorAll(".shadow_click").forEach((img) => {
  img.addEventListener("click", function () {
    this.classList.add("bounce"); // Add bounce effect

    setTimeout(() => {
      window.location.href = "courses.html"; // Redirect after animation
    }, 400); // Slight delay for animation effect
  });
});



// header - navbar
const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");
const navItemEls = document.querySelectorAll(".nav__item");
const body = document.body;

hamburgerEl.addEventListener("click", () => {
  navEl.classList.toggle("nav--open");
  hamburgerEl.classList.toggle("hamburger--open");

  // Toggle overflow hidden on body
  if (body.style.overflow === "hidden") {
    body.style.overflow = ""; // Remove overflow hidden
  } else {
    body.style.overflow = "hidden"; // Add overflow hidden
  }
});

navItemEls.forEach((navItemEl) => {
  navItemEl.addEventListener("click", () => {
    navEl.classList.remove("nav--open");
    hamburgerEl.classList.remove("hamburger--open");
  });
});



// progress bar
window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress-bar").style.width = scrollPercent + "%";

  // Term -	Meaning
  // window.scrollY	- How far you’ve scrolled from the top (in px)
  // document.documentElement.scrollHeight - Total height of the page (including off-screen part)
  // window.innerHeight -	Height of the visible part of the browser (viewport)
  // scrollPercent -	Calculates what % of the page has been scrolled
});
