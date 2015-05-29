//slider initializer
$("#releases-slider").slick({
	infinite: false,
	dots: true,
	responsive: [{
		breakpoint: 608,
		settings:{
			arrows:false
		}	
	}]
});

$("#releases-slider").addClass("customStyle");

//mobile touch enable
$('body').bind('touchstart', function() {});