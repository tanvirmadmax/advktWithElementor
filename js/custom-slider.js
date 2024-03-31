(function ($) {
    "use strict";
    $(document).ready(function () {

          /*
       Slider
       ============================*/
       $(".slider-wrapper").slick({
        slidesToShow: 1,
        infinite: true,
        autoplay: false,
        draggable: true,
        arrows: true,
        slidesToScroll: 1,
        loop: true,
        dots: true,
        speed: 1500,
        rtl: false,
        prevArrow:
            "<button type='button' class='hero-slider-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
        nextArrow:
            "<button type='button' class='hero-slider-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    autoplay: true,
                },
            },
        ],
    });

    /*
   Info Card Slider
   ============================*/
    $("#info_card_slider_wrapper").slick({
        slidesToShow: 3,
        infinite: true,
        autoplay: true,
        draggable: true,
        arrows: true,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 1500,
        rtl: false,
        prevArrow:
            "<button type='button' class='info-card-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
        nextArrow:
            "<button type='button' class='info-card-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    /*
   Testimonial Slider
   ============================*/
    $("#testimonial_one").slick({
        slidesToShow: 1,
        infinite: true,
        autoplay: false,
        draggable: true,
        arrows: false,
        slidesToScroll: 1,
        loop: true,
        dots: true,
        speed: 800,
        rtl: false,
        prevArrow:
            "<button type='button' class='testimonial-arrow-btn prev-btn'><i class='icon-arrow-left-2'></i></button>",
        nextArrow:
            "<button type='button' class='testimonial-arrow-btn next-btn active'><i class='icon-arrow-right-2'></i></button>",
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    autoplay: false,
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    });

    /*
   Testimonial Slider
   ============================*/
    $("#testimonial_two").slick({
        slidesToShow: 2,
        infinite: true,
        autoplay: true,
        draggable: true,
        arrows: true,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 1500,
        rtl: false,
        
        prevArrow:
        "<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-chevron-left'></i></button>",
        nextArrow:
        "<button type='button' class='testimonial-arrow-btn next-btn active'><i class='fa-solid fa-chevron-right'></i></button>",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                },
            },
        ],
    });
      /*
       portfolio Slider
       ============================*/
       $(".portfolio-slider").slick({
        slidesToShow: 4,
        infinite: true,
        autoplay: false,
        draggable: true,
        arrows: false,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 1500,
        rtl: false,
        responsive: [
           
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    /*
   Post Gallery Slider
   ============================*/
    $(".post-gallery").slick({
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        draggable: true,
        arrows: true,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 300,
        rtl: false,
        prevArrow:
            "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
        nextArrow:
            "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
    });
    /*
   Client Logo Slider
   ============================*/
    $(".client-logo-slider-wrapper").slick({
        slidesToShow: 6,
        infinite: true,
        autoplay: true,
        draggable: true,
        arrows: false,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 1500,
        rtl: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    });

    // Team Area slider
    $(".team-area-slider-wrapper").slick({
        slidesToShow: 4,
        infinite: true,
        autoplay: true,
        draggable: true,
        arrows: false,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 1500,
        rtl: false,
        responsive: [
           
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
     /*
       Feature Slider JS
       ============================*/
       $(".feature-slider-wrapper").slick({
        slidesToShow: 3,
        infinite: true,
        autoplay: true,
        draggable: true,
        arrows: false,
        slidesToScroll: 1,
        centerMode: true,
        loop: true,
        dots: true,
        speed: 1500,
        rtl: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });


});
})(jQuery);