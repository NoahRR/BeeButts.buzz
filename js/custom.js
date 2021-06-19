"use strict";
$(document).ready(function() {

    $("select").niceSelect();

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        AOS Animation Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    AOS.init();
    window.addEventListener("load", AOS.refresh);
    AOS.init({
        once: true
    })

    /*Mesonary active*/


    var $grid = $('.iso-grid-wrap');
    $grid.packery({
        // options
        itemSelector: '.isotope-item',
        // gutter: 15,
        resize: true
    });
    $grid.imagesLoaded().progress(function() {
        $grid.packery('layout');
    });


    var $gridMas = $('.iso-mas-grid-wrap');
    $gridMas.packery({
        // options
        itemSelector: '.isotope-mas-item',
        // gutter: 15,
        resize: true
    });
    $gridMas.imagesLoaded().progress(function() {
        $gridMas.packery('layout');
    });


    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $('#isotope-filters').on('click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });
    // bind filter button click
    $('#isotope-mas-filters').on('click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $gridMas.isotope({
            filter: filterValue
        });
    });

    // change is-checked class on buttons
    $('.isotope-nav').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'a', function() {
            $buttonGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
         Landing 2 Testimonial
     <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    if (jQuery(".testimonial-slider-l2-1").length > 0) {
        $('.testimonial-slider-l2-1').slick({

            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            swipe: true,
            infinite: true,
            autoplaySpeed: 2000,
            appendArrows: '.l2-slider-arrow-1',
            prevArrow: $('.prevl2'),
            nextArrow: $('.nextl2'),
            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        centerPadding: '10%',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerPadding: '20px',
                        slidesToShow: 1
                    }
                }

            ]
        });
    }


    /*l2 Testimonial slider button active*/

    $(document).ready(function() {
        $('.l2-slider-arrow-1 i').click(function() {
            $('.l2-slider-arrow-1 i').removeClass("slick-active");
            $(this).addClass("slick-active");
        });
    });

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
        Landing 5 Product Slider
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    if (jQuery(".product-slider-l5").length > 0) {
        $('.product-slider-l5').slick({

            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            swipe: true,
            infinite: true,
            autoplaySpeed: 2000,
            appendArrows: '.l5-product-slider',
            prevArrow: $('.prev5-1'),
            nextArrow: $('.next5-1'),
            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        centerPadding: '10%',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerPadding: '20px',
                        slidesToShow: 1
                    }
                }

            ]
        });
    }


    /* Landing 5 Product Slider button active*/

    $(document).ready(function() {
        $('.l5-product-slider i').click(function() {
            $('.l5-product-slider i').removeClass("slick-active");
            $(this).addClass("slick-active");
        });
    });



    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
        Landing 7 Hero slider
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    if (jQuery(".hero-l7-slider").length > 0) {
        $('.hero-l7-slider').slick({
            //  autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            swipe: true,
            infinite: true,
            appendArrows: '.testimonial-one-button',
            prevArrow: '<button type="button" class="slick-prev"><i class="icon icon-minimal-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="icon icon-minimal-right"></i></button>',
            autoplaySpeed: 2000,
            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        centerPadding: '10%',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerPadding: '20px',
                        slidesToShow: 1
                    }
                }

            ]
        });
    }







    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
          Counter Up Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });





    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Sticky Header
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            $(".site-header--sticky").addClass("scrolling");
        } else {
            $(".site-header--sticky").removeClass("scrolling");
        }
        if (
            document.body.scrollTop > 700 ||
            document.documentElement.scrollTop > 700
        ) {
            $(".site-header--sticky.scrolling").addClass("reveal-header");
        } else {
            $(".site-header--sticky.scrolling").removeClass("reveal-header");
        }
    }


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Prcing Dynamic Script
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    $('#table-price-value .toggle-btn').on("click", function(e) {
        console.log($(e.target).parent().parent().hasClass("monthly-active"));
        $(e.target).toggleClass("clicked");
        if ($(e.target).parent().parent().hasClass("monthly-active")) {
            $(e.target).parent().parent().removeClass("monthly-active").addClass("yearly-active");
        } else {
            $(e.target).parent().parent().removeClass("yearly-active").addClass("monthly-active");
        }
    });

    $("[data-pricing-trigger]").on("click", function(e) {
        $(e.target).addClass("active").siblings().removeClass("active");
        var target = $(e.target).attr("data-target");
        console.log($(target).attr("data-value-active") == "monthly");
        if ($(target).attr("data-value-active") == "monthly") {
            $(target).attr("data-value-active", "yearly");
        } else {
            $(target).attr("data-value-active", "monthly");
        }
    });


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Smooth Scroll
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    $(".goto").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                    scrollTop: $(hash).offset().top,
                },
                2000,
                function() {
                    window.location.hash = hash;
                }
            );
        } // End if
    });



    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
          Preloader Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    $(window).load(function() {
        setTimeout(function() {
            $("#loading").fadeOut(500);
        }, 1000);
        setTimeout(function() {
            $("#loading").remove();
        }, 2000);
    });




    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
          Home-2- testimonial  Slider Appex
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    var slickContentslide = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        asNavFor: '.l2-testimonial-image-slider',
        adaptiveHeight: false,
        prevArrow: $('.prev3'),
        nextArrow: $('.next3'),
        fade: true,
        cssEase: 'linear'
    }

    var slickImgslide2 = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        asNavFor: '.l2-testimonial-text-slider',
        prevArrow: $('.prev3'),
        nextArrow: $('.next3'),
        fade: true,
        cssEase: 'linear'
    }


    $('.l2-testimonial-image-slider').slick(slickImgslide2);
    $('.l2-testimonial-text-slider').slick(slickContentslide);

    /*l2 Testimonial slider button active*/

    $(document).ready(function() {
        $('.next-prev-btn3 span').click(function() {
            $('.next-prev-btn3 span').removeClass("active");
            $(this).addClass("active");
        });
    });



    /*----------------------------------------
            Accordian Plugin
        ----------------------------------------*/

    (function($) {
        $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

        $('.accordion a').click(function(j) {
            var dropDown = $(this).closest('li').find('p');

            $(this).closest('.accordion').find('p').not(dropDown).slideUp();

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).closest('.accordion').find('a.active').removeClass('active');
                $(this).addClass('active');
            }

            dropDown.stop(false, true).slideToggle();

            j.preventDefault();
        });
    })(jQuery);


    /*Accordian L-12 li active shade*/

    $(document).ready(function() {
        $('.faq-l-12-1 li').click(function() {
            $('.faq-l-12-1 li').removeClass("active");
            $(this).addClass("active");
        });
    });


    /*FAQ TAB li active*/

    $(document).ready(function() {
        $('.faq-main-tab-area li').click(function() {
            $('.faq-main-tab-area li').removeClass("active");
            $(this).addClass("active");
        });
    });

    /*Pagination active*/

    $(document).ready(function() {
        $('.shop-pagination a').click(function() {
            $('.shop-pagination a').removeClass("active");
            $(this).addClass("active");
        });
    });


    $(document).ready(function() {
        $('.blog-pagination a').click(function() {
            $('.blog-pagination a').removeClass("active");
            $(this).addClass("active");
        });
    });

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
          Landing 11 Testimonial Slider
      <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    if (jQuery(".testimonial-slider-l-11").length > 0) {
        $(".testimonial-slider-l-11").slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            prevArrow: '<div class="l-11-slide-btn slick-prev focus-reset"><img src="../image/l2/long-arrow-left.png" alt=""></div>',
            nextArrow: '<div class="l-11-slide-btn slick-next focus-reset"><img src="../image/l2/long-arrow-right.png" alt=""></div>',
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }, ],
        });
    }


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
         Landing 12 Testimonial Slider
     <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    if (jQuery(".testimonial-slider-l-12").length > 0) {
        $('.testimonial-slider-l-12').slick({

            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            swipe: true,
            infinite: true,
            autoplaySpeed: 2000,
            appendArrows: '.l-12-slider-arrow-1',
            prevArrow: $('.prev9'),
            nextArrow: $('.next9'),
            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        centerPadding: '10%',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerPadding: '20px',
                        slidesToShow: 1
                    }
                }

            ]
        });
    }

    /*Landing 12 Testimonial slider arrow active*/

    $(document).ready(function() {
        $('.l-12-slider-arrow-1 i').click(function() {
            $('.l-12-slider-arrow-1 i').removeClass("slick-active");
            $(this).addClass("slick-active");
        });
    });


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
         Landing 16 Screenshot Slider
     <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    if (jQuery(".screenshot-slider").length > 0) {

        $('.screenshot-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            prevArrow: '<button class="l-16-slide-btn slick-prev focus-reset "><i class="icon icon-stre-right"></i></button>',
            nextArrow: '<button class="l-16-slide-btn active slick-next focus-reset"><i class="icon icon-stre-left"></i></button>',
            centerMode: true,
            centerPadding: '130px',
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            easing: 'linear',
            speed: 800,
            appendDots: ".screenshots-dots-l-16",
            responsive: [{
                    breakpoint: 1800,
                    settings: {
                        slidesToShow: 5,
                        centerPadding: '100px',

                    }
                },
                {
                    breakpoint: 1750,
                    settings: {
                        slidesToShow: 5,
                        centerPadding: '20px',

                    }
                },
                {
                    breakpoint: 1670,
                    settings: {
                        slidesToShow: 4,
                        centerPadding: '60px',

                    }
                },
                {
                    breakpoint: 1640,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: '20px',

                    }
                },
                {
                    breakpoint: 1550,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: '30px',

                    }
                },
                {
                    breakpoint: 1450,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: '10px',

                    }
                },
                {
                    breakpoint: 1350,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: '20px',

                    }
                },
                {
                    breakpoint: 1250,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: '10px',

                    }
                },
                {
                    breakpoint: 1150,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: '0px',

                    }
                },
                {
                    breakpoint: 1050,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: '10px',

                    }
                },
                {
                    breakpoint: 950,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '0',

                    }
                },
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '20px',
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '20px',
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '10px',
                    }
                },
                {
                    breakpoint: 515,
                    settings: {
                        slidesToShow: 1,
                        autoplay: true,
                        centerPadding: '0px',
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        autoplay: true,
                        centerPadding: '0px',
                        arrows: false,
                    }
                }

            ]
        });
    }

    /*Landing L-16 slider arrow active*/

    $(document).ready(function() {
        $('.l-16-slide-btn').click(function() {
            $('.l-16-slide-btn').removeClass("active");
            $(this).addClass("active");
        });
    });

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Landing 16 testimonial Slider
       <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


    if (jQuery(".testimonial-slider-l-16").length > 0) {
        $(".testimonial-slider-l-16").slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }, ],
        });
    }

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
            Landing 18 testimonial Slider
        <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    if (jQuery(".testimonial-card-slider-l-18").length > 0) {
        $(".testimonial-card-slider-l-18").slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }, ],
        });
    }


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
         Product Details SLider portfolio-details-3
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    if (jQuery(".product-details-vertical-slider").length > 0) {
        $('.product-details-vertical-slider').slick({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            focusOnSelect: true,
            vertical: true,
            asNavFor: '.product-details-slider',
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        vertical: false
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        vertical: false
                    }
                }
            ]
        });
    }

    if (jQuery(".product-details-slider").length > 0) {
        $('.product-details-slider').slick({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.product-details-vertical-slider'
        });
    }



});