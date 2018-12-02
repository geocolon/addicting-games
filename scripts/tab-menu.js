'use strict';
$(document).ready(function(){            
  // let next = document.getElementById('next').style.display;
  // let cls1 = document.getElementById('cls1').style.display;  
  // console.log(prev);
  
  $('#next').click(function(){
    if ($('.divs .slide-menu:visible').next('.slide-menu').length !== 0)
      $('.divs .slide-menu:visible').next('.slide-menu').show().prev().hide();
    else {
      $('.divs .slide-menu:visible').hide();
      $('.divs .slide-menu:first').show();
    }
    if($('#cls1').css('display') === 'none'){
      $('#prev').show();
    } else {
      $('#prev').hide();
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
    if($('#cls1').css('display') === 'none'){
      $('#prev').show();
    } else {
      $('#prev').hide();
    }
    return false;
  });
});