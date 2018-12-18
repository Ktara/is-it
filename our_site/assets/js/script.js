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
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
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
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
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
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});




$('.nav_header_burger').click(function(){
    $('.popup_menu').toggleClass('popup_menu_active');
    $(this).toggleClass('nav_header_burger_close');
});

// $('.popup_menu').click(function(event){
//     if(event.target === this){
//         $(this).velocity({
//             opacity: 0
//         }, 600);
//         setTimeout(function(){
//             $('.popup_menu').removeClass('popup_menu_active');
//         }, 600);
//     };
// });




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
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
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



(function () {
    $('.in-portfolio_info_text_read').click(function (e) {
        $(e.target).css('display', 'none');
        var trHeight = $(e.target).prev().children().css('height');
        $(e.target).prev().animate({
            'height': trHeight
        }, 600);
    });
})();




(function () {
    $('.in-portfolio_desctope_text_read').click(function (e) {
        $(e.target).css('display', 'none');
        var trHeight = $(e.target).prev().children().css('height');
        $(e.target).prev().animate({
            'height': trHeight
        }, 600);
    });
})();




(function () {
    $('.in-portfolio_tablet_text_read').click(function (e) {
        $(e.target).css('display', 'none');
        var trHeight = $(e.target).prev().children().css('height');
        $(e.target).prev().animate({
            'height': trHeight
        }, 600);
    });
})();

(function(){
    var main_sliders = $('.main_slide');
    if(main_sliders[0] == undefined) return;
    var dots_wrapper = $('.main_slider_dots');
    for(var i = 0; i < main_sliders.length; i++) {
        var element = $('<span></span>');
        dots_wrapper.append(element);
    };
    var dots = $('.main_slider_dots span');
    $(dots[0]).addClass('active_dot');
    dots.click(function(){
        dots.removeClass('active_dot');
       $(this).addClass('active_dot');
       var index = dots.index(this);
       main_sliders.css({
           'display' : 'none',
           'opacity' : 0
       });
        $(main_sliders[index]).css('display' , 'block').animate({
            'opacity' : 1
        }, 600);
    });
})();
(function(){
    var cards = $('.services_card_wrapper');
    var start_postion = $( window ).scrollTop();
    var current_position = start_postion;
    $( window ).scroll(function() {
        var scroll = $( window ).scrollTop();
        var x = scroll - current_position;
        console.log(x);
        var card1 = $(cards[0]);
        var card2 = $(cards[1]);
        var card3 = $(cards[2]);
        var card4 = $(cards[3]);
        var card5 = $(cards[4]);
        var card6 = $(cards[5]);
        var current1 = card1.css('margin-top');
        var current2 = card2.css('margin-top');
        var current3 = card3.css('margin-top');
        var current4 = card4.css('margin-top');
        var current5 = card5.css('margin-top');
        var current6 = card6.css('margin-top');
        var new_pos1 = parseInt(current1, 10) - x * 0.1;
        var new_pos2 = parseInt(current2, 10) - x * 0.4;
        var new_pos3 = parseInt(current3, 10) - x * 0.2;
        var new_pos4 = parseInt(current4, 10) - x * 0.5;
        var new_pos5 = parseInt(current5, 10) - x * 0.1;
        var new_pos6 = parseInt(current6, 10) - x * 0.2;
        card1.animate({ 'margin-top' : new_pos1 }, 1);
        card2.animate({ 'margin-top' : new_pos2 }, 1);
        card3.animate({ 'margin-top' : new_pos3 }, 1);
        card4.animate({ 'margin-top' : new_pos4 }, 1);
        card5.animate({ 'margin-top' : new_pos5 }, 1);
        card6.animate({ 'margin-top' : new_pos6 }, 1);
        current_position = scroll;
    });
})();