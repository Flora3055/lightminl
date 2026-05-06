(function($) {
    "use strict";

    // Header Sticky
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 120){
            $('.header-area').addClass("is-sticky");
        }
        else{
            $('.header-area').removeClass("is-sticky");
        }
    });


    // Home Page Slider
    $('.home-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        autoHeight: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        smartSpeed:1500,
    });

    // Preloader
    jQuery(window).on('load',function(){
        //jQuery(".preloader").fadeOut(1000);
        $(".preloader").delay(1600).fadeOut("slow");
    });

    // Offer Event CountDown
    function makeTimer() {

        // var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
        var endTime = new Date("29 April 2030 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");

    }

    setInterval(function() { makeTimer(); }, 1000);

    // Quantity Value change
    $('.quantity').on('click', '.plus', function(e) {
        let $input = $(this).prev('input.qty');
        let val = parseInt($input.val());
        $input.val( val+1 ).change();
    });

    $('.quantity').on('click', '.minus',
        function(e) {
            let $input = $(this).next('input.qty');
            var val = parseInt($input.val());
            if (val > 0) {
                $input.val( val-1 ).change();
        }
    });


    // Popular Product
    $('.popular-product-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        smartSpeed :700,
        navText : ["<i class='bx bx-chevron-left' ></i>","<i class='bx bx-chevron-right' ></i>"],
        items: 1,
    });


    // Related Product
    $('.related-product-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        smartSpeed :700,
        navText : ["<i class='bx bx-chevron-left' ></i>","<i class='bx bx-chevron-right' ></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    // Testimonial
    $('.testimonial-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        smartSpeed :700,
        navText : ["<i class='bx bx-chevron-left' ></i>","<i class='bx bx-chevron-right' ></i>"],
        items: 1,
    });

    // Price Range
    function getVals(){
        // Get slider values
        let parent = this.parentNode;
        let slides = parent.getElementsByTagName("input");
        let slide1 = parseFloat( slides[0].value );
        let slide2 = parseFloat( slides[1].value );
        // Neither slider will clip the other, so make sure we determine which is larger
        if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }

        let displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
    }

    window.onload = function(){
        // Initialize Sliders
        let sliderSections = document.getElementsByClassName("range-slider");
        for( let x = 0; x < sliderSections.length; x++ ){
            let sliders = sliderSections[x].getElementsByTagName("input");
            for( let y = 0; y < sliders.length; y++ ){
                if( sliders[y].type ==="range" ){
                    sliders[y].oninput = getVals;
                    // Manually trigger event first time to display values
                    sliders[y].oninput();
                }
            }
        }
    };


    // Bootstrap Modal Animation
    $(".modal").each(function(l){$(this).on("show.bs.modal",function(l){var o=$(this).attr("data-easein");"shake"==o?$(".modal-dialog").velocity("callout."+o):"pulse"==o?$(".modal-dialog").velocity("callout."+o):"tada"==o?$(".modal-dialog").velocity("callout."+o):"flash"==o?$(".modal-dialog").velocity("callout."+o):"bounce"==o?$(".modal-dialog").velocity("callout."+o):"swing"==o?$(".modal-dialog").velocity("callout."+o):$(".modal-dialog").velocity("transition."+o)})});


    // Go To Top
    $(window).on('scroll', function(){
        var scrolled = $(window).scrollTop();
        if (scrolled > 500) $('.top-bottom-scroll').addClass('fixed');
        if (scrolled < 500) $('.top-bottom-scroll').removeClass('fixed');
    });
    $(".top-bottom-scroll i").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

}(jQuery));

