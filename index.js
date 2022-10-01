var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    gragCursor : 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets : true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
           slidesPerView : 1, 
        },
        520: {
           slidesPerView : 1, 
        },
        950: {
           slidesPerView : 2, 
        },
    },
});