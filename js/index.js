'use strict';

$(function () {
	$('.sidenav').sidenav();
	$('.fixed-action-btn').floatingActionButton({ hoverEnabled: false });
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

	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.scroll-top').fadeIn();
		} else {
			$('.scroll-top').fadeOut();
		}
	});

	$('.scroll-top').click(function(){
		$('html, body').animate({ scrollTop: 0 }, 600);
		return false;
	});
	$('select').formSelect();
});
