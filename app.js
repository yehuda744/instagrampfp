//public is the directory that is essentialy public to the entire world
//everything in app.js is private
// when you use a node you have to bring it in as a variable
var bodyParser = require('body-parser');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// the app we are using is an express type app which means it handles requests and responses
var app = express();

// every response we get goes through bodyparser.json
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// uses all the folders under public
app.use(express.static(__dirname + '/public' ));
//when you open to localhost:8000 == localhost:8000/
app.get('/', (req, res) => {
    res.render('index')
})
// step one : when someone goes here make a request to instagram to send back the information from the user that we want
// step two: parse that information and store the profile picture in a variable
// step three: res.send that profile picture

// post is secretive
app.post('/search', (req, res) => {
    // makes a new variable from the input and u write .search because the object we sent from main was called search and it had the input in it
    var search = req.body.search;
    // this variable equals a function that gets the data that was sent back
    var myCallback = (data) => {
        data = JSON.parse(data);
        res.send(data);
    }
    // requests from instagram the profile picture of the url that we send it and search equals the url of the profile pic because thats req body
    HttpGetAsync(`https://www.instagram.com/${search}/?__a=1`, myCallback)
});



function HttpGetAsync(theUrl, callback){
var xmlHttp = new XMLHttpRequest();
//onreadystatechange means that it checks what state we are at and whn we are at 4 which means that we
// got data then it does callback
xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}
//tells the server what port to be listennig on and to keep onthis server even after using it once
app.listen(process.env.PORT || 8000)
