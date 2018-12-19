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
    var lines = $('.lines_animate');
    $('.nav_header_btn').mouseover(function(){
        var fix = 150;
        lines.each(function(){
            var rand = Math.random() * (10-1) + 1 ;
            var time = fix * rand;
           $(this).animate({
               left: 100
           }, time);
        });
    });
    $('.nav_header_btn').mouseout(function(){
        var fix = 100;
        lines.each(function(){
            var rand = Math.random() * (10-1) + 1 ;
            var time = fix * rand;
           $(this).animate({
               left: 0
           }, time);
        });
    })
    setInterval(function(){
        var fix = 150;
        lines.each(function(){
            var rand = Math.random() * (10-1) + 1 ;
            var time = fix * rand;
            $(this).animate({
                left: 100
            }, time);
        });
        setTimeout(function () {
            var fix = 100;
            lines.each(function(){
                var rand = Math.random() * (10-1) + 1 ;
                var time = fix * rand;
                $(this).animate({
                    left: 0
                }, time);
            });
        }, 1000)
    }, 5400)
})();
(function(){
    // var cards = $('.services_card_wrapper');
    var start_postion = $(window).height()/1.5;
    // var block_position = $('.services').offset().top;
    console.log($(window).height());
    var fly_element = $('.fly_element');
    fly_element.css({
       opacity: 0,
       top: 90,
       position: 'relative'
    });
    // var current_position = start_postion + block_position;
    // console.log(block_position);
    $( window ).scroll(function() {
        var scroll = $( window ).scrollTop();
        fly_element.each(function(){
           var element = $(this);
           if(element.offset().top < scroll + start_postion) {
               element.animate({
                   opacity: 1,
                   top: 0
               }, 900)
           }
        });
        // if(scroll > block_position) {
        // var x = scroll - current_position;
        //
        // var card1 = $(cards[0]);
        // var card2 = $(cards[1]);
        // var card3 = $(cards[2]);
        // var card4 = $(cards[3]);
        // var card5 = $(cards[4]);
        // var card6 = $(cards[5]);
        //
        // var current1 = card1.css('top');
        // var current2 = card2.css('top');
        // var current3 = card3.css('top');
        // var current4 = card4.css('top');
        // var current5 = card5.css('top');
        // var current6 = card6.css('top');
        // console.log(current2);
        //
        // var new_pos1 = parseInt(current1, 10) - x * 0.5;
        // // var new_pos2 = -x * 1.5;
        // var new_pos3 = parseInt(current3, 10) - x * 0.3;
        // // var new_pos4 = -x * 0.3;
        // var new_pos5 = parseInt(current5, 10) - x * 0.9;
        // var new_pos6 = parseInt(current6, 10) - x * 0.5;
        //
        // card1.animate({ 'top' : new_pos1 }, 10);
        // // card2.animate({ 'top' : new_pos2 }, 10);
        // card3.animate({ 'top' : new_pos3 }, 10);
        // // card4.animate({ 'top' : new_pos4 }, 10);
        // card5.animate({ 'top' : new_pos5 }, 10);
        // card6.animate({ 'top' : new_pos6 }, 10);
        //
        // current_position = scroll;
        // }
    });
})();