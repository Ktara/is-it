$('.school_advantage_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: false,
    zIndex: 100
});




$('.school_gallery_slider_wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<div class="school_gallery_next_arrow"></div>',
    prevArrow: '<div class="school_gallery_prev_arrow"></div>',
    zIndex: 100,
    adaptiveHeight: true,
    infinite: true
});