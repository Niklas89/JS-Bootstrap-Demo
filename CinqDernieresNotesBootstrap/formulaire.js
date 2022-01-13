let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
document.getElementById("form").addEventListener("submit", function(evt){
    // preventDefault(): the default action will not be performed as it normally is.
    // here the submit  on the form  don't engage the loading of the page
    if(verifyPassword() == true) {
        console.log("OK");
    } else {
        evt.preventDefault(); 
    }
});

function verifyPassword() {
    console.log(password.value);
    //document.getElementById("submit").addEventListener('click', (event) => { 
        if(password.value == confirmPassword.value) {
            //location.href = "./notes.html";
            return true;
        } else {
            password.style.border = "3px solid red"; 
            confirmPassword.style.border = "3px solid red"; 
            return false;
        }
  // });
}
