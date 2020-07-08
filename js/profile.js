jQuery(document).ready(function() {

    var element = jQuery(".timeline__year");
    var sticky = new Sticky('.cont__menu');
    jQuery(".timeline__year").click(function () {
      jQuery(this).parent().find(".timeline__content").toggleClass("oculta_anio");
    });

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
    switch (localStorage.getItem("posicion_profile")) {
      case "arriba":
        jQuery(".main_teach").addClass("pr_item__top");
        jQuery(".main_teach").removeClass("pr_item__left pr_item__right");
        break;
      case "izquierda":
        jQuery(".main_teach").addClass("pr_item__left");
        jQuery(".main_teach").removeClass("pr_item__right pr_item__top");
        break;  
      case "derecha":
        jQuery(".main_teach").addClass("pr_item__right");
        jQuery(".main_teach").removeClass("pr_item__top pr_item__left");
        break; 
    }
    switch (localStorage.getItem("tema_profile")) {
      case "material":
        jQuery(".main_teach").addClass("prof_style__material");
        jQuery(".main_teach").removeClass("prof_style__classic prof_style__dark");
        break;
      case "clasico":
        jQuery(".main_teach").addClass("prof_style__classic");
        jQuery(".main_teach").removeClass("prof_style__material prof_style__dark");
        break;
      case "oscuro":
        jQuery(".main_teach").addClass("prof_style__dark");
        jQuery(".main_teach").removeClass("prof_style__material prof_style__classic");
        break;  
         
    }
 
    if(jQuery(".main_teach.prof_style__material").length > 0) {
      rippleCustom(".action_mas__btn");
     rippleCustom(".content-menu-filter .row_tab");
    }
    if(jQuery(".main_teach.pr_item__top").length  > 0) {
        jQuery(".main_teach .cont__header").removeClass("col-md-3 col-lg-4").addClass("col-md-12 col-lg-12");
        jQuery(".main_teach .con__information").removeClass("col-xs-11 col-sm-9 col-md-8 col-lg-8").addClass("col-xs-12 col-sm-12 col-md-12 col-lg-12");
    }

    if(jQuery(".main_teach.pr_item__left").length  > 0) {
      var sticky = new Sticky('.prf_header--contenedor');
    }
});

function rippleCustom(elem) {
  window.rippler = $.ripple(elem, {
    debug: true,
    multi: true
  });
}



