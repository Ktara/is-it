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
    infinite: true,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        // {
        //     breakpoint: 480,
        //     settings: {
        //         arrows: false,
        //         centerMode: true,
        //         centerPadding: '40px',
        //         slidesToShow: 1
        //     }
        // }
    ]
});





$('.content_reviews_slider_wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<div class="content_reviews_next_arrow"></div>',
    prevArrow: '<div class="content_reviews_prew_arrow"></div>',
    infinite: true,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        // {
        //     breakpoint: 480,
        //     settings: {
        //         arrows: false,
        //         centerMode: true,
        //         centerPadding: '40px',
        //         slidesToShow: 1
        //     }
        // }
    ]
});




$('.content_projects_slider_wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<div class="content_projects_next_arrow"></div>',
    prevArrow: '<div class="content_projects_prew_arrow"></div>',
    infinite: true,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        // {
        //     breakpoint: 480,
        //     settings: {
        //         arrows: false,
        //         centerMode: true,
        //         centerPadding: '40px',
        //         slidesToShow: 1
        //     }
        // }
    ]
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




$('.blog_page_slider_wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    nextArrow: '<div class="blog_page_next_arrow"></div>',
    prevArrow: '<div class="blog_page_prew_arrow"></div>',
    infinite: true,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        // {
        //     breakpoint: 480,
        //     settings: {
        //         arrows: false,
        //         centerMode: true,
        //         centerPadding: '40px',
        //         slidesToShow: 1
        //     }
        // }
    ]
});



$('.contact_service_form_title').click(function(){
    $('.contact_service_form_list_wrapper').animate({
        height: 0
    }, 400);
    var target = $(this).next();
    if ($(this).hasClass('contact_form_open')){
        $(this).removeClass('contact_form_open');
        return;
    };
    $('.contact_service_form_title').removeClass('contact_form_open');
    var childHeight = target.children().height();
    target.animate({
        height: childHeight
    }, 600);
    $(this).addClass('contact_form_open');
});