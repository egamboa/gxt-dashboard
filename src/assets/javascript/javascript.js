//general vars

var plus = true;



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

//projects show on release module function
$('.release-projects-btn').click( function(){
	// change icon button
	if(plus){
		$('.release-projects-btn').addClass('.btn-minus').removeClass('.btn-plus');
		plus = false;
		console.log(plus);
	}else{
		$('.release-projects-btn').addClass('.btn-plus').removeClass('.btn-minus');
		plus = true
		console.log(plus);
	}

	//opens, close projects
	if ($('.release-project').css('opacity') != 1) {
		$('.release-project').css({
			display: 'table'
		});
		$('.release-project').animate({
			opacity: 1
		},500, function () {
			
		});

	} else{
		$('.release-project').animate({
			opacity: 0
		},500, function () {
			$('.release-project').css({
				display: 'none'
			});
		});

	};

	
})