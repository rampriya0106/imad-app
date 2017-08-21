//counter code
var button = document.getElementById('counter');

button.onclick = function(){
    
   
    //Create a request
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
     if (request.readystate == XMLHttpRequest.Done){
         //Take some action
         if(request.status == 200){
             var counter = request.responseText;
              var span=document.getElementById('count');
              span.innerHTML = counter.toString();
    
         }
     }
     //Not done yet
    };
    
    //make a request
    request.open('GET','http://rampriya0106.imad.hasura-app.io/counter',true);
    request.send(null);
};
