var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("signUp_btn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// start signin coding

var signin_modal = document.getElementById("myModal_signin");
var signIn_btn=document.getElementById("signIn_btn");
var signin_span = document.getElementsByClassName("signin_close")[0];
var re_signup=document.getElementById("re_signup");
signIn_btn.onclick = function() {
    signin_modal.style.display = "block";
  }

  signin_span.onclick = function() {
    signin_modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == signin_modal) {
        signin_modal.style.display = "none";
    }
  }


  re_signup.onclick = function() {
    signin_modal.style.display = "none";
    modal.style.display = "block";

  }