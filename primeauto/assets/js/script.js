$('.products_trust_slider_wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<div class="products_trust_prew_arrow"></div>',
    prevArrow: '<div class="products_trust_next_arrow"></div>',
    infinite: true
});




window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 20) {
        $('.nav_product').addClass('nav_product_active');
        $('.nav_header').addClass('nav_product_active');
    } else {
        $('.nav_product').removeClass('nav_product_active');
        $('.nav_header').removeClass('nav_product_active');
    };
};






$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
});
$('.slider_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    dots: true,
    centerMode: false,
    infinite: true,
    focusOnSelect: true,
    arrows: true,
    prevArrow: '<div class="auto_product_main_prewarrow"></div>',
    nextArrow: '<div class="auto_product_main_nextarrow"></div>',
    customPaging : function(slider, i) {
        var length = slider.$slides.length;
        $('.auto_product_main_slider_counter').text(length);
        return i + 1 + '/' + length;
    }
});




$('.auto_product_main_info_title').click(function(){
    $('.auto_product_main_info_wrapper').animate({
        height: 0
    }, 400);
    var target = $(this).next();
    if ($(this).hasClass('auto_product_main_info_open')){
        $(this).removeClass('auto_product_main_info_open');
        return;
    };
    $('.auto_product_main_info_title').removeClass('auto_product_main_info_open');
    var childHeight = target.children().height();
    target.animate({
        height: childHeight
    }, 600);
    $(this).addClass('auto_product_main_info_open');
});




$('.auto_product_main_review_title').click(function(){
    $('.auto_product_main_review_wrapper').animate({
        height: 0
    }, 400);
    var target = $(this).next();
    if ($(this).hasClass('auto_product_main_review_open')){
        $(this).removeClass('auto_product_main_review_open');
        return;
    };
    $('.auto_product_main_review_title').removeClass('auto_product_main_review_open');
    var childHeight = target.children().height();
    target.animate({
        height: childHeight
    }, 600);
    $(this).addClass('auto_product_main_review_open');
});









