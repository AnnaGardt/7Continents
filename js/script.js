$(function(){
  $('.tabs__btn').on('click', function(ev){
    ev.preventDefault();
    $('.tabs__btn').removeClass('tabs__btn_active');
    $('.tabs__content').removeClass('tabs__content_active');

    $(this).addClass('tabs__btn_active');
    $($(this).attr('href')).addClass('tabs__content_active');
  });
  $('.tabs__mobile').on ('change', function(ev) {    
    $('.tabs__content').removeClass('tabs__content_active');

    $($(this).val()).addClass('tabs__content_active');
  });
  $('.tabs__mobile').styler();

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: true,
    disableOnInteraction: false,
    loop: true,
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  });
});