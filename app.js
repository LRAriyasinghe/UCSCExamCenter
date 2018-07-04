/*Main server entry point file */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect with database in config folder
mongoose.connect(config.database);

//On connection
mongoose.connection.on('connected', () => {
    console.log('Connected to a Database '+config.database);
});

//On Error
mongoose.connection.on('error', (err) => {
    console.log('Database Error '+err);
});

const app = express();

const users = require('./routes/users');
const exams = require('./routes/exams');


//Port Number
const port = 3001;

//CORS Middleware
app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/exams', exams);


//Index Route
app.get('/',(req,res)=>{
    res.send('invalid endpoint');
});

//Strat Server
app.listen(port,()=>{
    console.log('server stated on: '+port);
});
