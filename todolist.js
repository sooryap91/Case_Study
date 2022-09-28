function ajax()
{
    var request= new XMLHttpRequest();
    request.onreadystatechange=function(){
    
        if(request.readyState == 4 & request.status == 200){

             var response = JSON.parse(this.responseText);
           checkbox(response);
        }
    };
    request.open("GET",'https://jsonplaceholder.typicode.com/todos',true);

    request.send()
}
function checkbox(obj){
    document.getElementById("demo");
    let  table="<thread><tr><th>TITLE</th><th>STATUS</th></tr></thread>";
    for(let i=0;i<obj.length;i++)
    {
        table+="<tr>";
        if(obj[i].completed==true){
            table+="<td>"+obj[i].title+"</td><td><input type=checkbox checked disabled></td>";
        }
        else{
            table+="<td>"+obj[i].title+"</td><td><input type=checkbox name=check onclick=check()></td>";
        }
        table+="</tr>";
        document.getElementById("list").innerHTML=table;
        }
    }
    function check(){
        var check=document.getElementsByName("check");
        var i=0;
        var count=0;
        return new Promise(function(resolve,reject){
        for( i=0;i<check.length;i++){
if(check[i].checked==true){
    count=count+1;
    console.log("count");
}}

                if(count==5){
                    resolve();
                    alert(" Congrats. 5 Tasks have been Successfully Completed")
                }
                else
                {
                    reject();
                }
                
            
            });
    }