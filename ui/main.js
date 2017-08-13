//Counter code
var button=document.getElementById("counter");
var counter = 0;

button.onclick = function() {
    
    //Make a request to the counter end point
    
    //Capture the request and store it in a variable
    
    //Render that variable in correct span
    counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString(); 
};