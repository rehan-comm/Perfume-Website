// main poge slider code
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// footer newaletter

document.querySelector('.sub').addEventListener("click", function(){
  const newsemail = document.querySelector('.newsemail').value;
  if(newsemail === ""){
    alert("Fill The Follwing Please")
  }else{
    alert("Thanks For Subscribe Us")
  }

})