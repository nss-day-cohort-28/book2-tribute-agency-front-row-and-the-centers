let slideIndex = 1;
showSlides(slideIndex);

// Next/ Previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++){
    slides[i].style.opacity = "0.5";
  }
  slides[slideIndex-1].style.opacity = "1";
}