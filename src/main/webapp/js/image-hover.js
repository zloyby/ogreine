jQuery(document).ready(function () {

	//Set opacity to 0%
	$('.images .textwrap, .images .textwrap-delay').each(function () {
		$(this).data('orgWidth', $(this).width());
		$(this).css('width', 0);
	});

	$('div.images').bind('mouseenter', function () {
		$(this).find('.textwrap, .textwrap-delay').stop();
		$(this).find('.textwrap').each(function () {
			$(this).animate({
				width: $(this).data('orgWidth')
			}, 400);
		});

		$(this).find('.textwrap-delay').each(function () {
			$(this).delay(200).animate({
				width: $(this).data('orgWidth')
			}, 400);
		});
	});

	$('div.images').bind('mouseleave', function () {
		$(this).find('.textwrap, .textwrap-delay').stop();
		$(this).delay(200).find('.textwrap').each(function () {
			$(this).animate({
				width: 0
			}, 400);
		});

		$(this).find('.textwrap-delay').each(function () {
			$(this).animate({
				width: 0
			}, 400);
		});
	});
});