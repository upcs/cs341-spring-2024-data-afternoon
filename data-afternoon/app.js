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

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.post('/', (req, res) => {

 promise.then(result => {
  promise2.then(result2 => {
    promise3.then(result3 =>  {
      promise4.then(result4 =>  {
        promise5.then(result5 =>  {
  
  let FREEMEALS = [ //get freemeals data
    [JSON.stringify(result[0].LOCATION), JSON.stringify(result[0].NAME)], 
    [JSON.stringify(result[1].LOCATION), JSON.stringify(result[1].NAME)],
    [JSON.stringify(result[2].LOCATION), JSON.stringify(result[2].NAME)],
    [JSON.stringify(result[3].LOCATION), JSON.stringify(result[3].NAME)],
    [JSON.stringify(result[4].LOCATION), JSON.stringify(result[4].NAME)],
    [JSON.stringify(result[5].LOCATION), JSON.stringify(result[5].NAME)],
    [JSON.stringify(result[6].LOCATION), JSON.stringify(result[6].NAME)],
    [JSON.stringify(result[7].LOCATION), JSON.stringify(result[7].NAME)],
    [JSON.stringify(result[8].LOCATION), JSON.stringify(result[8].NAME)],
    [JSON.stringify(result[9].LOCATION), JSON.stringify(result[9].NAME)]
    ];

    
    let FREEGROCERIES = [ //get freegroceries data
      [JSON.stringify(result2[0].LOCATION), JSON.stringify(result2[0].NAME)], 
      [JSON.stringify(result2[1].LOCATION), JSON.stringify(result2[1].NAME)],
      [JSON.stringify(result2[2].LOCATION), JSON.stringify(result2[2].NAME)],
      [JSON.stringify(result2[3].LOCATION), JSON.stringify(result2[3].NAME)], 
      [JSON.stringify(result2[4].LOCATION), JSON.stringify(result2[4].NAME)],
      [JSON.stringify(result2[5].LOCATION), JSON.stringify(result2[5].NAME)],
      [JSON.stringify(result2[6].LOCATION), JSON.stringify(result2[6].NAME)], 
      [JSON.stringify(result2[7].LOCATION), JSON.stringify(result2[7].NAME)],
      [JSON.stringify(result2[8].LOCATION), JSON.stringify(result2[8].NAME)],
      [JSON.stringify(result2[9].LOCATION), JSON.stringify(result2[9].NAME)], 
      [JSON.stringify(result2[10].LOCATION), JSON.stringify(result2[10].NAME)],
      [JSON.stringify(result2[11].LOCATION), JSON.stringify(result2[11].NAME)],
      [JSON.stringify(result2[12].LOCATION), JSON.stringify(result2[12].NAME)], 
      [JSON.stringify(result2[13].LOCATION), JSON.stringify(result2[13].NAME)],
      [JSON.stringify(result2[14].LOCATION), JSON.stringify(result2[14].NAME)],
      [JSON.stringify(result2[15].LOCATION), JSON.stringify(result2[15].NAME)], 
      [JSON.stringify(result2[16].LOCATION), JSON.stringify(result2[16].NAME)],
      [JSON.stringify(result2[17].LOCATION), JSON.stringify(result2[17].NAME)],
      [JSON.stringify(result2[18].LOCATION), JSON.stringify(result2[18].NAME)], 
      [JSON.stringify(result2[19].LOCATION), JSON.stringify(result2[19].NAME)],
      [JSON.stringify(result2[20].LOCATION), JSON.stringify(result2[20].NAME)],
      [JSON.stringify(result2[21].LOCATION), JSON.stringify(result2[21].NAME)], 
      [JSON.stringify(result2[22].LOCATION), JSON.stringify(result2[22].NAME)],
      [JSON.stringify(result2[23].LOCATION), JSON.stringify(result2[23].NAME)],
      [JSON.stringify(result2[24].LOCATION), JSON.stringify(result2[24].NAME)], 
      [JSON.stringify(result2[25].LOCATION), JSON.stringify(result2[25].NAME)],
      [JSON.stringify(result2[26].LOCATION), JSON.stringify(result2[26].NAME)],
      [JSON.stringify(result2[27].LOCATION), JSON.stringify(result2[27].NAME)], 
      [JSON.stringify(result2[28].LOCATION), JSON.stringify(result2[28].NAME)],
      [JSON.stringify(result2[29].LOCATION), JSON.stringify(result2[29].NAME)],
      [JSON.stringify(result2[30].LOCATION), JSON.stringify(result2[30].NAME)], 
      [JSON.stringify(result2[31].LOCATION), JSON.stringify(result2[31].NAME)],
      [JSON.stringify(result2[32].LOCATION), JSON.stringify(result2[32].NAME)],
      [JSON.stringify(result2[33].LOCATION), JSON.stringify(result2[33].NAME)], 
      [JSON.stringify(result2[34].LOCATION), JSON.stringify(result2[34].NAME)],
      [JSON.stringify(result2[35].LOCATION), JSON.stringify(result2[35].NAME)],
      [JSON.stringify(result2[36].LOCATION), JSON.stringify(result2[36].NAME)],
      [JSON.stringify(result2[37].LOCATION), JSON.stringify(result2[37].NAME)],
      [JSON.stringify(result2[38].LOCATION), JSON.stringify(result2[38].NAME)], 
      [JSON.stringify(result2[39].LOCATION), JSON.stringify(result2[39].NAME)],
      [JSON.stringify(result2[40].LOCATION), JSON.stringify(result2[40].NAME)],
      [JSON.stringify(result2[41].LOCATION), JSON.stringify(result2[41].NAME)], 
      [JSON.stringify(result2[42].LOCATION), JSON.stringify(result2[42].NAME)],
      [JSON.stringify(result2[43].LOCATION), JSON.stringify(result2[43].NAME)],
      [JSON.stringify(result2[44].LOCATION), JSON.stringify(result2[44].NAME)], 
      [JSON.stringify(result2[45].LOCATION), JSON.stringify(result2[45].NAME)],
      [JSON.stringify(result2[46].LOCATION), JSON.stringify(result2[46].NAME)],
      [JSON.stringify(result2[47].LOCATION), JSON.stringify(result2[47].NAME)], 
      [JSON.stringify(result2[48].LOCATION), JSON.stringify(result2[48].NAME)],
      [JSON.stringify(result2[49].LOCATION), JSON.stringify(result2[49].NAME)],
      [JSON.stringify(result2[50].LOCATION), JSON.stringify(result2[50].NAME)], 
      [JSON.stringify(result2[51].LOCATION), JSON.stringify(result2[51].NAME)],
      [JSON.stringify(result2[52].LOCATION), JSON.stringify(result2[52].NAME)],
      [JSON.stringify(result2[53].LOCATION), JSON.stringify(result2[53].NAME)], 
      [JSON.stringify(result2[54].LOCATION), JSON.stringify(result2[54].NAME)],
      [JSON.stringify(result2[55].LOCATION), JSON.stringify(result2[55].NAME)],
      [JSON.stringify(result2[56].LOCATION), JSON.stringify(result2[56].NAME)], 
      [JSON.stringify(result2[57].LOCATION), JSON.stringify(result2[57].NAME)],
      [JSON.stringify(result2[58].LOCATION), JSON.stringify(result2[58].NAME)],
      [JSON.stringify(result2[59].LOCATION), JSON.stringify(result2[59].NAME)],
      [JSON.stringify(result2[60].LOCATION), JSON.stringify(result2[60].NAME)], 
      [JSON.stringify(result2[61].LOCATION), JSON.stringify(result2[61].NAME)],
      [JSON.stringify(result2[62].LOCATION), JSON.stringify(result2[62].NAME)],
      [JSON.stringify(result2[63].LOCATION), JSON.stringify(result2[63].NAME)],
      [JSON.stringify(result2[64].LOCATION), JSON.stringify(result2[64].NAME)]
      ];
      
      let SAFERESTVILLAGES = [ //get safe rest villages data
      [JSON.stringify(result3[0].SITENAME), JSON.stringify(result3[0].TOTALSLEEPINGUNITS), JSON.stringify(result3[0].LOCATION)], 
      [JSON.stringify(result3[1].SITENAME), JSON.stringify(result3[1].TOTALSLEEPINGUNITS), JSON.stringify(result3[1].LOCATION)],
      [JSON.stringify(result3[2].SITENAME), JSON.stringify(result3[2].TOTALSLEEPINGUNITS), JSON.stringify(result3[2].LOCATION)],
      [JSON.stringify(result3[3].SITENAME), JSON.stringify(result3[3].TOTALSLEEPINGUNITS), JSON.stringify(result3[3].LOCATION)], 
      [JSON.stringify(result3[4].SITENAME), JSON.stringify(result3[4].TOTALSLEEPINGUNITS), JSON.stringify(result3[4].LOCATION)],
      [JSON.stringify(result3[5].SITENAME), JSON.stringify(result3[5].TOTALSLEEPINGUNITS), JSON.stringify(result3[5].LOCATION)],
      [JSON.stringify(result3[6].SITENAME), JSON.stringify(result3[6].TOTALSLEEPINGUNITS), JSON.stringify(result3[6].LOCATION)]
      ]

      let FREE_PRODUCE = [ //get free produce data
        [JSON.stringify(result4[0].NAME), JSON.stringify(result4[0].LOCATION), JSON.stringify(result4[0].HOURS_OPEN)], 
        [JSON.stringify(result4[1].NAME), JSON.stringify(result4[1].LOCATION), JSON.stringify(result4[1].HOURS_OPEN)],
        [JSON.stringify(result4[2].NAME), JSON.stringify(result4[2].LOCATION), JSON.stringify(result4[2].HOURS_OPEN)],
        [JSON.stringify(result4[3].NAME), JSON.stringify(result4[3].LOCATION), JSON.stringify(result4[3].HOURS_OPEN)], 
        [JSON.stringify(result4[4].NAME), JSON.stringify(result4[4].LOCATION), JSON.stringify(result4[4].HOURS_OPEN)],
        [JSON.stringify(result4[5].NAME), JSON.stringify(result4[5].LOCATION), JSON.stringify(result4[5].HOURS_OPEN)],
        [JSON.stringify(result4[6].NAME), JSON.stringify(result4[6].LOCATION), JSON.stringify(result4[6].HOURS_OPEN)], 
        [JSON.stringify(result4[7].NAME), JSON.stringify(result4[7].LOCATION), JSON.stringify(result4[7].HOURS_OPEN)],
        [JSON.stringify(result4[8].NAME), JSON.stringify(result4[8].LOCATION), JSON.stringify(result4[8].HOURS_OPEN)],
        [JSON.stringify(result4[9].NAME), JSON.stringify(result4[9].LOCATION), JSON.stringify(result4[9].HOURS_OPEN)], 
        [JSON.stringify(result4[10].NAME), JSON.stringify(result4[10].LOCATION), JSON.stringify(result4[10].HOURS_OPEN)],
        [JSON.stringify(result4[11].NAME), JSON.stringify(result4[11].LOCATION), JSON.stringify(result4[11].HOURS_OPEN)],
        [JSON.stringify(result4[12].NAME), JSON.stringify(result4[12].LOCATION), JSON.stringify(result4[12].HOURS_OPEN)]
        ]

        let SAFE_YEAR_ROUND_SHELTERS = [ //get safe year round shelters 
          [JSON.stringify(result5[0].NAME), JSON.stringify(result5[0].LOCATION), JSON.stringify(result5[0].HOURS_OPEN)], 
          [JSON.stringify(result5[1].NAME), JSON.stringify(result5[1].LOCATION), JSON.stringify(result5[1].HOURS_OPEN)],
          [JSON.stringify(result5[2].NAME), JSON.stringify(result5[2].LOCATION), JSON.stringify(result5[2].HOURS_OPEN)],
          [JSON.stringify(result5[3].NAME), JSON.stringify(result5[3].LOCATION), JSON.stringify(result5[3].HOURS_OPEN)], 
          [JSON.stringify(result5[4].NAME), JSON.stringify(result5[4].LOCATION), JSON.stringify(result5[4].HOURS_OPEN)],
          [JSON.stringify(result5[5].NAME), JSON.stringify(result5[5].LOCATION), JSON.stringify(result5[5].HOURS_OPEN)],
          [JSON.stringify(result5[6].NAME), JSON.stringify(result5[6].LOCATION), JSON.stringify(result5[6].HOURS_OPEN)], 
          [JSON.stringify(result5[7].NAME), JSON.stringify(result5[7].LOCATION), JSON.stringify(result5[7].HOURS_OPEN)],
          [JSON.stringify(result5[8].NAME), JSON.stringify(result5[8].LOCATION), JSON.stringify(result5[8].HOURS_OPEN)],
          [JSON.stringify(result5[9].NAME), JSON.stringify(result5[9].LOCATION), JSON.stringify(result5[9].HOURS_OPEN)], 
          [JSON.stringify(result5[10].NAME), JSON.stringify(result5[10].LOCATION), JSON.stringify(result5[10].HOURS_OPEN)],
          [JSON.stringify(result5[11].NAME), JSON.stringify(result5[11].LOCATION), JSON.stringify(result5[11].HOURS_OPEN)],
          [JSON.stringify(result5[12].NAME), JSON.stringify(result5[12].LOCATION), JSON.stringify(result5[12].HOURS_OPEN)],
          [JSON.stringify(result5[13].NAME), JSON.stringify(result5[13].LOCATION), JSON.stringify(result5[13].HOURS_OPEN)], 
          [JSON.stringify(result5[14].NAME), JSON.stringify(result5[14].LOCATION), JSON.stringify(result5[14].HOURS_OPEN)],
          [JSON.stringify(result5[15].NAME), JSON.stringify(result5[15].LOCATION), JSON.stringify(result5[15].HOURS_OPEN)],
          [JSON.stringify(result5[16].NAME), JSON.stringify(result5[16].LOCATION), JSON.stringify(result5[16].HOURS_OPEN)]
          ]

          res.send(`
          <h1>Community Services Information</h1>
          <h2>Free Meals</h2>
          <ul>
            ${FREEMEALS.map(meal => `<li>Location: ${meal[0]}, Name: ${meal[1]}</li>`).join('')}
          </ul>
          <h2>Free Groceries</h2>
          <ul>
            ${FREEGROCERIES.map(grocery => `<li>Location: ${grocery[0]}, Name: ${grocery[1]}</li>`).join('')}
          </ul>
          <h2>Safe Rest Villages</h2>
          <ul>
            ${SAFERESTVILLAGES.map(village => `<li>Site Name: ${village[0]}, Total Sleeping Units: ${village[1]}, Location: ${village[2]}</li>`).join('')}
          </ul>
          <h2>Free Produce</h2>
          <ul>
            ${FREE_PRODUCE.map(produce => `<li>Name: ${produce[0]}, Location: ${produce[1]}, Hours Open: ${produce[2]}</li>`).join('')}
          </ul>
          <h2>Safe Year Round Shelters</h2>
          <ul>
            ${SAFE_YEAR_ROUND_SHELTERS.map(shelter => `<li>Name: ${shelter[0]}, Location: ${shelter[1]}, Hours Open: ${shelter[2]}</li>`).join('')}
          </ul>
        `);

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
