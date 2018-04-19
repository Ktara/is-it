$(document).ready(function(){
    $(".nav_header_menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $(".map_mark").click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1100);
    });
    $(".main_btn").click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1100);
    });
    $(".serv_link").click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1100);
    })
});




$(document).ready(function(){
    // var certHeight = $(".certificates_document_wrapper").css("height");
    // $(".about_notarius").css("height", certHeight);


function showStartAnimation() {

    $('.main_block').addClass('show_main_block');
    setTimeout(function () {
        $('.main_libra').addClass('rotate_libra');
        $('.main_line').velocity({
            right: 0
        }, 1000);

    }, 1200);
    setTimeout(function () {
        $('.map_mark img').css('display' , 'inline-block').velocity({
            top: '10%',
            width: '20px'

        }, 1000);
    }, 2200)


};

showStartAnimation();

(function () {
    var $about = $('.about');
    var about = $about.offset().top;
    var $service = $('.service');
    var service = $service.offset().top;
    var active = true;
    var active2 = true;
    var $services = $('.service_list li');
    var services = [];
    $.each($services, function (i, item) {
       services.push($(item).offset().top);
    });
    var $garanty = $('.certificates_head');
    var garanty_text = $garanty.text();
    $garanty.text('');
    var garanty = $garanty.offset().top;
    var text_status = true;
    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        for(var i = 3; i < $services.length; i++){
            if(scrolled > services[i]*0.75){
                $($services[i]).velocity({
                    opacity : 1
                }, 1200);
            }
        }
        if(scrolled > about*0.6){
            if(active) {
                active = false;
                $about.velocity({
                    width : '100%'
                }, 1000);
                setTimeout(function () {
                    $('.about_head').velocity({
                        opacity: 1
                    }, 1000);
                }, 1000);
            }

        };
        if(scrolled > service*0.7){
            if(active2) {
                active2 = false;
                var puncts = $('.service_block li');
                for(var i = 0; i < 3; i++){
                    $(puncts[i]).find('img').velocity({
                        'height' : '160px'
                    }, 1000);
                    $(puncts[i]).find('p').velocity({
                        'opacity' : '1'
                    }, 1000);
                }
            }

        };

        if(scrolled > garanty*0.5 && text_status === true){
            text_status = false;
            var x = 0;
            setInterval(function () {
                if(x < garanty_text.length) {
                    //console.log(x);
                    $garanty.append(garanty_text[x]);
                    x++;
                }
            }, 110)
        }


    }
})();
var nextSlider;
$('.certificates_document_image').click(function(){
         nextSlider = $(this).clone();
        $('.certificates_slider').css('display', 'block');
        $('.cer_slider_wrapper').html(nextSlider);
        nextSlider = $(this);
});
$('.close_arrow').click(function(){
    $('.certificates_slider').css('display', 'none');
});
$('.right_arrow').click(function () {
    var el = nextSlider.parent().next().children().clone().css('opacity', '0');
    nextSlider = nextSlider.parent().next().children();
    console.log(nextSlider.length);
    if(nextSlider.length == 0) {
        el = $('.certificates_document_image')[0];
        nextSlider = $(el);
        el = $(el).clone().css('opacity', '0');
    }

   $('.cer_slider_wrapper').html(el) ;
   el.velocity({
       opacity: 1
   }, 300);
});
    $('.left_arrow').click(function () {
        var el = nextSlider.parent().prev().children().clone().css('opacity', '0');
        nextSlider = nextSlider.parent().prev().children();
        console.log(nextSlider.length);
        if(nextSlider.length == 0) {
            el = $('.certificates_document_image')[5];
            nextSlider = $(el);
            el = $(el).clone().css('opacity', '0');
        }

        $('.cer_slider_wrapper').html(el) ;
        el.velocity({
            opacity: 1
        }, 300);
    });


});
$('.contacts_btn').click(function () {
   $('.contacts_info').css('display', 'none');
});
$('.map_mark').click(function () {
    $('.contacts_info').css('display', 'inline-block');
});