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
              //Capture a list of names and render it as a list
              var names = request.responseText;
              names = JSON.parse(names);
              var list = "";
              for(var i=0; i<names.length; i++){
                  list += '<li>' + names[i] + '</li>';
              }
              var ul = document.getElementById('name_list');
              ul.innerHTML = list;
          }
      }
    };
    
    //Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://rehanad10.imad.hasura-app.io/login', true);
    request.send(JSON.stringify({username: username, password: password}));
    
};