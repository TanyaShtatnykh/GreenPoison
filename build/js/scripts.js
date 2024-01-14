$('.about__slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  swipe: true,
  dots: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1400,
      settings: {
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
  ]
});

const inputName = document.querySelector('.contacts__field--name');
const inputPhone = document.querySelector('.contacts__field--phone');
const regSymbolName = /[0-9!@#$%^&*()+/_=]/g;
const regSymbolPhone = /[a-zA-Z!@#$%^&*()/_=]/g;
const btnReserve = document.querySelector('.contacts__reserve-btn');
const formReserve = document.querySelector('.contacts__form');

inputName.oninput = function () {
  this.value = this.value.replace(regSymbolName, '');
}

inputPhone.oninput = function () {
  this.value = this.value.replace(regSymbolPhone, '');
  if (this.value.length > 0 && this.value.length < 11) {
    btnReserve.setAttribute('disabled', '');
    btnReserve.classList.add('contacts__reserve-btn--disabled');
    formReserve.classList.add('contacts__form--disabled');
  } else {
    btnReserve.removeAttribute('disabled', '');
    btnReserve.classList.remove('contacts__reserve-btn--disabled');
    formReserve.classList.remove('contacts__form--disabled');
  };
}




var menu = $('.header__menu');
var burgerBtn = $('.header__burger-btn');

$(function () {
    $(burgerBtn).on('click', function () {
        $(this).toggleClass('header__burger-btn--open');
        $(menu).toggleClass('header__menu--open');
    });
    $('.header__menu-link').on('click', function () {
        $(burgerBtn).removeClass('header__burger-btn--open');
        $(menu).removeClass('header__menu--open');
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

