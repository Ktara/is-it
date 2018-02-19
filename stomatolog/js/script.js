 $(document).ready(function(){
    $(".nav_header_menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$('.main_slider_wrapper').slick({  
	infinite: true,	
	fade: true,	
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 4000,
	prevArrow: '<div class="main_prevarrow"></div>',
	nextArrow: '<div class="main_nextarrow"></div>'
});

$('.reviews_slide').slick({  
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	prevArrow: '<div class="prevarrow"></div>',
	nextArrow: '<div class="nextarrow"></div>'
});



$('.gallery_slide_nav_img').click(function(){
	var slide_img = $(this).clone().css('opacity', '0');	
	$('.gallery_slider_img').html(slide_img);
	slide_img.animate({
		opacity: 1
	}, 200);
});


$( document ).ready(function(){
	var heightimg = $('.gallery_slider_img').css('height');
	$('.gallery_slide_nav').css('height', heightimg);
})



$('.services_stage li').click(function(){
	$('.services_stage li').css('opacity', '0.5');
	$(this).css('opacity', '1');
	var libox = this;
	var tooth = $('.services_progress img');
	for(var i = 0; i < $('.services_stage li').length; i++) {

		if($('.services_stage li')[i] == libox) {

			var target = $('.services_slide_block')[i];
			$(target).parent().animate({
				height : $(target).css('height')
			}, 800);
			$('.services_slide_block').css('display', 'none');
			$(target).css({
				'display': 'block',
				'opacity' : '0'}).animate({
					opacity : 1
				}, 400);
			if( i == 0) tooth.animate({
				left : '-5px'
			}, 600);
			if( i == 1) tooth.animate({
				left : '27%'
			}, 600);
			if( i == 2) tooth.animate({
				left : '56%'
			}, 600);
			if( i == 3) tooth.animate({
				left : '83%'
			}, 600);

	};
};
});


$('.gallery_slider_nav_mob').slick({  
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	prevArrow: '<div class="gallery_prevarrow"></div>',
	nextArrow: '<div class="gallery_nextarrow"></div>'
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


$('.services_slide_mob').slick({  
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	prevArrow: '<div class="services_prevarrow"></div>',
	nextArrow: '<div class="services_nextarrow"></div>'
});

var myVivus = new Vivus('box_anim', {
	start: 'manual',
});
myVivus.setFrameProgress(0).stop();

var myVivus2 = new Vivus('box_anim2', {
	start: 'manual',
});
myVivus2.setFrameProgress(0).stop();

var myVivus3 = new Vivus('box_anim3', {
	start: 'manual',
});
myVivus3.setFrameProgress(0).stop();

var myVivus4 = new Vivus('box_anim4', {
	start: 'manual',
});
myVivus4.setFrameProgress(0).stop();

var myVivus5 = new Vivus('box_anim5', {
	start: 'manual',
});
myVivus5.setFrameProgress(0).stop();

var myVivus6 = new Vivus('box_anim6', {
	start: 'manual',
});
myVivus6.setFrameProgress(0).stop();


var myVivustooth1 = new Vivus('box_anim7', {
	start: 'manual',
});
myVivustooth1.setFrameProgress(0).stop();

var myVivustooth2 = new Vivus('box_anim8', {
	start: 'manual',
});
myVivustooth2.setFrameProgress(0).stop();

var myVivustooth3 = new Vivus('box_anim9', {
	start: 'manual',
});
myVivustooth3.setFrameProgress(0).stop();

var myVivustooth4 = new Vivus('box_anim10', {
	start: 'manual',
});
myVivustooth4.setFrameProgress(0).stop();

var myVivustooth5 = new Vivus('box_anim11', {
	start: 'manual',
});
myVivustooth5.setFrameProgress(0).stop();

var myVivustooth6 = new Vivus('box_anim12', {
	start: 'manual',
});
myVivustooth6.setFrameProgress(0).stop();


var myVivusAnton = new Vivus('anton_anim');
myVivusAnton
  .stop()
  .reset()
  .play(1);

// var myVivusLines = new Vivus('anim_line');
// myVivusLines
//   .play(.2);



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



var startanim = $('.advantage').offset().top;
var $status = false;
var $status2 = false;







var startanim = $('.advantage').offset().top;
var $status = false;
var $status2 = false;
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;


  $(".main").css("top", -scrolled/2.1);


  if (scrolled > startanim*0.75 && $status == false) {
  	$status = true;

myVivustooth1.reset().play(0.7);

myVivustooth2.reset().play(0.7);

myVivustooth3.reset().play(0.7);

myVivustooth4.reset().play(0.7);

myVivustooth5.reset().play(0.7);

myVivustooth6.reset().play(0.7);

  };
  if (scrolled > startanim*0.9 && $status2 == false) {
  	$status2 = true;
  	myVivus.reset().play(1);

myVivus2.reset().play(1);

myVivus3.reset().play(1);

myVivus4.reset().play(1);

myVivus5.reset().play(1);

myVivus6.reset().play(1);
  }


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
    animateText(".animate_text_3", 1000);
}
if($(".animate_text_4")[0] != undefined && scrolled > Stage4-$screen*3 && Stage4Status === false) {
    Stage4Status = true;
    animateText(".animate_text_4", 1000);
}
if($(".animate_text_5")[0] != undefined && scrolled > Stage5-$screen*3 && Stage5Status === false) {
    Stage5Status = true;
    animateText(".animate_text_5", 1000);
}


   




} ; 



(function(){
  $(".show_btn").click(function(e){
    $(e.target).css("display" , "none");    
    var trHeight = $(e.target).prev().children().css("height");
    $(e.target).prev().animate({"height" : trHeight}, 600);
  });
})();



(function(){
  $(".show_icon").click(function(e){
    $(e.target).css("display" , "none");    
    var trHeight = $(e.target).prev().children().css("height");
    $(e.target).prev().animate({"height" : trHeight}, 600);
  });
})();


(function(){
  $(".show_block").click(function(e){
    $(e.target).css("display" , "none");   
    var trHeight = $(e.target).prev().children().css("height");
    $(e.target).prev().animate({"height" : trHeight}, 600);
  });
})();


$('.certificate_slide').slick({  
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: '<div class="certificate_prevarrow"></div>',
	nextArrow: '<div class="certificate_nextarrow"></div>'
});