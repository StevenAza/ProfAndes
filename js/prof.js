

jQuery(document).ready(function() {

  switch (localStorage.getItem("posicion")) {
    case "arriba":
      jQuery(".prof__container").addClass("pr_item__top");
      jQuery(".prof__container").removeClass("pr_item__left pr_item__right");
      break;
    case "izquierda":
      jQuery(".prof__container").addClass("pr_item__left");
      jQuery(".prof__container").removeClass("pr_item__right pr_item__top");
      break;  
    case "derecha":
      jQuery(".prof__container").addClass("pr_item__right");
      jQuery(".prof__container").removeClass("pr_item__top pr_item__left");
      break; 
  }
  switch (localStorage.getItem("tema")) {
    case "material":
      jQuery(".prof__container").addClass("prof_style__material");
      jQuery(".prof__container").removeClass("prof_style__classic");
      break;
    case "clasico":
      jQuery(".prof__container").addClass("prof_style__classic");
      jQuery(".prof__container").removeClass("prof_style__materialp");
      break;  
  }
  if(jQuery(".pr_item__left").length > 0) {
    toSide();
    var sticky = new Sticky('.pr_item__left .sticky--side');
  
  }
  if(jQuery(".pr_item__top").length > 0) {
    jQuery('.type_custom__select').niceSelect();
    var sticky = new Sticky('.pr_item__top .container_filters');
    jQuery(".container_filters .type_row__inp .type_custom__inline").remove();
       // ----------------------------------------
    // OPCIÓN DE MINIMIZAR Y MAXIMIZAR
     // ----------------------------------------
     jQuery(".option_row__fixed .btn_option").click(function () {
      if(!jQuery(this).hasClass("unclosed")) {
        jQuery(".option_row__fixed .btn_option").addClass("unclosed");
        jQuery(".option_row__fixed .btn_option.initial").removeClass("initial");
        jQuery(".option_row__fixed label").text("Anclar");
        sticky.destroy();
        sticky.update(); 
      }
      else {
        jQuery(".option_row__fixed .btn_option.unclosed").removeClass("unclosed");
        jQuery(".option_row__fixed .btn_option").addClass("initial");  
        sticky = new Sticky('.container_filters');
        jQuery(".option_row__fixed label").text("Desanclar");
        sticky.update();
      }
    });
    jQuery(".option_row__mini .btn_option").click(function () {
      if(jQuery(this).hasClass("minimal")) {

        jQuery(".option_row__mini .btn_option.minimal").removeClass("minimal");
        jQuery(".container_filters").addClass("mini");

        jQuery(".option_row__mini .btn_option .ico_opt").removeClass("la-compress-arrows-alt");
        jQuery(".option_row__mini .btn_option .ico_opt").addClass("la-expand");
        jQuery(".option_row__mini label , .option_row__fixed label, .container_filters__type .type_row__label label, .container_filters__query .filter_row__label label").hide();
        jQuery(".container_filters__query .filter_row__inp input").attr("placeholder", jQuery(".container_filters__query .filter_row__label label").text()); 
        jQuery(".option_row__mini .btn_option").addClass("maxi");
      }
      else {
      

        jQuery(".option_row__mini .btn_option.maxi").removeClass("maxi");
        jQuery(".option_row__mini .btn_option").addClass("minimal");  
        jQuery(".container_filters").removeClass("mini");
        jQuery(".option_row__mini .btn_option .ico_opt").addClass("la-compress-arrows-alt");
        jQuery(".option_row__mini .btn_option .ico_opt").removeClass("la-expand");
        jQuery(".container_filters__query .filter_row__inp input").attr("placeholder", jQuery(".container_filters__query .filter_row__label label").text()); 
        jQuery(".option_row__mini label").show();
        jQuery(".option_row__mini label , .option_row__fixed label, .container_filters__type .type_row__label label, .container_filters__query .filter_row__label label").show();
      }
    });
  }
  if(jQuery(".pr_item__right").length > 0) {

    toSide();
    var sticky = new Sticky('.pr_item__right .sticky--side');
    jQuery(".container_filters .btn-group-bd .btn-group-bd__icon").removeClass("la-long-arrow-alt-right").addClass("la-long-arrow-alt-left");
  }

  if(jQuery(".prof_style__material").length > 0 ) {
    rippleCustom('.option_row .btn_option');
    rippleCustom('a#toTop');
    rippleCustom('.prof-list-item .pr_card__info');

    jQuery("#input-search-string").focusin(  
      function(){  
        jQuery(".container_filters__query .filter_row__label").addClass("focus-active");

      }).focusout(  
      function(){  
        if(jQuery(this).val() == "") {
          jQuery(".container_filters__query .filter_row__label").removeClass("focus-active");
        }
      });

  }
    
  function toSide() {
    jQuery(".prof__container .container_filters").addClass("col-xs-12 col-sm-2 col-md-3 col-lg-3");
    jQuery(".prof__container .prof_list__main").addClass("col-md-9 col-lg-9 col-xs-12 col-sm-8");
    jQuery(".prof__container .container_filters .container").addClass("sticky--side");
    jQuery(".prof__container .container_filters .sticky--side").removeClass("container");
    jQuery(".prof__container .prof_list__main .no-prof-items .container").removeClass("container");
    jQuery(".container_filters .container_filters__options").detach().appendTo('.sticky--side');
    jQuery(".container_filters .container_filters__options .option_row__fixed label").text("Lista");
    jQuery(".container_filters .container_filters__options .option_row__fixed .btn_option .ico_opt").removeClass("la-thumbtack").addClass("la-stream");
    jQuery(".container_filters .container_filters__options .option_row__mini label").text("Cuadrícula");
    jQuery(".container_filters .container_filters__options .option_row__mini .btn_option .ico_opt").removeClass("la-compress-arrows-alt").addClass("la-border-all");
    jQuery(".container_filters .type_row__inp .type_custom__select").remove();
    var consticky = jQuery(".prof__container .container_filters .sticky--side").html();
    jQuery(".prof__container .container_filters .sticky--side > div[class*='container_filters']").remove();
    jQuery(".prof__container .container_filters .sticky--side").append("<div class='sticky_row'></div>");
    jQuery(".sticky_row").append(consticky);
    jQuery(".option_row__fixed .btn_option").click(function () {
      jQuery(".prof__container .prof_list__main").addClass("is_list").removeClass("is_grid");
      jQuery(".prof__container .prof-list-item").removeClass("col-md-4 col-sm-4 col-lg-4").addClass("col-lg-12 col-md-12 col-sm-12");
    });
    jQuery(".option_row__mini .btn_option").click(function () {
      jQuery(".prof__container .prof_list__main").addClass("is_grid").removeClass("is_list");
      jQuery(".prof__container .prof-list-item").removeClass("col-lg-12 col-md-12 col-sm-12").addClass("col-md-4 col-sm-4 col-lg-4");
    });
  }
 
    // ----------------------------------------
    //             POSICIONES
    // ----------------------------------------
    jQuery("a.escoger_posicion").click(function(){
      var posicion = jQuery(this).attr("data-position");
      localStorage.setItem("posicion", posicion);
      location.reload();
    });
    jQuery("a[data-tema]").click(function(){
      var tema = jQuery(this).attr("data-tema");
      localStorage.setItem("tema", tema);
      location.reload();
    });

    // --------------------------------
    //      SCROLL TO TOP
    // ---------------------------------
    var btn = $('#toTop');
    jQuery(window).scroll(function() {
      if (jQuery(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    btn.on('click', function(e) {
      e.preventDefault();
      jQuery('html, body').animate({scrollTop:0}, '300');
    });
    const list = document.querySelectorAll(".list");
    for (i = 0; i < list.length; i++) {
     list[i].addEventListener("click", accordion);
  }
  function accordion(e) {
     e.stopPropagation();
     if (this.classList.contains("active")) {
        this.classList.remove("active");
     } else if (this.parentElement.parentElement.classList.contains("active")) {
        this.classList.add("active");
     } else {
        for (i = 0; i < list.length; i++) {
           list[i].classList.remove("active");
        }
        this.classList.add("active");
     }
  }
});

function rippleCustom(elem) {
  window.rippler = $.ripple(elem, {
    debug: true,
    multi: true
  });
}

