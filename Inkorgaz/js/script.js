$(document).ready(function(){
  $('.slider').slick({
    setting-name: setting-value
  });
});
$('.slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4
  arrows: true,
  prevArrow: '<div class="prevarrow"></div>',
  nextArrow: '<div class="nextarrow"></div>',
  fade: true,
  infinite: true,
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  asNavFor: '.slider',
  dots: false,
  centerMode: false,
  infinite: true,
  focusOnSelect: true
});
	