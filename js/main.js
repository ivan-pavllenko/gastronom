$(document).ready(function () {
  // Swiper slider section popular

  var hotelSlider = new Swiper(".popular-slider", {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 50,

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 480px
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: ".popular__button_next",
      prevEl: ".popular__button_prev",
    },
    // If we need pagination
    pagination: {
      el: ".popular__swiper-pagination",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  // Swiper slider section reviews

  var hotelSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 100,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews__button_next",
      prevEl: ".reviews__button_prev",
    },
    // If we need pagination
    pagination: {
      el: ".reviews__swiper-pagination",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  // При клике на кнопку "menu-button" появляется mobile menu
  // обращение на jQuery

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-navigation").toggleClass("navbar-navigation_visible");
    $(".menu-button").toggleClass("menu-button_active");
  });

  var menuLink = $(".menu__link");
  menuLink.on("click", function () {
    $(".navbar-navigation").removeClass("navbar-navigation_visible");
    $(".menu-button").removeClass("menu-button_active");
  });
  // Маска для номера телефона

  $(document).ready(function () {
    $("#hot-input").mask("+8 (999) 999-99-99");
  });
  $(document).ready(function () {
    $("#feedback-input").mask("+8 (999) 999-99-99");
  });

  // При клике на кнопку появляется modal windows #hero-modal

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  var modalOverlay = $(".modal__overlay");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  modalOverlay.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay_visible");
    modalDialog.addClass("modal__dialog_visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  }
});
