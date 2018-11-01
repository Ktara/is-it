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



$('.content_trust_slider_wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<div class="content_trust_next_arrow"></div>',
    prevArrow: '<div class="content_trust_prew_arrow"></div>',
    infinite: true
});





$('.content_reviews_slider_wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<div class="content_reviews_next_arrow"></div>',
    prevArrow: '<div class="content_reviews_prew_arrow"></div>',
    infinite: true
});




$('.content_projects_slider_wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<div class="content_projects_next_arrow"></div>',
    prevArrow: '<div class="content_projects_prew_arrow"></div>',
    infinite: true
});




$('.nav_header_burger').click(function(){
    $('.popup_menu').addClass('popup_menu_active').velocity({
        opacity: 1
    }, 600);
});

$('.popup_menu').click(function(event){
    if(event.target === this){
        $(this).velocity({
            opacity: 0
        }, 600);
        setTimeout(function(){
            $('.popup_menu').removeClass('popup_menu_active');
        }, 600);
    };
});
