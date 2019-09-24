'use strict';

$(function () {
	/* HIDE SECTION */

	$('.admin .section').hide();

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
	$('.collapsible').collapsible();

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

	/* CK Editor */
	if($('body').attr('class')){
		$('body').attr('class').includes('projects') ?
			CKEDITOR.replace('body') :
			null;	
	}
	

	/* Comments - Approve & Deny */

	$('.approve').click(function (e) {
		M.toast({html:'Request Approved',displayLength: 3000});
		e.preventDefault();
		$(this).parent().fadeOut(600);
	});
	$('.deny').click(function (e) {
		M.toast({html:'Request Denied',displayLength: 3000});
		e.preventDefault();
		$(this).parent().fadeOut(600);
	});

	/* Quick Todos */
	$('#todo-form').submit(function (e) {
		e.preventDefault();
		const output = `<li class="collection-item">
                <div>${$('#todo').val() }
                  <a href="#!" class="secondary-content delete">
                    <i class="material-icons">close</i>
                  </a>
                </div>
              </li>`;

		$('.todos').append(output);
		M.toast({html:'Task Added',displayLength: 3000});
	});

	/* Delete Todos */

	$('.todos').on('click', '.delete', function (e) {
		$(this).parent().parent().remove();
		M.toast({html:'Task Removed',displayLength: 3000});

		e.preventDefault();
	});

});
