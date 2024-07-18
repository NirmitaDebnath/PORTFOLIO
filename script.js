document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed('#element', {
    strings: ['<div class="cre">WelcomeToMy<p class="cr">CREATION<p></div>'],
    typeSpeed: 50,
    backSpeed: 100,
    loop: true
  });
});

function sendEmail() {
  Email.send({
    SecureToken: "865698e0-dd0d-4c3d-b4bf-85c472ad2e4d",
    To: 'nirmitadebnath7217@gmail.com',
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body: "Name: " + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value + "<br> Message: " + document.getElementById("message").value
  }).then(
    message => alert("Message Sent Successfully")
  );
}
document.getElementById("toggle-button").addEventListener("click", function() {
  const nav = document.getElementById("navop");
  nav.classList.toggle("show");
});

