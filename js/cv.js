(function ($) {
	"use strict";
	$(document).on("ready",function(){
		$('.item-portfolio-img').hover(
			function() {
                var img = $(this).find('.screen-img'); 
                var time = Math.round(img.height() / 330);
                img.css({
                    'transform': 'translateY('+($(this).height() - img.height())+'px)',
                    'transition-duration': time+'s'
                });
            }, 
            function() {
                $(this).find('.screen-img').css({
                    'transform': 'translateY(0)',
                    'transition-duration': '1s'
                });
            });

		$('#prlx1').parallax("50%", 0.2);

		// Scroll To Top
		$(window).on("scroll",function(){
	        var windowH = $(window).height();
	        var skillsTopOffset = 0;
	        // Skills Chart animation
			if(window.pageYOffset > skillsTopOffset-windowH+1700)
			{
				$('.chart').easyPieChart({
					easing: 'easeInOut',
					barColor: '#ffffff',
					trackColor: 'rgba(255,255,255, 0.3)',
					scaleColor: false,
					lineWidth: 8,
					lineCap: 'square',
					size: 152,
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});
			}

			// scroll menu fix
			if ($(this).scrollTop() > 840) {
	            $('.about-menu-nav').addClass("scrool-fix-menu");
	        } else {
	            $('.about-menu-nav').removeClass("scrool-fix-menu");
	        }
	    });

		// Menu Button Responsive
	    $('.menu-btn').on("click",function(){
			$('.wrap-menu-res').slideToggle();
		});

	    // link menu landing page
		$('a[href^="#"]').on('click',function (e) {
		    e.preventDefault();
		    var target = this.hash;
		    var $target = $(target);

		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 900, 'swing', function () {
		        window.location.hash = target;
		    });
		});

		// Jquery Lightbox
		lightbox.option({
			'alwaysShowNavOnTouchDevices' : true,
			'wrapAround': true
	    })

	    // skills Slide
		$('.author-skills-slide').owlCarousel({
		    loop:true,
		    autoplayTimeout:7000,
		    autoplay: false,
		    touchDrag: true,
		    mouseDrag: true,
		    autoplayHoverPause:false,
		    autoHeight:false,
		    margin: 25,
		    nav:false,
		    dots: true,
    		smartSpeed: 700,
    		responsive:{
		        0:{
		            items:1,
		        },
		        670:{
		            items:2,
		        },
		        991:{
		            items:2,
		        },
		        1000:{
		            items:4
		        }
		    }	        
		})

		// Responsive Sub Menu Click
		$('ul li.menu-item-has-children > a').on("click",function(e) {
             e.preventDefault();
           $(this).parent().find("> ul").slideToggle(300);          
        });

		$(window).on("load",function() {
			// Animate Loader Off Screen
			$(".se-pre-con").fadeOut("slow");			
		});

		// Wow Js Animate
		new WOW().init();
		
	});
})(jQuery);