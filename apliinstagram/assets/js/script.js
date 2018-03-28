$(document).ready(function () {
    $(".rules_wrapper").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href')
            , top = $(id).offset().top - 150;
        $('body,html').animate({
            scrollTop: top
        }, 1200);
    });
    $(".about_wrapper").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href')
            , top = $(id).offset().top - 150;
        $('body,html').animate({
            scrollTop: top
        }, 1200);
    });
    $('.product_block').click(function (event) {
        if(event.target == $('.button1')[0] || event.target == $('.button2')[0]){
            event.preventDefault();
        }

    });

});

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




$('.main_mob_slider_wrapper').slick({
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



$('.product_slider_wrapper').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: true,
	nextArrow: '<div class="product_next_arrow"></div>',
    prevArrow: '<div class="product_prev_arrow"></div>',
	autoplay: true,
	autoplaySpeed: 2500,
	fade: true,
	zIndex: 100
});


$('.review_slider_viewer').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="comment_next_arrow"></div>',
    prevArrow: '<div class="comment_prev_arrow"></div>',
    dots: true,
    arrows: true,
    fade: true,
    zIndex: 100,
    customPaging : function(slider, i) {
        var length = slider.$slides.length;
        $('.reviews_count').text(length);
        return i + 1 + '/' + length;
        }
});





$('.nav_header_menu li').mouseover(function(){
	$('.nav_list').velocity({'height': '55vh'}, 300);
});

$('.nav_list').mouseleave(function(){
	$('.nav_list').velocity({'height': 0}, 150);
});


$('.nav_header_menu').click(function(){
	$('.nav_list').velocity({'height': '100vh'}, 300);
});



$('.nav_basket').click(function(){
	$('.basket_window').velocity({'right': 0}, 300);
});


$('.basket_window_close').click(function(){
	$('.basket_window').velocity({'right': '-420px'}, 300);
});

var $share = $('.share_img_animated');
var sharePosition;
if($('.share')[0] != undefined) {
    sharePosition = $('.share')[0].offsetTop;
}
var shareHeight = parseInt($('.share').css('height') , 10) ;
var shareStatus = 0;

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if(scrolled > sharePosition-shareHeight*0.3 && scrolled < sharePosition+shareHeight*0.3) {
        shareStatus = -(scrolled-(sharePosition-shareHeight*0.3))*0.7;
        if(shareStatus < 0) {
            $share.css('top' , shareStatus);
        }

    }
};
function showList(){
	var height = 0;
	if(!$(this).hasClass('active_arrow')) {
        height = $(this).next().children().css('height');
        $(this).addClass('active_arrow').next().velocity({'height': height}, 600 );
        return;
	}
    $(this).removeClass('active_arrow').next().velocity({'height': height}, 450 );
}
function showNextList(){
    var height = 0;
    if(!$(this).hasClass('active_arrow')) {
        height = $(this).next().children().css('height');
        height = parseInt(height , 10) * $(this).next().children().length;
        $(this).addClass('active_arrow').next().velocity({'height': height}, 600 );
        height = $(this).parent().css('height');
        // $(this).parent().parent().velocity({'height' : 'auto'}, 600);
        $(this).parent().parent().css('height', 'auto');
        return;
    }
    $(this).removeClass('active_arrow').next().velocity({'height': height}, 450 );
    $(this).parent().parent().css('height', 'auto');
}
$('.listing_page_sub_header').click(showList);
$('.product_header_arrow').click(showList);

$('.listing_page_form_text').click(showNextList);






