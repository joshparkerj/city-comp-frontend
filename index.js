const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(express.static('public'));


app.get('/', function homepage(req, res){
    console.log("login page hit!")
    res.sendFile('views/login.html',{root:__dirname});
});


app.get('/landing', function homepage(req, res){
    console.log("login page hit!")
    res.sendFile('views/landing.html',{root:__dirname});
});



app.listen(process.env.Port || 3000,() =>{
    console.log("Server is listening on port 3000!")
});