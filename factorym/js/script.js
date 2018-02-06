var myVivusFM = new Vivus('fm_anim');
myVivusFM
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






$('.menu_stage li').click(function(){
	$('.menu_stage li').css('opacity', '0.5');
	$(this).css('opacity', '1');
	var libox = this;	
	for(var i = 0; i < $('.menu_stage li').length; i++) {

		if($('.menu_stage li')[i] == libox) {

			var target = $('.menu_slider_block')[i];
			$(target).parent().animate({
				height : $(target).css('height')
			}, 800);
			$('.menu_slider_block').css('display', 'none');
			$(target).css({
				'display': 'block',
				'opacity' : '0'}).animate({
					opacity : 1
				}, 400);
	};
};
});




$('.reviews_slider_wrapper').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="reviews_prevarrow"></div>',
  nextArrow: '<div class="reviews_nextarrow"></div>',
  fade: true,  
});




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