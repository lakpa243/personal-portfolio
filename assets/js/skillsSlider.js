 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,      // How many cards to show
      spaceBetween: 30,      // Space between cards
      loop: true,            // Makes it infinite
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: { slidesPerView: 1 }, // Show 1 card on mobile
        768: { slidesPerView: 2 }, // Show 2 on tablet
        1024: { slidesPerView: 3 } // Show 3 on desktop
      }
    });