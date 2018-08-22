$(document).ready(function () {
    $(".oferta_list").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href')
            , top = $(id).offset().top - 150;
        $('body,html').animate({
            scrollTop: top
        }, 1200);
    });

    $(".nav_header_menu .nav_main_link").click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href')
            , top = $(id).offset().top - 150;
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

    $(".link_menu .main_link").click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href')
            , top = $(id).offset().top - 100;            
        $('body,html').animate({
            scrollTop: top
        }, 1200);
    });


    $('.animate_nav_header').animate({
		top: 0
	}, 800);
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

var target = $('.oferta_list');
if(target[0] != undefined){

var height = $(document).height();

var targetPosition = parseInt(target.css('top'), 10);

var textPosition = $('.oferta_text_positi');
var listPosition = $('.oferta_list li');
var startPos = $(textPosition[0]).offset().top;
$(window).scroll(function(){
	var position = $(window).scrollTop();	
	// var procent = position / height;
	// var newPosition = targetPosition * (1 - procent);
	// target.css({
	// 	top: newPosition * 0.85
	// });
	if(startPos < position){		
		target.addClass('oferta_list_up');
		// $('.oferta_list').animate({
		// 	top: '20px'
		// }, 100);
	}else{
		target.removeClass('oferta_list_up');
		// $('.oferta_list').animate({
		// 	top: targetPosition
		// }, 100);
	};
	for(var i = 0; i < textPosition.length; i++){
		if($(textPosition[i]).offset().top < position + 200 ){
			listPosition.removeClass('active_oferta_list');
			$(listPosition[i]).addClass('active_oferta_list');
		}
	};
});

};






