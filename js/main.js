(function ($) {
	"use strict";

    /* Preloading JS */
    $(window).load(function() {
	    $('.preloader-wrap').fadeOut('500', function() {
            $(this).remove();
        });
	});

	/* ScrollToTop JS */
    $(window).scroll(function() {
    	var wScroll = $(this).scrollTop();
    	if (wScroll > 800) {
    		$('.scroll-to-top').fadeIn('slow');
    	} else {
    		$('.scroll-to-top').fadeOut('slow');
    	}
    });
    $('.scroll-to-top').on('click', function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

	/* Sticky Menu JS */
	$('#mainmenu').sticky({topSpacing:0});

	$('#navMenu li a').on('click', function() {
            $('#navMenu').removeClass('in');
    });

    /* Smooth scroll Js*/
	$('.navbar-nav li a, .home-arrow-down a').on('click', function(event) {
		   $('.navbar-nav li a, .home-arrow-down a').parent().removeClass('active');
        var $anchor = $($(this).attr('href')).offset().top - 60;
		   $(this).parent().addClass('active');
        $('body, html').animate({scrollTop : $anchor}, 800);
					 event.preventDefault();
        return false;
    });

    /* Wow JS */
	new WOW().init();

	/* Mixutup JS */
	$('#portfolio-items').mixItUp({	
		animation: {
			effects: 'fade translateZ(-100px)',
			duration: 1000
		}
	});
	
	/* Venobox JS */
    $('.vbox-popup').venobox({
    	numeratio: true,
        infinigall: true
    });

	/* client-reviews-slider JS */
	$('#client-reviews-slider').owlCarousel({
	    loop: true,
	    margin: 0,
	    smartSpeed: 2000,
	    nav: false,
	    addClassActive: true,
	    animateOut: 'slideOutDown',
		animateIn: 'flipInX',
	    dots: true,
	    autoplay: true,
	    autoplayTimeout: 50000000,
	    responsiveClass: true,
	    responsive: {
	        0: {
	            items: 1,
	        },
	        600: {
	            items: 1,
	        },
	        1000: {
	        	items: 1,
	        }
	    }
	});
	
	/* Parallex Js*/
    $(window).stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
    });

})(jQuery);