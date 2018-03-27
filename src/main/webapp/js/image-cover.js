jQuery(document).ready(function ($) {

	jQuery(".img-cover a").css({'opacity': '0'});

	$('.img-cover').hover(function () {
		$(this).find('a').stop().animate({
			opacity: 1
		}, 'fast');
		$(this).find('i').stop().animate({
			opacity: 1
		}, 'fast');
	}, function () {
		$(this).find('a').stop().animate({
			opacity: 0
		}, 'fast');
		$(this).find('i').stop().animate({
			opacity: 0
		}, 'fast');
	});


});