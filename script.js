
let searchbtn = document.querySelector("#searchbtn");
let search_form = document.querySelector(".search-form");


let searchbtn2 = document.querySelector("#searchbtn2");
let cartitemscontainer = document.querySelector(".cartitemscontainer");


let searchbtn3 = document.querySelector("#searchbtn3");
let loginform = document.querySelector(".loginform");


let searchbtn4 = document.querySelector("#searchbtn4");
let mobilenav = document.querySelector(".mobilenav");



searchbtn4.addEventListener("click",()=>{
      mobilenav.classList.toggle("active");
    search_form.classList.remove("active");
    cartitemscontainer.classList.remove("active");
     loginform.classList.remove("active");
});



searchbtn.addEventListener("click",()=>{
    search_form.classList.toggle("active");
    cartitemscontainer.classList.remove("active");
     loginform.classList.remove("active");
      mobilenav.classList.remove("active");
});



searchbtn2.addEventListener("click",()=>{
    cartitemscontainer.classList.toggle("active");
    search_form.classList.remove("active");
    loginform.classList.remove("active");
          mobilenav.classList.remove("active");
});

searchbtn3.addEventListener("click",()=>{
    loginform.classList.toggle("active");
    search_form.classList.remove("active");
    cartitemscontainer.classList.remove("active");
          mobilenav.classList.remove("active");
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

// section

var swiper = new Swiper(".mySwiper", {});