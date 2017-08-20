var articleList = document.getElementById('article_list');
var request = new XMLHttpRequest();
request.open('GET', 'http://rehanad10.imad.hasura-app.io/get-articles', true);
request.send();
request.onreadystatechange = function (){
      if (request.readyState === XMLHttpRequest.DONE){
          //Take some action
          if (request.status === 200) {
              var articles = request.responseText;
              articles = JSON.parse(articles);
              list = '';
              for(var i=0; i<articles.length; i++){
                  var title=articles[i].title;
                  var heading=articles[i].heading;
                  var date=articles[i].date.toDateString();
                  list += '<li> <a href= "http://rehanad10.imad.hasura-app.io/articles/' + title + '">' + heading + '</a> (' + date + ') </li>';
              }
              articleList.innerHTML = list;
              console.log(articles);
          } else
              alert('Someting went wrong on the server' + request.statusText);
      }
    };


//submit username, password to login
var login = document.getElementById('login_btn');
login.onclick = function() {
    
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
              alert('Someting went wrong on the server' + request.statusText);
          } else {
              alert('Someting went wrong on the server' + request.statusText);
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
    request.send(JSON.stringify({username: username, password: password}));
    
};

var register = document.getElementById('register_btn');
register.onclick = function() {
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function (){
      if (request.readyState === XMLHttpRequest.DONE){
          //Take some action
          if (request.status === 200) {
              alert(request.responseText);
          } else {
              alert('Someting went wrong on the server ' + request.statusText);
          }
      }
    };
    
    //Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://rehanad10.imad.hasura-app.io/create-user', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
    
};