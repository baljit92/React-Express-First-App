var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-parser');
var cors = require('cors');
const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost/loginapp', { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to MongoDB URL`);
  }
});


mongoose.set('debug', true);

require('./models/Users');
require('./models/Leaves');
require('./config/passport');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');


var app = express();
const secret = 'secret';
// Why do we need cors? Because of Cross-Origin Headers
// This is because our client is running on port 3001, yet our server is on port 5000. 
// As our API is not on the same address as the client, the browser blocks the request for security reasons.

//app.use basically specifies that cors should be the middleware
// app.use(cors());

// A preflighted CORS request is where the browser first sends a ‘preflight’ OPTIONS request to the server, 
// passing in the request method and headers it wishes to use. If the server allows the proposed method, it 
// responds back stating which methods and headers are allowed. The browser then sends the original request 
// passing along the Origin header just as with a simple request.
// app.options('*', cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));


app.use(require('./routes'));
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// Then you check if the process is production, which it will be once the app is deployed to Heroku. Under this condition 
// you would like to serve the index.html file from the build folder and not the public folder.

//production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = '../client/build/index.html'));
  })
}
//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'../client/public/index.html'));
})    

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;