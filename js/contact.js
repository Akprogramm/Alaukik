
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


document.getElementById("sub").addEventListener("click",function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;



    emailjs.init({
        publicKey: "OebcFqWG5wbf5jUxA",
      });

    emailjs.send("service_x2qfcul","template_mpmnnkk",{
        to_name: "Abdul", 
        from_name: name,
        from_email: email,
        message: message,
        reply_to: email,
        });

     document.getElementById("name").value = '';
     document.getElementById("email").value = '';
     document.getElementById("subject").value = '';
     document.getElementById("message").value = '';

    })
    
    
function checkregx(){ 
  let sub = document.getElementById("sub");
 let names = document.getElementById("name").value;
 let email = document.getElementById("email").value;
 let ContactNo = document.getElementById("ContactNo").value;
 let subject = document.getElementById("subject").value; 
 let message = document.getElementById("message").value;

 let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

   if( names != '' && regex.test(email) && ContactNo.length==10 && subject != '' && message != ''){
    sub.disabled = false; 
   } 
   else{
    sub.disabled = true;
   }
}