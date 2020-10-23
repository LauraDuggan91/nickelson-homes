$(document).ready(function(){

//smooth scroll

	$(".burger").on("click tap", function(){
		$(".dropdown-content").toggleClass("burger1");
	});

	$('.galleryClick').on('click', function() {
	    $('html, body').animate({
	        scrollTop: $('#gallery').offset().top
	    }, 1000);
  	});

  	$('.aboutClick').on('click', function() {
	    $('html, body').animate({
	        scrollTop: $('#about').offset().top
	    }, 1000);
  	});
  	$('.testimonialsClick').on('click', function() {
	    $('html, body').animate({
	        scrollTop: $('#testimonials').offset().top
	    }, 1000);
  	});
  	$('.contactClick').on('click', function() {
	    $('html, body').animate({
	        scrollTop: $('#contact').offset().top
	    }, 1000);
  	});
  	$('.servicesClick').on('click', function() {
	    $('html, body').animate({
	        scrollTop: $('#services').offset().top
	    }, 1000);
  	});
  	$('.topClick').on('click', function() {
	    $('html, body').animate({
	        scrollTop: $('#head').offset().top
	    }, 1000);
  	});

//burger menu

	$(".burger").on("click tap", function(){
		console.log("click me!");
		$(".dropdown-content").toggleClass("burger");
	});


});