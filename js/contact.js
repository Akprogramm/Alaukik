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

        console.log("clicked");
})