var menu = $('.header__menu');
var burgerBtn = $('.header__burger-btn');

$(function () {
    $(burgerBtn).on('click', function () {
        $(this).toggleClass('header__burger-btn--open');
        $(menu).toggleClass('header__menu--open');
    });
});