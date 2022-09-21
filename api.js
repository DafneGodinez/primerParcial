function JokeAPI(){
    
    var request = new XMLHttpRequest()
    
    //Open a new connection, using the GET request on the URL endpoint 
    
    request.onload = function (resp) {
    console.log(resp);
    console.log(resp.target.response);
    console.log(JSON.parse(resp.target.response));

    var data = JSON.parse(resp.target.response);
    console.log(data.id);
    console.log(data.setup);
    console.log(data.punchline);

    var dataElement = document.getElementById("id");
    dataElement.innerHTML = "ID: " + data.id;

    var dataElement2 = document.getElementById("setup");
    dataElement2.innerHTML = "SETUP: " + data.setup;

    var dataElement3 = document.getElementById("punchline");
    dataElement3.innerHTML = "PUNCHLINE: " + data.punchline;
    
    }
 

    request.open('GET', 'https://official-joke-api.appspot.com/random_joke', true)

    //Send request
    request.send()
    }
