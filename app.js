//public is the directory that is essentialy public to the entire world
//everything in app.js is private
var express = require('express');
var bodyParser = require('body-parser');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public' ));
app.get('/', (req, res) => {
    res.render('index')
})
// step one : when someone goes here make a request to instagram to send back the information from the user that we want
// step two: parse that information and store the profile picture in a variable
// step three: res.send that profile picture
app.post('/search', (req, res) => {
    // makes a new variable from the input and u write .search because the object we sent from main was called search and it had the input in it
    var search = req.body.search;
    var myCallback = (data) => {
        data = JSON.parse(data);
        res.send(data);
    }
    HttpGetAsync(`https://www.instagram.com/${search}/?__a=1`, myCallback)
});



function HttpGetAsync(theUrl, callback){
var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

app.listen(process.env.PORT || 8000)
