//IMPORT express
const express = require('express');
//IMPORT express handlebars
const exphbs = require('express-handlebars');
//IMPORT body-parser
const bodyParser = require('body-parser');
//IMPORT session 
const session = require('express-session');
//IMPORT session 
const flash = require('express-flash')
//IMPORT factory function 
const BallingGame = require('./controller/balling_factory');


const app = express();
//instantiate a copy of Factory Function 
const ballingGame = BallingGame();


//configure express as middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//css public in use
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

// initialise session middleware - flash-express depends on it
app.use(session({
    secret: 'djfhsdflbasf',
    resave: false,
    saveUninitialized: true   
}));

// initialise the flash middleware
app.use(flash());

var session_data;
app.get('/', function(req, res){
    res.render('index',{
        balls:session_data,
        counter: ballingGame.roll(),
        allScore: ballingGame.OveralScore()
    })
});    

app.post('/bowl', function(req,res){
    let counter = ballingGame.roll();
    let playerSession = ballingGame.SimulatePlayer()
    session_data = req.session
    session_data = playerSession
    console.log("Session", session_data);
    if(counter >=24){
        req.flash('warning', 'Sorry, You have ran out of balls!')
    }
   
        res.redirect(`back`);
  
   
});

//start the server
const PORT = process.env.PORT || 3011;

app.listen(PORT, function () {
    console.log("App running at http://localhost:" + PORT)
});


