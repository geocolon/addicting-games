'use strict';

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  autoWidth:false,
  nav:true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:5
    }
  },
  items:4,
  navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
});

// $('.owl-carousel').owlCarousel({
//   loop:true,
//   margin:10,
//   nav:true,
//   responsive:{
//     0:{
//       items:1
//     },
//     600:{
//       items:3
//     },
//     1000:{
//       items:5
//     }
//   }
// });
// https://codepen.io/MTushar/pen/GoNxOe

jQuery(document).ready(function(){
  jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
      width:jQuery(this).attr('data-percent')
    },6000);
  });
});