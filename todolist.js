function ajax()
{
    var request= new XMLHttpRequest();
    request.onreadystatechange=function(){
    
        if(request.readyState == 4 & request.status == 200){

             var response = JSON.parse(this.responseText);
           checkbox() 
        }
    };
    request.open("GET",'https://jsonplaceholder.typicode.com/todos');

    request.send()
}