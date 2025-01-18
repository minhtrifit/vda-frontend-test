// ============================== Navbar logo ==============================
const navbarLogo = document.querySelector(".navbar-logo");

navbarLogo.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ============================== Flash sale slider ==============================
const flashSaleSwiper = new Swiper(".swiper.flash-sale-swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 10,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// ============================== Product category slider ==============================
var swiper = new Swiper(".product-category-swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 10,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
