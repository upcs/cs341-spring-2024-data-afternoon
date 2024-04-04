var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var newClientData = require('./routes/newClientData');


exports.dbquery = require("./routes/dbms_promise.js");
const promise = exports.dbquery("SELECT * FROM FREEMEALS");
const promise2 = exports.dbquery("SELECT * FROM FREEGROCERIES");
const promise3 = exports.dbquery("SELECT * FROM SAFERESTVILLAGES");
const promise4 = exports.dbquery("SELECT * FROM FREE_PRODUCE");
const promise5 = exports.dbquery("SELECT * FROM SAFE_YEAR_ROUND_SHELTERS");
const promise6 = exports.dbquery("SELECT * FROM FREE_WIFI");
const promise7 = exports.dbquery("SELECT * FROM HEALTHCARE");
const promise8 = exports.dbquery("SELECT * FROM VOLUNTEER");
const promise9 = exports.dbquery("SELECT * FROM CLIENT_DATA");
// "'p:YK<>1p\B{t8;X   (database passcode)

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//this post gets all the data from the database
app.post('/', (req, res) => {

 promise.then(result => {
          
          
          // Sending the combined results as a pretty-printed JSON string
          res.send(combinedResults);
              });
            });
          });
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
app.use('/', newClientData); //client data to database 

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
