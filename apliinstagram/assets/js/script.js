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


// $('.product_slide').click(function(){
// 	var slide_img = $(this).clone().css('opacity', '0');	
// 	$('.product_slide_big').html(slide_img);
// 	slide_img.animate({
// 		opacity: 1
// 	}, 200);
// });


// $( document ).ready(function(){
// 	var heightimg = $('.product_slide_big').css('height');
// 	$('.product_slider').css('height', heightimg);
// })



$('.nav_header_menu li').mouseover(function(){
	$('.nav_list').velocity({'height': '45vh'}, 300);
});

$('.nav_list').mouseleave(function(){
	$('.nav_list').velocity({'height': 0}, 150);
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






