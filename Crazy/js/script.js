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
(function(){
    $(".show .btn").click(function(e){
        var text = $(this).prev().text();
        $("#showType").val(text);
        $(".contacts-popup").addClass("popup-active");

    });
    $(".popup-close").click(function(e){
       $(".contacts-popup").removeClass("popup-active");
    })
     $(".contacts-popup").click(function(e){
      if(this != e.target) return;
        $(".contacts-popup").removeClass("popup-active");
     })
})();

 (function() {
  
  var calculator = new Vue({
    el: '#calculate',
    data: {
      holidayType : 'Невизначений',
      guestAdult : 0,
      guestChild : 0,
      animator : 'Невизначений',
      animatorPrice : 0,
      excursion : 'Невизначений',
      excursionPrice : 0,
      showing : [],
      showingPrice : 0,
      fullPrice: 0
     },
    computed: {
      guests: function() {
        var res1;
        var res2;
        if(this.guestAdult == 1) {
          res1 = "1 дорослий";
        }
        if(this.guestChild == 1) {
          res2 = "1 дитина";
        }
        if(this.guestAdult > 1) {
          res1 = this.guestAdult + " дорослих";
        }
        if(this.guestChild > 1) {
          res2 = this.guestChild + " дітей";
        }
        if(this.guestAdult == 0 && this.guestChild>0) {
          res1 = "";
        };
        if(this.guestAdult > 0 && this.guestChild==0) {
          res2 = "";
        };
        if(this.guestAdult == 0 && this.guestChild==0) {
          return "Невідомо";
        } else {
          return res1 + " та " + res2;
        }
      },
      shows: function() {
        var result = "";
        for(show in this.showing) {
          result = result + "<p>" + this.showing[show]+ "</p>";
        };
        return result;
    },
      getPrice: function() {
          var pattern = /[0-9]+/g;
          var text = this.animator;
          var matches = text.match(pattern);
          if(matches != null) {
            this.animatorPrice = parseInt(matches[0], 10);
          } else {
            this.animatorPrice = 0;
          }
          
      },
      getExcPrice : function(){
          var pattern = /[0-9]+/g;
          var text = this.excursion;
          var matches = text.match(pattern);
          if(matches != null) {
            this.excursionPrice = parseInt(matches[0], 10);
          } else {
            this.excursionPrice = 0;
          }
      },
      getShowPrice : function(){
          var pattern = /[0-9]+/g;
          // for(show as this.showing)
          this.showingPrice = 0;
          for(var i = 0; i < this.showing.length; i++) {
              var text = this.showing[i];
              var matches = text.match(pattern);
              if(matches != null) {
                  var result = matches[0];
                  result = parseInt(result, 10);
                  this.showingPrice +=result;
                } else {
                  this.excursionPrice = 0;
                };
          };

      },
      getFullPrice : function(){
        var adultPrice = document.querySelector("#adultPrice").value;
        var childPrice = document.querySelector("#childPrice").value;
        var guestPrice = this.guestAdult*adultPrice + this.guestChild * childPrice;
        var result = this.showingPrice + this.excursionPrice + this.animatorPrice + guestPrice;
        this.fullPrice = result;
      }
    },
    methods: {

    }
});
})();

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
    $(".link-btn").click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
(function(){

    var $slides = $(".calculate-slide-block");
    var $line = $(".calculate-progress-line");
    var $btnPrev = $(".btn-cal-prev");
    var $btnNext = $(".btn-cal-next");
    var $fullPrice = $(".full-price");
    var counter = 0;
    var linePosition = 8.5;
    var oldPosition = 8.5 + 16.6*($slides.length - 2);

    function nextSlide() {

      $($slides[counter]).animate({opacity:0}, 600);

      if(counter === $slides.length-2)  {
      $btnNext.css("display" , "none");
      $fullPrice.css("display" , "inline-block");
      linePosition = 100;

      } else {
        linePosition = linePosition + 16.6;
        $fullPrice.css("display" , "none");
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

$( function() {
    $( "#datepicker" ).datepicker();
  } );
(function(){
  var status = false;
  $("#nav_wrapper").click(function(){
    if (  parseInt($('body').css(width), 10) < 768) return;
    if(status === false) {
       $(this).addClass("nav-active");
       status = true;
    } else {
      $(this).removeClass("nav-active");
      status = false;
    }
       
  })
})();

// $.fn.fortySlider = function(time, lArrow, rArrow, counter, seperator, method)
$(".main-row-slider").fortySlider(600, ".main-prevarrow", ".main-nextarrow", ".main-slider-counter");

$(".holliday-slider-viewer").fortySlider(600, ".holliday-prevarrow", ".holliday-nextarrow"); 