$(function () {
	'use strict';

	//	Efekt smooth scroll
	$('a[href^="#"]').click(function() {
		var target = this.hash;
		$('html, body').animate({
			'scrollTop': $(target).offset().top-71
		}, 700, 'swing');
	});
	
	//	Scroll menu color change
	$(window).scroll(function() {
			if ($(window).scrollTop() >= 71) {
				$("#menu").addClass("scroll");
			}
			else {
				$("#menu").removeClass("scroll");
			}
	})
});

