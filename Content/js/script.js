$(document).ready(function () {

    show_Action_menu('.header .mobile-toggler', '.header .menu-block');

    // Show mobile menu
    $('.dl-menuwrapper').dlmenu({
        animationClasses: { classin: 'dl-animate-in-5', classout: 'dl-animate-out-5' },
        backLabel: '<i class="fa fa-arrow-left" aria-hidden="true"></i> Back',
    });

    function show_Action_menu(t_click, t_show) {
        $(t_click).click(function () {
            if (!$(t_show).hasClass("show")) {
                $(".header").find(".show").removeClass("show");
                $(t_show).toggleClass("show");
            } else {
                $(t_show).toggleClass("show");
            }
        });
    }


    $(".main-menu").click(function () {
        $(".header").find(".show").removeClass("show");
    });

    //function show_Action_menu(t_click, t_show) {
    //    $(t_click).click(function () {
    //        if (!$(t_show).hasClass("show")) {
    //            $(".header").find(".show").removeClass("show");
    //            $(t_show).toggleClass("show");
    //        } else {
    //            $(t_show).toggleClass("show");
    //        }
    //    });
    //    $(".dl-trigger").click(function () {
    //        $(".header").find(".show").removeClass("show");
    //    });
    //}

    // Show menu fix
    $(".menu-fixed .toggle-menu").click(function () {
        $(".menu-fixed").toggleClass("show");
    });

    // Hide menu fix when click on body
    $(document).on("click touchstart", function (e) {
        if (!$(e.target).is(".menu-fixed *") && $(window).width() <= 800) {
            $(".menu-fixed").removeClass("show");
        }
    });

    $(window).scroll(function () {
        // Add when scroll Header
        //if ($(window).scrollTop() > 1 && $(window).width() > 1200) {
        //    $('.header').addClass('is-scroll');
        //} else {
        //    $('.header').removeClass('is-scroll');
        //}
    });

    $('.slide-home.owl-carousel').owlCarousel({
        animateOut: 'fadeOut',
        mouseDrag: true,
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        smartSpeed: 600,
    });

    $('.slide-teacher.owl-carousel').owlCarousel({
        mouseDrag: false,
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        smartSpeed: 600,
        responsive: {
            992: {
                autoHeight: true,
            },
        }
    });

    $('#home-intro .owl-carousel, #home-center .owl-carousel').owlCarousel({
        items: 3,
        mouseDrag: true,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 600,
        responsive: {
            0: {
                items: 1,
                margin: 15,
            },
            576: {
                items: 2,
                margin: 15,
            },
            768: {
                items: 2,
                margin: 15,
            },
            992: {
                items: 3,
                margin: 20,
            },
            1200: {
                items: 3,
                margin: 20,
            }
        }
    });

    $('#home-intro .owl-stage, #home-center .owl-stage').lightGallery({
        selector: '.item'
    });

    $('#section-stories .owl-carousel').owlCarousel({
        items: 2,
        mouseDrag: true,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 600,
        responsive: {
            0: {
                items: 1,
                margin: 15,
            },
            576: {
                items: 2,
                margin: 15,
            },
            768: {
                items: 2,
                margin: 15,
            },
            992: {
                items: 2,
                margin: 20,
            },
            1200: {
                items: 2,
                margin: 20,
            }
        }
    });

    $('#section-stories .owl-stage').lightGallery({
        selector: '.item'
    });

    $('#home-customer .owl-carousel').owlCarousel({
        mouseDrag: true,
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        smartSpeed: 600,
    });

});