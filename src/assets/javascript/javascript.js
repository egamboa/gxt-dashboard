//slider initializer
$("#releases-slider").slick({
	infinite: false,
	dots: true,
});

$("#releases-slider").addClass("customStyle");

//mobile touch enable
$('body').bind('touchstart', function() {});