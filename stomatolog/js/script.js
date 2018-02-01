 $(document).ready(function(){
    $(".nav_header_menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
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
  .play(1, function(){
  	// $('.st0').velocity({'fill-opacity': 1}, 300);
  	// console.log($('.st0'));
  	// $('#Layer_1').css("fill-opacity" , 1);
  });

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
} ; 



(function(){
  $(".show_btn").click(function(e){
    $(e.target).css("display" , "none");
    console.log(e.target);
    var trHeight = $(e.target).prev().children().css("height");
    $(e.target).prev().animate({"height" : trHeight}, 600);
  });
})();



(function(){
  $(".show_icon").click(function(e){
    $(e.target).css("display" , "none");
    console.log(e.target);
    var trHeight = $(e.target).prev().children().css("height");
    $(e.target).prev().animate({"height" : trHeight}, 600);
  });
})();


(function(){
  $(".show_block").click(function(e){
    $(e.target).css("display" , "none");
    console.log($(e.target).prev());
    console.log(e.target);
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