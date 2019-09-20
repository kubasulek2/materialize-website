'use strict';
function get() {
	
}
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

});
