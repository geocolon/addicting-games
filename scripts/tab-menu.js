'use strict';
$(document).ready(function(){

  $('#next').click(function(){
    if ($('.divs .slide-menu:visible').next('.slide-menu').length !== 0)
      $('.divs .slide-menu:visible').next('.slide-menu').show().prev().hide();
    else {
      $('.divs .slide-menu:visible').hide();
      $('.divs .slide-menu:first').show();
    }
    return false;
  });

  $('#prev').click(function(){
    if ($('.divs .slide-menu:visible').prev('.slide-menu').length !== 0)
      $('.divs .slide-menu:visible').prev('.slide-menu').show().next().hide();
    else {
      $('.divs .slide-menu:visible').hide();
      $('.divs .slide-menu:last').show();
    }
    return false;
  });
});