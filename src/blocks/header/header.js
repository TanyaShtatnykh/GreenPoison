$(function () {
    var menu = $('.header__menu');
    var burgerBtn = $('.header__burger-btn');

    $(burgerBtn).on('click', function () {
        $(this).toggleClass('header__burger-btn--open');
        $(menu).toggleClass('header__menu--open');
    });
    $('.header__menu-link').on('click', function () {
        $(burgerBtn).removeClass('header__burger-btn--open');
        $(menu).removeClass('header__menu--open');
    });
});