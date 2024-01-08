$('.about__slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  swipe: true,
  dots: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000
});


var menu = $('.header__menu');
var burgerBtn = $('.header__burger-btn');

$(function () {
    $(burgerBtn).on('click', function () {
        $(this).toggleClass('header__burger-btn--open');
        $(menu).toggleClass('header__menu--open');
    });
});

$(function () {
  $('.product').on('click', function () {
    if ($(this).hasClass('product--visible')) {
      $(this).removeClass('product--visible');
    } else {
      $('.product').removeClass('product--visible');
      $(this).addClass('product--visible');
    }
  });
});

