$('.wish_slider_wrapper').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2500,
	fade: true,
	zIndex: 100
});


$('.product_slide').click(function(){
	var slide_img = $(this).clone().css('opacity', '0');	
	$('.product_slide_big').html(slide_img);
	slide_img.animate({
		opacity: 1
	}, 200);
});


$( document ).ready(function(){
	var heightimg = $('.product_slide_big').css('height');
	$('.product_slider').css('height', heightimg);
})