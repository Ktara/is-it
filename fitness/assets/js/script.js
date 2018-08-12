$('.nav_header_menu_wrapper').click(function(){
	$('.nav_header_menu_wrapper').toggleClass('active_nav_wrapper');
});




$('.hit_foto_slider_wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<div class="hit_foto_next_arrow"></div>',
    prevArrow: '<div class="hit_foto_prew_arrow"></div>',
    // zIndex: 100,
    adaptiveHeight: true,
    infinite: true
});