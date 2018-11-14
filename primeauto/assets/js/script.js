$('.products_trust_slider_wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<div class="products_trust_prew_arrow"></div>',
    prevArrow: '<div class="products_trust_next_arrow"></div>',
    infinite: true
});




window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrolled);
    if(scrolled > 20) {
        $('.nav_product').addClass('nav_product_active');
        $('.nav_header').addClass('nav_product_active');
    } else {
        $('.nav_product').removeClass('nav_product_active');
        $('.nav_header').removeClass('nav_product_active');
    };

};