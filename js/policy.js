(function ($) {
    "use strict";
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('sticky-top shadow-sm');
    } else {
        $('.navbar').removeClass('sticky-top shadow-sm'); 
    } 
  }); 
  
  })(jQuery);

function check(){

    setTimeout(() => {
        window.location.href = "index.html"; 
    }, 2000); 

}