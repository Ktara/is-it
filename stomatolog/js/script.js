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


// var myVivus7 = new Vivus('box_anim7');
// myVivus7.stop().reset().play(2);

// var myVivusmain = new Vivus('main_anim');
// myVivusmain
//   .stop()
//   .reset()
//   .play(2);

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


// var myVivusAnton = new Vivus('anton_anim', {
// 	start: 'manual',
// });
// myVivusAnton.setFrameProgress(0).stop();

  var startanim = $('.advantage').offset().top;
var $status = false;
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;





  if (scrolled > startanim*0.6 && $status == false) {
  	$status = true;


// var myVivus2 = new Vivus('box_anim2');
// myVivus2.stop();
// var myVivus3= new Vivus('box_anim3');
// myVivus3.stop();

// var myVivus4 = new Vivus('box_anim4');
// myVivus4.stop();
// var myVivus5 = new Vivus('box_anim5');
// myVivus5.stop();
// var myVivus6 = new Vivus('box_anim6');
// myVivus6.stop();



// myVivus2.stop();

// myVivus3.stop();

// myVivus.stop();

// myVivus4.stop();

// myVivus5.stop();

// myVivus6.stop();


myVivus.reset().play(0.5);

myVivus2.reset().play(0.5);

myVivus3.reset().play(0.5);

myVivus4.reset().play(0.5);

myVivus5.reset().play(0.5);

myVivus6.reset().play(0.5);

myVivustooth1.reset().play(0.5);

myVivustooth2.reset().play(0.5);

myVivustooth3.reset().play(0.5);

myVivustooth4.reset().play(0.5);

myVivustooth5.reset().play(0.5);

myVivustooth6.reset().play(0.5);



// myVivusAnton.reset().play(1);
  };
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