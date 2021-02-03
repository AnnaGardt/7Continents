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
});