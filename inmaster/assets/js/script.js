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


var scrollTR = false;
var firstImgPosition, secondImgPosition , thirdImgPosition;
var firstImgStatus, secondImgStatus, thirdImgStatus;

if($('.fmti_wrapper').length > 0 || $('.fmtia_wrapper').length > 0) {
    scrollTR = true;
    firstImgPosition = $('.fmti_wrapper').offset();
    secondImgPosition = $('.smti_wrapper').offset();
    thirdImgPosition = $('.thmti_wrapper').offset();
    firstImgStatus = true;
    secondImgStatus = true;
    thirdImgStatus = true;
    if($('.fmtia_wrapper').length > 0) {
        firstImgStatus = false;
    }
        $('.fmtia_viewer').velocity({
            left : 0
        },2000);
        $('.fmta_header').velocity({
            width: '100%',
            opacity: 1
        }, 2000);
        $('.fmta_text').velocity({
            'padding-top': '24px',
            opacity: 1
        }, 2000)
}
var scrollTR2 = false;
var firstImagePosition, secondImagePosition;
var firstImageStatus, secondImageStatus;

if($('.fmpi_wrapper').length > 0) {
    scrollTR2 = true;
    firstImagePosition = $('.fmpi_wrapper').offset();
    secondImagePosition = $('.smpi_wrapper').offset();
    firstImageStatus = true;
    secondImageStatus = true;
}



window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTR){
    if (scrolled > firstImgPosition.top*0.6 && firstImgStatus){
        firstImgStatus = false;
        $('.fmti_viewer').velocity({
            left : 0
        },2000);
        $('.fmt_header').velocity({
            width: '100%',
            opacity: 1
        }, 2000);
        $('.fmt_text').velocity({
            'padding-top': '24px',
            opacity: 1
        }, 2000)
    }
    if (scrolled > thirdImgPosition.top*0.5 && thirdImgStatus){
        thirdImgStatus = false;
        $('.thmti_viewer').velocity({
            left : 0
        },2000);
        // $('.thfmt_header').velocity({
        //     width: '100%',
        //     opacity: 1
        // }, 2000);
        $('.thmt_text').velocity({
            'padding-top': '24px',
            opacity: 1
        }, 2000)
    }
    if (scrolled > secondImgPosition.top*0.6 && secondImgStatus){
        secondImgStatus = false;
        $('.smti_viewer').velocity({
            right : 0
        },2000);
        $('.smt_header').velocity({
            width: '100%',
            opacity: 1
        }, 2000);
        $('.smt_text').velocity({
            'padding-top': '24px',
            opacity: 1
        }, 2000)
    }
        if (scrolled > firstImagePosition.top*0.8 && firstImageStatus){
            firstImageStatus = false;
            $('.fmpi_viewer').velocity({
                left : 0
            },2000);
            $('.fmp_header').velocity({
                width: '100%',
                opacity: 1
            }, 2000);
            $('.fmp_text').velocity({
                'padding-top': '24px',
                opacity: 1
            }, 2000)
        }
        if (scrolled > secondImagePosition.top*0.9 && secondImageStatus){
            secondImageStatus = false;
            console.log('sec');
            $('.smpi_viewer').velocity({
                right : 0
            },2000);
            // $('.smt_header').velocity({
            //     width: '100%',
            //     opacity: 1
            // }, 2000);
            $('.smp_text').velocity({
                'padding-top': '24px',
                opacity: 1
            }, 2000)
        }
    }



    if (scrolled > 1){
        $('.nav_header').addClass('header_active');
    } else {
        $('.nav_header').removeClass('header_active');
    }
}