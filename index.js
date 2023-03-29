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


app.get('/', function(req, res){
    let score = ballingGame.SimulatePlayer()
    let data = score.toString()  
    let TotalScore = [];
    const Alter = ['X','X','/','/'];
    Alter.forEach(item =>{
        data = data.replace(item, 10);
    });
    let entry = data.split(',')
    const arrOfNum = entry.map(int => {
        return parseInt(int, 10);
      });
      const newData = arrOfNum.filter(function(value){
        return !Number.isNaN(value);
      });
    const sum = newData.reduce((partialSum,a)=>partialSum + a); 
    TotalScore.push(sum)
    res.render('index',{
        balls:ballingGame.SimulatePlayer(),
        counter: ballingGame.roll(),
        allScore: TotalScore
    })
});    

app.post('/bowl', function(req,res){
    let counter = ballingGame.roll();
    if(counter >=24){
        req.flash('warning', 'Sorry, You have ran out of balls!')
    } 
      setTimeout(()=>{
        res.redirect(`back`);
      },1700)
});

//start the server
const PORT = process.env.PORT || 3011;

app.listen(PORT, function () {
    console.log("App running at http://localhost:" + PORT)
});


