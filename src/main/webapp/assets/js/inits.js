function mycarousel_initCallback(carousel) {
	carousel.clip.hover(function () {
		carousel.stopAuto();
	}, function () {
		carousel.startAuto();
	});
};

jQuery(document).ready(function () {
	jQuery('#carousel-about').jcarousel({
		scroll: 1,
		auto: 5,
		wrap: 'last',
		initCallback: mycarousel_initCallback,
	});
	$('a[data-rel]').each(function () {
		$(this).attr('rel', $(this).data('rel'));
	});
	$("a[rel^='prettyPhoto']").prettyPhoto();
	jQuery('.tipsy-me').tipsy({gravity: 's', fade: true});
	jQuery("#accordion").accordion({
		autoHeight: false,
		navigation: true
	});
	jQuery("#accordion-small").accordion({
		autoHeight: false,
		navigation: true
	});
	$('#twitter_update_list').jTweetsAnywhere({
		username: 'envato',
		count: 1,
		showTweetFeed: {
			showProfileImages: false,
			showUserScreenNames: false,
			showUserFullNames: false,
			showInReplyTo: false,
			showActionReply: false,
			showActionRetweet: false,
			showActionFavorite: false
		}
	});
});

$(document).ready(function () {
	// initiate page scroller plugin
	$('body').pageScroller({
		navigation: '#nav'
	});
});


$(window).load(function () {
	$('.flexslider').flexslider({
		animation: "fade"
	});
});