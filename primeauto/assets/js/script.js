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




$('.popup_click').click(function(){
    $('.auto_popup').addClass('auto_popup_active').velocity({
        opacity: 1
    }, 600);
});
$('.auto_popup_close').click(function(){
    $('.auto_popup').removeClass('auto_popup_active').velocity({
        opacity: 0
    }, 600);
});

$('.auto_popup').click(function(event){
    if(event.target === this){
        $(this).velocity({
            opacity: 0
        }, 600);
        setTimeout(function(){
            $('.auto_popup').removeClass('auto_popup_active');
        }, 600);
    };
});




$('.image_in_popup').click(function(){
    $('.picture_popup').addClass('picture_popup_active').velocity({
        opacity: 1
    }, 600);
});
$('.picture_popup_close').click(function(){
    $('.picture_popup').removeClass('picture_popup_active').velocity({
        opacity: 0
    }, 600);
});

$('.picture_popup').click(function(event){
    if(event.target === this){
        $(this).velocity({
            opacity: 0
        }, 600);
        setTimeout(function(){
            $('.picture_popup').removeClass('picture_popup_active');
        }, 600);
    };
});





$('.nav_header_list_wrapper').click(function(){
    $('.popup_nav_menu_mob').addClass('popup_nav_menu_mob_active').velocity({
        opacity: 1
    }, 600);
});

$('.popup_nav_menu_mob_close').click(function(){
    $('.popup_nav_menu_mob').removeClass('popup_nav_menu_mob_active').velocity({
        opacity: 0
    }, 600);
});

$('.popup_nav_menu_mob').click(function(event){
    if(event.target === this){
        $(this).velocity({
            opacity: 0
        }, 600);
        setTimeout(function(){
            $('.popup_nav_menu_mob').removeClass('popup_nav_menu_mob_active');
        }, 600);
    };
});





$('.auto_pro_components_mob_title').click(function(){
    $('.auto_pro_components_mob_wrapper').animate({
        height: 0
    }, 400);
    var target = $(this).next();
    if ($(this).hasClass('auto_pro_components_mob_open')){
        $(this).removeClass('auto_pro_components_mob_open');
        return;
    };
    $('.auto_pro_components_mob_title').removeClass('auto_pro_components_mob_open');
    var childHeight = target.children().height();
    target.animate({
        height: childHeight
    }, 600);
    $(this).addClass('auto_pro_components_mob_open');
});
