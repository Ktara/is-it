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
(function(){

    var $slides = $(".calculate-slide-block");
    var $line = $(".calculate-progress-line");
    var $btnPrev = $(".btn-cal-prev");
    var $btnNext = $(".btn-cal-next");
    var counter = 0;
    var linePosition = 8.5;
    var oldPosition = 8.5 + 16.6*($slides.length - 2);

    function nextSlide() {
      
      $($slides[counter]).animate({opacity:0}, 600);

      if(counter === $slides.length-2)  {
      $btnNext.css("display" , "none");
      linePosition = 100;
      } else {
        linePosition = linePosition + 16.6;
      }

      $line.animate({
        width : linePosition + "%"
      }, 600);

      setTimeout(function(){
        $($slides[counter-1]).css("display", "none");
      }, 600)

      counter = counter + 1;

      if(counter > 0) $btnPrev.css("display", "inline-block");

      $($slides[counter]).css("display", "block").animate({opacity:1}, 600);
    };
    function prevSlide() {

      $($slides[counter]).animate({opacity:0}, 600);
      if(counter < $slides.length) $btnNext.css("display" , "inline-block"); 

      if(counter === $slides.length - 1) {
        linePosition = oldPosition;
      } else {
        linePosition = linePosition - 16.6;        
      }


      
      $line.animate({
        width : linePosition + "%"
      }, 600);

      setTimeout(function(){
        $($slides[counter+1]).css("display", "none");
      }, 600)

      counter = counter - 1;

      if(counter === 0) $btnPrev.css("display", "none");
      $($slides[counter]).css("display", "block").animate({opacity:1}, 600);
    };
    $btnNext.click(nextSlide);
    $btnPrev.click(prevSlide);


})();

