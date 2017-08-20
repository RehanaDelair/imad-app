function loadArticles() {
    var articleList = document.getElementById('article_list');
    var request = new XMLHttpRequest();
    
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
                      var date=articles[i].date.split('T')[0];
                      list += '<li> <a href= "http://rehanad10.imad.hasura-app.io/articles/' + title + '">' + heading + '</a> (' + date + ') </li>';
                  }
                  articleList.innerHTML = list;
                  console.log(articles);
              } else
                  alert('Someting went wrong on the server' + request.statusText);
          }
        };
        
    request.open('GET', '/get-articles', true);
    request.send();
}

function loadLoggedInUser(username) {
    var login_area = document.getElementById('login');
    login_area.innerHTML = 
    `<input type='submit' value='logout' id='logout'/>
    <br/>
    <br/>
    Hi `+ username;
    
}

function loadLogin() {
    
}

function checkLogin() {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function (){
          if (request.readyState === XMLHttpRequest.DONE){
              //Take some action
              if (request.status === 200) {
                  loadLoggedInUser(request.responseText);
              } else {
                  loadLogin();
              }
          }
        };
        
    request.open('GET', '/check-login', true);
    request.send();
}


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
    request.open('POST', '/login', true);
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
    request.open('POST', '/create-user', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
    
};

//check if user is logged in
checkLogin();

// Load articles
loadArticles();