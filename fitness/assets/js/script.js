$(document).ready(function () {
    $(".oferta_list").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href')
            , top = $(id).offset().top - 150;
        $('body,html').animate({
            scrollTop: top
        }, 1200);
    });

    $(".nav_header_menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href')
            , top = $(id).offset().top - 0;
        $('body,html').animate({
            scrollTop: top
        }, 1200);
    });

    $(".main_btn").click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href')
            , top = $(id).offset().top - 150;
        $('body,html').animate({
            scrollTop: top
        }, 1200);
    });

    $(".link_menu a").click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href')
            , top = $(id).offset().top - 100;
            console.log(id);
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
	$('.popup_log_out').addClass('popup_log_out_active').velocity({
		opacity: 1
	}, 600);
});

$('.popup_log_out').click(function(event){	
	if(event.target === this){		
		$(this).velocity({
			opacity: 0
		}, 600);
		setTimeout(function(){
			$('.popup_log_out').removeClass('popup_log_out_active');
		}, 600);
	};
});




$('.nav_header_sign_in').click(function(){
	$('.popup_sign_in').addClass('popup_sign_in_active').velocity({
		opacity: 1
	}, 600);
});

$('.popup_sign_in').click(function(event){	
	if(event.target === this){		
		$(this).velocity({
			opacity: 0
		}, 600);
		setTimeout(function(){
			$('.popup_sign_in').removeClass('popup_sign_in_active');
		}, 600);
	};
});






