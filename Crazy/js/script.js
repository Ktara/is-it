 $('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="prevarrow"></div>',
  nextArrow: '<div class="nextarrow"></div>',
  fade: true,
  infinite: true,
});
$('.slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slider',
  dots: false,
  centerMode: false,
  infinite: true,
  focusOnSelect: true
});
$('body').scrollspy({ target: '#nav_wrapper', offset: 120 })
$(document).ready(function(){
    $(".nav-header-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });
});
