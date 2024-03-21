var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

exports.dbquery = require("./routes/dbms_promise.js");
const promise = exports.dbquery("SELECT * FROM FREEMEALS");
const promise2 = exports.dbquery("SELECT * FROM FREEGROCERIES");
const promise3 = exports.dbquery("SELECT * FROM SAFERESTVILLAGES");
const promise4 = exports.dbquery("SELECT * FROM FREE_PRODUCE");
const promise5 = exports.dbquery("SELECT * FROM SAFE_YEAR_ROUND_SHELTERS");
const promise6 = exports.dbquery("SELECT * FROM FREE_WIFI");
// "'p:YK<>1p\B{t8;X   (database passcode)

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//this post gets all the data from the database
app.post('/', (req, res) => {

 promise.then(result => {
  promise2.then(result2 => {
    promise3.then(result3 =>  {
      promise4.then(result4 =>  {
        promise5.then(result5 =>  {
          promise6.then(result6 => {
    
          //get free meals data
          let freeMeals = result.map(freeMealsTable => ({
            location: freeMealsTable.LOCATION,
            name: freeMealsTable.NAME,
          }));
          
          //get free groceries data
          let freeGroceries = result2.map(freeGroceriesTable => ({
            location: freeGroceriesTable.LOCATION,
            name: freeGroceriesTable.NAME,
          }));

          //get safe rest villages data
            let safeRestVillages = result3.map(safeRestTable => ({
            location: safeRestTable.LOCATION,
            name: safeRestTable.NAME
          }));
          
          //get free produce data
          let freeProduce = result4.map(freeProduceTable => ({
            location: freeProduceTable.LOCATION,
            name: freeProduceTable.NAME
          }));

          //get safe year round shelters data
          let safeYearRoundShelters = result5.map(safeYearTable => ({
            location: safeYearTable.LOCATION,
            name: safeYearTable.NAME
          }));

          //get wifi  data
          let freeWifi = result6.map(freeWifiTable => ({
            location: freeWifiTable.LOCATION,
            name: freeWifiTable.NAME
          }));
          
          // Combining all tables into a single object
          
          let combinedResults = [ freeMeals, freeGroceries, safeRestVillages, freeProduce, safeYearRoundShelters, freeWifi] 
          
          
          // Sending the combined results as a pretty-printed JSON string
          res.send(combinedResults);


         });
        });
      });

    });

  }); 

}); //end of promises

}); //end of post

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
