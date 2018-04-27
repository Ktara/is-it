$('.main_advantage_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: false,
    zIndex: 100
});




$('.main_gallery_slider_wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<div class="main_gallery_next_arrow"></div>',
    prevArrow: '<div class="main_gallery_prev_arrow"></div>',
    zIndex: 100,
    adaptiveHeight: true,
    infinite: true
});




$('.about_certificates_slider_wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<div class="about_certificates_next_arrow"></div>',
    prevArrow: '<div class="about_certificates_prev_arrow"></div>',
    zIndex: 100,
    adaptiveHeight: true,
    infinite: true
});




$('.about_reviews_slider_wrapper').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<div class="about_reviews_next_arrow"></div>',
    prevArrow: '<div class="about_reviews_prev_arrow"></div>',
    zIndex: 100,
    adaptiveHeight: true,
    infinite: true
});



var $dataTitles = $('.timetable_arrows_block');

$('.timetable_slider_wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: '<div class="timetable_next_arrow"></div>',
    prevArrow: '<div class="timetable_prev_arrow"></div>',
    zIndex: 100,
    fade: true,
    adaptiveHeight: true,
    dots: true,
    customPaging : function(slider, i) {
       // var length = slider.$slides.length;
        return $dataTitles[i].dataset.title;
    }
});


var heightFirstBlock = window.clientHeight || document.documentElement.clientHeight;

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 1){
        $('.nav_header').addClass('header_active');
    } else {
        $('.nav_header').removeClass('header_active');
    }
}