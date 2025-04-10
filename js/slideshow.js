// Slideshow Functionality
let slideIndex = 1;
showSlides(slideIndex);
let autoSlide = setInterval(() => nextSlide(1), 4000); // Auto change every 3 seconds

// Thumbnail image controls
function currentSlide(n) {
  clearInterval(autoSlide); // Stop auto slide on manual click
  showSlides(slideIndex = n);
  autoSlide = setInterval(() => nextSlide(1), 3000); // Restart auto slide
}

// Function to move to the next slide
function nextSlide(n) {
  showSlides(slideIndex += n);
}

// Main function to show slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}