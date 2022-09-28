// username and password validation and using callback function to go to todo list page
    function login(success){
        var email=document.getElementById("email");
        var password=document.getElementById("password");
        success(email,password);
        }
        function onsuccess(email,password){
       
    if((email.value=="admin")&&(password.value=="12345"))
    {
        // alert("Login credentials are valid")
        document.querySelector("form").action="./todolist.html";
        
    }
    else {
        
        alert("Incorrect username or password");

        }
    }
    function validate(){
        login(onsuccess);
    }
  