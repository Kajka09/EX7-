$(function () {
	'use strict';

	$("#get-data").click(function () {
		// sposób $.getJSON
		$.getJSON("http://rt.ex7.pl/", function (data) {
			//wyswietl w konsoli
			console.log(data);
		});
	});
	var request = new XMLHttpRequest();
if (request.withCredentials !== undefined) {
    // CORS supported (XHR)
}
	
	//	Efekt smooth scroll
	$('a[href^="#"]').click(function () {
		var target = this.hash;
		$('html, body').animate({
			'scrollTop': $(target).offset().top - 71
		}, 700, 'swing');
	});
	
	//	Scroll menu color change
	$(window).scroll(function () {
			if ($(window).scrollTop() >= 71) {
				$("#menu").addClass("scroll");
			}
			else {
				$("#menu").removeClass("scroll");
			}
		})
});