jQuery(document).ready(function() {
    var sticky = new Sticky('.cont__menu');
    var sticky = new Sticky('.prf_header--contenedor');
      //initialize swiper when document ready
    var mySwiper = new Swiper ('.cont__menu .content-filter', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView:4

    });
});