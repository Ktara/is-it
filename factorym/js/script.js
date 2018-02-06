var myVivusFM = new Vivus('fm_anim');
myVivusFM
  .stop()
  .reset()
  .play(1);




$('.about_slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2500,
	fade: true,
	zIndex: 100
});