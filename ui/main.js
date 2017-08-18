//submit username, password to login
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function (){
      if (request.readyState === XMLHttpRequest.DONE){
          //Take some action
          if (request.status === 200) {
              console.log("user is logged in");
              alert('Login Sucessfull');
          } else if (request.status === 403) {
             alert('Username/ Password is incorrect');
          } else if (request.status === 500) {
              alert('Someting went wrong on the server');
          } else {
              alert('Someting went wrong on the server else part');
          }
      }
    };
    
    //Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://rehanad10.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    alert("here1");
    request.send(JSON.stringify({username: username, password: password}));
    alert("here2");
    
};