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

$('.gallery_slider_viewer').fortySlider(600, '.gallery_prevarrow', '.gallery_nextarrow', '.gallery_counter');


$('.reviews_slider_viewer').fortySlider(600, '.reviews_prevarrow', '.reviews_nextarrow', '.reviews_counter');





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
