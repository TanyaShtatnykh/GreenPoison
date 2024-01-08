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