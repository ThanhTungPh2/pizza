const btn = document.getElementById('btn__link');
const header = document.getElementById('header');
var bodys = document.body;
window.addEventListener("scroll",myFunction);
function myFunction( ) {
  var html = document.documentElement.scrollTop;
  if(html >50){
    header.classList.add('show');
    btn.style.display="flex";
    if(html > 550){
      btn.classList.add('show');
    }
    else {
      btn.classList.remove('show');
    }
  }
  else{
    btn.style.display="none";

    header.classList.remove('show');
  }
}
$(document).ready(function () {
  $(".couter").counterUp({
      delay: 100,
      time: 1200,
  });
});
window.onload = function() {
  Particles.init({
    selector: '.background'
  });
};
const modal = document.querySelector(".modal");
const closes = document.querySelector(".modal__close");
const shows = document.querySelectorAll(".task__bar");

for (const show of shows) {
  show.addEventListener("click",even => {
   toggleModal();
  });
}
closes.addEventListener("click", even => {
  toggleModal();
});
modal.addEventListener("click",even => {
  if(even.currentTarget===even.target){
    toggleModal();
  }
});
function toggleModal() {
  if(getComputedStyle(modal).display === "flex") {
    modal.classList.add("modal--hidden");
   setTimeout(() =>{
    modal.style.display = "none";
    modal.classList.remove("modal--hidden","modal--show");
    document.body.style.overflow = "initial";
   },200)
  }
  else {
    modal.style.display = "flex";
    modal.classList.add("modal--show")
    document.body.style.overflow="hidden";
  }
}
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
var attributes1 = document.querySelectorAll(".About__image");
var attributes2 = document.querySelectorAll(".js-wrapper-text-odd");
var attributes3 = document.querySelectorAll(".js-wrapper-text-even");
if(window.innerWidth > 739){
  for(let attr of attributes2){
    setAttributes(attr,{"data-aos":"fade-down","data-aos-duration":"200","data-aos-delay":"100"});
  }
  for(let attr of attributes3){
    setAttributes(attr,{"data-aos":"fade-down","data-aos-duration":"200","data-aos-delay":"100"});
  }
  for(let attr of attributes1){
    setAttributes(attr,{"data-aos":"zoom-in","data-aos-easing":"ease-in-out-back","data-aos-duration":"500"});
  }
}
  