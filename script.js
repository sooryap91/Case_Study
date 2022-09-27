var email=document.getElementById("email");
var password=document.getElementById("password");
var error=document.getElementById("error");
   function validate(){

    if(email.value =="admin" && password.value =="12345") 
    {
        error.innerHTML="valid";
        return true;
    }
    else {
        error.alert("Username or Password Incorrect");
        return false;
        }
       
}
  