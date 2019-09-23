'use strict';

$(function () {

	/* CSS MATERIALIZE FEATURES INITIATION */

	$('.sidenav').sidenav();
	$('.website-fixed.fixed-action-btn').floatingActionButton({ hoverEnabled: false });

	$('.admin .fixed-action-btn').floatingActionButton({ direction: 'left', hoverEnabled: false });


	$('.modal').modal();
	$('.scrollspy').scrollSpy();
	$('.slider').slider({
		transition: 500,
		interval: 6000,
		indicators: false
	});
	$('.carousel').carousel({
		fullWidth: true,
		indicators: true
	});
	autoplay();
	function autoplay () {
		$('.carousel').carousel('next');
		setTimeout(autoplay, 6500);
	}
	$('.tabs').tabs();
	$('select').formSelect();

	/* SHOW OR HIDE SCROLL TO TOP BUTTON*/

	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.scroll-top').fadeIn();
		} else {
			$('.scroll-top').fadeOut();
		}
	});

	/* SCROLL TO TOP SMOOTH SCROLLING */
	$('.scroll-top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 600);
		return false;
	});


	/* ADMIN COUNTER UP */
	$('.count').each(function () {
		$(this).prop('Counter', 0).animate({ Counter: $(this).text() }, {
			duration: 1000,
			easing: 'swing',
			queue: false,
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});

	

	/* HIDE SECTION */

	$('.admin .section').hide();
	
	setTimeout(() => {

		/* HIDE PRELOADER */
		$('.preloader-wrapper').hide();
		/* SHOW SECTIONS */
		$('.admin .section').fadeIn();

		/* ADMIN COUNTER UP */
		$('.count').each(function () {
			$(this).prop('Counter', 0).animate({ Counter: $(this).text() }, {
				duration: 1000,
				easing: 'swing',
				queue: false,
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});

		$('.determinate').each(function () {
			$(this).animate({ width: $(this).data('width') }, { duration: 1500, queue: false });
		});
	}, 1000);



});
