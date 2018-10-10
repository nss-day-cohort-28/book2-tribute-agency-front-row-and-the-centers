var carousel = $(".slideshow-slide"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}

// let myShow = w3.slideshow(".slideshow-slide", 0);

// let slideIndex = 1;
// showSlides(slideIndex);
// let firstVal = 0;

// // Next/ Previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function previousSlides(n){
//   showSlides(slideIndex += n);
// }

// function showSlides(n) {
//   // var i;
//   let firstVal = 0;
//   let slides = document.getElementsByClassName("slideshow-slide");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (let i = 0; i < slides.length; i++){
//     slides[i].style.opacity = "0.5";
//   }
//   firstVal += 10;
//   slides[slideIndex-1].style.opacity = "1";
//   document.getElementsByClassName("slideshow-slide").style.left = "-" + firstVal + px;
// }

// let runCarousel, runTimer;
// firstval = 0;
// secondval = 0;

// function Carousel (){
//   firstval += 10;
//   document.getElementById('container').style.left = "-" + firstval + "px";
//   document.getElementById('another div').innerHTML = "-" + firstval;
// }

//if browser does noe support getElementbyId then exit
// let step = 1;
// if ( !document.getElementById ) {
//     return;
// }
// let src = 'career/photo'+step+'.jpg';
// document.getElementsByClassName('slideshow-slide').src = src;

// function slideForward(){
//   //files are named as image1, image2....
//   step++;
//   let src = 'career/photo'+step+'.jpg';
//   document.getElementsByClassName('slideshow-slide').src = src;
//   }

// function slideBack(){
//   step--;
//   var src = 'career/photo'+step'.jpg';
//   document.getElementsByClassName('slideshow-slide').src = src;
// }

// let i = 1;
// let images = [];

// images[0] = "career/photo1.jpg";
// images[1] = "career/photo2.jpg";
// images[2] = "career/photo3.jpg";

// let nextImage = function () {
  
//   if (i < images.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }
//   document.getElementById("slideshow-slide").src = images[i];
// }

// let previousImage = function () {
//   if (i>0){
//     i--;
//   } else{
//     i = images.length-1;
//   }
//   document.getElementById("slideshow-slide").src = images[i];
// }

// document.getElementById("next").addEventListener("click",nextImage);
// document.getElementById("previous").addEventListener("click", previousImage);