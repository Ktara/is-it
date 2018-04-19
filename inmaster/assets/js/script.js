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