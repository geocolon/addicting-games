'use strict';
$(document).ready(function(){
  $('.divs .slide-menu').each(function(e) {
    if (e != 0)
      $(this).hide();
  });

  $('#next').click(function(){
    if ($('.divs .slide-menu:visible').next().length !== 0)
      $('.divs .slide-menu:visible').next().show().prev().hide();
    else {
      $('.divs .slide-menu:visible').hide();
      $('.divs .slide-menu:first').show();
    }
    return false;
  });

  $('#prev').click(function(){
    if ($('.divs .slide-menu:visible').prev().length !== 0)
      $('.divs .slide-menu:visible').prev().show().next().hide();
    else {
      $('.divs .slide-menu:visible').hide();
      $('.divs .slide-menu:last').show();
    }
    return false;
  });
});