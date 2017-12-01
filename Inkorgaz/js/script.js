$('.slider-logo').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="prevarrow"></div>',
  nextArrow: '<div class="nextarrow"></div>'
});

console.log("rere");
(function(){
    $(".popup-button").click(function(e){
      console.log("rere");
        $(".customer-about-popup").addClass("popup-active");

    });
    $(".popup-close").click(function(e){
       $(".customer-about-popup").removeClass("popup-active");
    })
     $(".customer-about-popup").click(function(e){
      if(this != e.target) return;
        $(".customer-about-popup").removeClass("popup-active");
     })
})();
	