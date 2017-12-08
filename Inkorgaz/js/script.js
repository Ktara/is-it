$('.slider-logo').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="prevarrow"></div>',
  nextArrow: '<div class="nextarrow"></div>'
});

$('.slider-logo-mobile').slick({
  infinite: true,
  slidesToShow: 2,
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
	$( document ).ready( function( )
{
  new ScrollFlow(); 
} );

  $(".link-btn").click(function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
});
(function(){



})(); 


(function(){ 


  function animateText(textClass, time) {
    var $target = $(textClass);
    $target.css("opacity", "1");
    var text = $target.text();
    $target.html('');

    var textArray = text.split('');
    var textLength = textArray.length;
    var i = 0;
    function showSymbol() {
      if(i < textLength) {
      $target.append(textArray[i]);
      i = i + 1;
      setTimeout(showSymbol, time/textLength);        
    } else {
      return;
    }

    };
    showSymbol();

  }
  animateText(".animate_text", 2000);  
  setTimeout(function(){
      animateText(".animate_text_20", 2000);
    }, 2000);

  var $screen = screen.height/2;

if($(".animate_text_1")[0] != undefined) {
  var animtext1 = $(".animate_text_1");
  var firstStage = animtext1.offset().top;
  var firstStageStatus = false;
}
if($(".animate_text_2")[0] != undefined) {
  var animtext2 = $(".animate_text_2");
  var Stage2 = animtext2.offset().top;
  var Stage2Status = false;
}
if($(".animate_text_3")[0] != undefined) {
  var animtext3 = $(".animate_text_3");
  var Stage3 = animtext3.offset().top;
  var Stage3Status = false;
}
if($(".animate_text_4")[0] != undefined) {
  var animtext4 = $(".animate_text_4");
  var Stage4 = animtext4.offset().top;
  var Stage4Status = false;
}
if($(".animate_text_5")[0] != undefined) {
  var animtext5 = $(".animate_text_5");
  var Stage5 = animtext5.offset().top;
  var Stage5Status = false;
}
if($(".animate_text_6")[0] != undefined) {
  var animtext6 = $(".animate_text_6");
  var Stage6 = animtext6.offset().top;
  var Stage6Status = false;
}
          window.onscroll = function() {
                var scrolled = window.pageYOffset || document.documentElement.scrollTop;

                if($(".animate_text_1")[0] != undefined && scrolled > firstStage-$screen && firstStageStatus === false) {
                    firstStageStatus = true;
                    animateText(".animate_text_1", 1000);
                }
                if($(".animate_text_2")[0] != undefined && scrolled > Stage2-$screen && Stage2Status === false) {
                    Stage2Status = true;
                    animateText(".animate_text_2", 1000);
                }
                if($(".animate_text_3")[0] != undefined && scrolled > Stage3-$screen && Stage3Status === false) {
                    Stage3Status = true;
                    animateText(".animate_text_3", 2000);
                }
                if($(".animate_text_4")[0] != undefined && scrolled > Stage4-$screen && Stage4Status === false) {
                    Stage4Status = true;
                    animateText(".animate_text_4", 700);
                } 


                if($(".animate_text_5")[0] != undefined && scrolled > Stage5-$screen/2 && Stage5Status === false) {
                    Stage5Status = true;
                    animateText(".animate_text_5", 2000);
                }
                if($(".animate_text_6")[0] != undefined && scrolled > Stage6-$screen && Stage6Status === false) {
                    Stage6Status = true;
                    animateText(".animate_text_6", 2000);
                }

            function getCoords(elem) {
                var box = elem.getBoundingClientRect();
                return box.top + pageYOffset;
            }
        };
})(); 