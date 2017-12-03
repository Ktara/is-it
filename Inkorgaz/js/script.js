$('.slider-logo').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="prevarrow"></div>',
  nextArrow: '<div class="nextarrow"></div>'
});


(function(){
    $(".popup-button").click(function(e){     
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
(function(){
   $('.show_search').click(function(e){
      $('.show_search').css("display" , "none");
      $('.search_tr').css({
        "width" : "150px",
        "visibility" : "visible"
      });
    $(document).click(function(e){
      if(e.target === $('.search_tr')[0] || e.target ===  $('.show_search')[0]) {
        return;
      }
      else{
        $('.show_search').css("display" , "inline-block");
        $('.search_tr').css({
          "width" : "0",
          "visibility" : "hidden"
      });
      };

    })  
   });
})();
(function(){
  var status = false;
  $("#nav_wrapper").click(function(){
    if (parseInt($('body').css("width"), 10) > 768) return;
        console.log('tets');
    if(status === false) {
       $(this).addClass("nav-active");
       status = true;
    } else {
      $(this).removeClass("nav-active");
      status = false;
    }
       
  })
})();
(function(){
  $(".show_text").click(function(e){
    $(e.target).css("display" , "none");
    var trHeight = $(e.target).prev().children().css("height");
    $(e.target).prev().animate({"height" : trHeight}, 600);
  });
})();
	