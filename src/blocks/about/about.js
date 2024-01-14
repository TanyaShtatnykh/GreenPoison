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