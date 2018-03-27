$.fn.slideFadeToggle = function (speed, easing, callback) {
	return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
};
jQuery(document).ready(function () {
	jQuery(".toggle").next(".hidden").hide();
	jQuery(".toggle").click(function () {
		$id = $(this).attr('id');

		$('.current').not(this).toggleClass('current').next('.hidden').slideFadeToggle(400);

		$(this).toggleClass('current').next().slideFadeToggle(400);
	});

//	$(".regular").click(function() {
//							  $(".hidden").slideUp(400);
//	});

});