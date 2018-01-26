$('.reviews_slide').slick({
	prevArrow: '<div class="prevarrow"></div>',
	nextArrow: '<div class="nextarrow"></div>'
});



(function(){
  var status = false;
  $("#nav_wrapper").click(function(){    
    if (  parseInt($('body').css("width"), 10) > 768) return;
    if(status === false) {
       $(this).addClass("nav-active");
       status = true;
    } else {
      $(this).removeClass("nav-active");
      status = false;
    }       
  })
})();