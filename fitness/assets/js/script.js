$(document).ready(function () {
    $(".oferta_list").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href')
            , top = $(id).offset().top - 150;
        $('body,html').animate({
            scrollTop: top
        }, 1200);
    });
});





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
    adaptiveHeight: true,
    infinite: true
});






$('.popular_slider_wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<div class="popular_next_arrow"></div>',
    prevArrow: '<div class="popular_prew_arrow"></div>',    
    adaptiveHeight: true,
    infinite: true
});









$('.nav_header_log_out').click(function(){
	$('.popup_log_out').css('display', 'block');
});