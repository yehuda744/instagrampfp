//public is the directory that is essentialy public to the entire world
//everything in app.js is private
var express = require('express');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var app = express();

app.use(express.static(__dirname + '/public' ));
app.get('/', (req, res) => {
    res.render('index')
})
// step one : when someone goes here make a request to instagram to send back the information from the user that we want
// step two: parse that information and store the profile picture in a variable
// step three: res.send that profile picture
app.post('/search', (req, res) => {
    // var myCallback = (data) => {
    //     data = JSON.parse(data);
    //     res.send(data);
    // }
    console.log(req.body);
    res.send({
        name:req.body,
        id: 5
            });
    // HttpGetAsync('https://www.instagram.com/champagnepapi/?__a=1', myCallback)
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
