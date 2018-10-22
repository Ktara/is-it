$('.cases_slider_wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="cases_next_arrow"></div>',
    prevArrow: '<div class="cases_prew_arrow"></div>',
    dots: true,
    arrows: true,    
    zIndex: 100,
    customPaging : function(slider, i) {
        var length = slider.$slides.length;
        $('.cases_count').text(length);
        return i + 1;
        }
});
