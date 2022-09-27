
    function validate(){
        var email=document.getElementById("email");
        var password=document.getElementById("password");
        var error=document.getElementById("error");
        if((email.value=="")||(password.value==""))
            {
            error.innerHTML="Fields cannot be empty";
            error.style.color="red";
            return false;
           }
    if((email.value=="admin")&&(password.value=="12345"))
    {
        error.innerHTML="valid";
        return true;
    }
    else {
        error.innerHTML="Invalid";
        error.style.color="red";
        return false;
        }
    }
  