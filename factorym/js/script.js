$(document).ready(function () {
$(".header_menu").on("click", "a", function (event) { 
event.preventDefault();
var id = $(this).attr('href')
, top = $(id).offset().top;
$('body,html').animate({
scrollTop: top
}, 1000);
$('.menu_btn').toggleClass('btn_active');
  if($('.menu_btn').hasClass('btn_active')) {
    $('.nav_wrapper').velocity({ 'left': '-20vw'}, 600);
    $('.menu_wrapper').velocity({ 'left': 0}, 600);
  } else {
    $('.nav_wrapper').velocity({ 'left': '10px'}, 600);
    $('.menu_wrapper').velocity({ 'left': '-100%'}, 600);
  }
});

});
(function( $ ) {
  $.fn.fortySlider = function(time, lArrow, rArrow, counter, seperator, method) {

    var $slides = this.children();
    var viewWidth = parseInt(this.css('width'), 10) ;
    $slides.css({
      "position" : "absolute",
      "left"     : -viewWidth,
      "visibility"  : "hidden",
      "opacity"     : "0"
    });
    $($slides[0]).css({
      "position" : "absolute",
      "left"     : "0",
      "visibility"  : "visible",
      "opacity"     : "1"
    });
    $($slides[$slides.length-1]).css({
      "left"     : viewWidth,
    });

    var $lArrow = $(lArrow);
    var $rArrow = $(rArrow);
    var $seperator = seperator ? seperator : "/";

    var i = 0;
    var $count = (i+1) + $seperator + $slides.length;
    var $counter = $(counter).html($count);
    var $current;
    var $next;

    function showSlide() {
      $current = $($slides[i]);
      if(this == $lArrow[0]) {
        $current.animate({
          "opacity" : 0
        }, time);
        setTimeout(function(){
          $current.css({
            "left" : viewWidth,
            "visibility" : "hidden"
          })
        }, time);
        --i;
        if(i === -1) i = $slides.length - 1;
        $next = $($slides[i]);
        $next.css({
            "left" : 0,
            "visibility" : "visible"
          }).animate({
          opacity : 1,
        }, time);
      }
      if(this == $rArrow[0]) {
        $current.animate({
          "opacity" : 0
        }, time);
        setTimeout(function(){
          $current.css({
            "left" : -viewWidth,
            "visibility" : "hidden"
          })
        }, time);
        ++i;
        if(i === $slides.length) i = 0;
        $next = $($slides[i]);
        $next.css({
            "left" : 0,
            "visibility" : "visible"
          }).animate({
          opacity : 1,
        }, time);
      }
    $count = (i+1) + $seperator + $slides.length;
      $counter = $(counter).html($count);
    }
    $lArrow.click(showSlide);
    $rArrow.click(showSlide);

      return this.each(function() {
          var $this  = $(this);
        });

  };
})(jQuery);

$('.menu_btn').click(function(){
  $('.menu_btn').toggleClass('btn_active');
  if($('.menu_btn').hasClass('btn_active')) {
    $('.nav_wrapper').velocity({ 'left': '-20vw'}, 600);
    $('.menu_wrapper').velocity({ 'left': 0}, 600);
  } else {
    $('.nav_wrapper').velocity({ 'left': '10px'}, 600);
    $('.menu_wrapper').velocity({ 'left': '-100%'}, 600);
  }
});


(function(){

              var $menuLi = $(".nav_header_menu li");
              var $menuList = $(".header_menu li a");
              var punctPosition = [];
              var punctHeight = [];
              var id = $menuList.attr('href');
              var i = 0;
              $menuList.each(function(){
                var  punct = $(this).attr('href');
                punctPosition[i] = $(punct).offset().top;
                punctHeight[i] = parseInt($(punct).css("height"), 10);
                i++;

              });
                window.onscroll = function() {
                var scrolled = window.pageYOffset || document.documentElement.scrollTop; 

               if(scrolled < punctPosition[0]) {
                 $(".active_punct").removeClass("active_punct");
                 $('.menu_btn').removeClass('menu_btn_first');
               }
               if (punctPosition[0] - 100 < scrolled && scrolled - 100  < punctPosition[1]) {
                 $(".active_punct").removeClass("active_punct");
                 $($menuLi[0]).addClass("active_punct");
                 $('.menu_btn').addClass('menu_btn_first');
               };
               if (punctPosition[1] - 100  < scrolled && scrolled - 100  < punctPosition[2]) {
                 $(".active_punct").removeClass("active_punct");
                 $($menuLi[1]).addClass("active_punct");
               }
               if (punctPosition[2] - 100  < scrolled && scrolled - 100  < punctPosition[3]) {
                 $(".active_punct").removeClass("active_punct");
                 $($menuLi[2]).addClass("active_punct");
               }
               if (punctPosition[3] - 100  < scrolled && scrolled - 100  < punctPosition[4]) {
                 $(".active_punct").removeClass("active_punct");
                 $($menuLi[3]).addClass("active_punct");
               }
               if (punctPosition[4] - 100  < scrolled && scrolled - 100  < punctPosition[5]) {
                 $(".active_punct").removeClass("active_punct");
                 $($menuLi[4]).addClass("active_punct");
               }
               if (punctPosition[5] - 100  < scrolled && scrolled - 100  < punctPosition[6]) {
                 $(".active_punct").removeClass("active_punct");
                 $($menuLi[5]).addClass("active_punct");
               }
               if (punctPosition[6] - 100  < scrolled && scrolled - 100  < punctPosition[7]) {
                 $(".active_punct").removeClass("active_punct");
                 $($menuLi[6]).addClass("active_punct");
               }
               if (scrolled + punctHeight[7] > punctPosition[7]) {
                 $(".active_punct").removeClass("active_punct");
                 $($menuLi[7]).addClass("active_punct");
               }




              }



})();




$('.gallery_slider_viewer').fortySlider(600, '.gallery_prevarrow', '.gallery_nextarrow', '.gallery_counter');


$('.reviews_slider_viewer').fortySlider(600, '.reviews_prevarrow', '.reviews_nextarrow', '.reviews_counter');

// $('.menu_slider_mob').fortySlider(600, '.menu_prevarrow', '.menu_nextarrow', '.menu_counter');




var myVivusFM = new Vivus('fm_anim');
myVivusFM
  .stop()
  .reset()
  .play(1);




var myVivusRestaurant = new Vivus('restaurant_anim');
myVivusRestaurant
  .stop()
  .reset()
  .play(1);



$('.about_slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2500,
	fade: true,
	zIndex: 100
});





(function(){
   if($('[data-toggle="datepicker"]')[0] === undefined) return;
   $('[data-toggle="datepicker"]').datepicker({
       format: 'dd.mm.YYYY',
       language: 'ru-RU',
       weekStart: '1',
       startView: '1',
       days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Субота'],
       daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
       daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
       months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
       monthsShort: ['Янв', 'Фев', 'Мрт', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Нбр', 'Дек'],
       autoHide: true
   });
})();





$('.reviews_slide').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="reviews_mob_prevarrow"></div>',
  nextArrow: '<div class="reviews_mob_nextarrow"></div>',
  fade: true,  
});





$('.share_slide').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="share_prevarrow"></div>',
  nextArrow: '<div class="share_nextarrow"></div>',
  fade: true,  
});




$('.gallery_slide').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="gallery_prevarrow"></div>',
  nextArrow: '<div class="gallery_nextarrow"></div>',
  fade: true,  
});


$('.menu_slider_mob').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 2,
  arrows: true,
  prevArrow: '<div class="menu_prevarrow"></div>',
  nextArrow: '<div class="menu_nextarrow"></div>',
  fade: true,  
});



(function(){
	$('.gallery_img').click(function(){


	    $(this).css('opacity', '0').parent().prepend($(this));
		$(this).animate({
			'opacity': 1
		}, 400);
	});
})();


var $slider_nav =  $('.menu_stage li');

$('.menu_slider_wrapper').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="menu_prevarrow"></div>',
  nextArrow: '<div class="menu_nextarrow"></div>',
  fade: true,
  dots: true,
      customPaging : function(slider, i) {
        var thumb = $($slider_nav[i]).text();
        return thumb;
    },
});




(function(){
  $(".show_about").click(function(e){
    $(e.target).css("display" , "none");    
    var trHeight = $(e.target).prev().children().css("height");
    $(e.target).prev().animate({"height" : trHeight}, 800);
  });
})();
