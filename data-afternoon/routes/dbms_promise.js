/**
 * dbms_promise.js
 *
 * This file contains functions for accessing the MySQL database
 * which contains the Cheesecake order data.
 *
 * Updated by: Stelios Papoutsakis & Spencer Rose
 */

exports.version = '0.0.1';


var mysql = require('mysql'),
    async = require('async');
/*
var host = "35.247.8.163";    //from GCloud instance 
var database = "UNHOUSED";  //database name
var user = "root";         //username 
var password = "'p:YK<>1p\\B{t8;X";  //password 
*/


var host = "35.247.8.163";    //from GCloud instance 
var database = "UNHOUSED";  //database name
var user = "root";         //username 
var password = "'p:YK<>1p\\B{t8;X";  //password 



//'p:YK<>1p\B{t8;X

//var host = "34.145.86.26";
//var database = 'CHEESECAKE';  //database name
//var user = 'root';         //username (change to match your db)
//var password = '26%#david_8';  //pa

/**
 * dbquery
 *
 * performs a given SQL query on the database and returns the results
 * to the caller
 *
 * @param query     the SQL query to perform (e.g., "SELECT * FROM ...")
 */
exports.dbquery = function(query_str) {
  return new Promise((resolve, reject) => {
    var dbclient;
    var results = null;

    async.waterfall([

        //Step 1: Connect to the database
        function (callback) {
            //console.log("\n** creating connection.");
            dbclient = mysql.createConnection({
                host: host,
                user: user,
                password: password,
                database: database,
            });

            dbclient.connect(callback);
        },

        //Step 2: Issue query
        function (results, callback) {
            //console.log("\n** retrieving data");
            dbclient.query(query_str, callback);
        },

        //Step 3: Collect results
        function (rows, fields, callback) {
            //console.log("\n** dumping data:");
            results = rows;
         //   console.log("" + rows);
            callback(null);
        }

    ],
    // waterfall cleanup function
    function (err, res) {
        if (err) {
            console.log("Database query failed.  sad");
            console.log(err);
            reject(new Error(err, null));
        } else {
           // console.log("Database query completed.");
          //  console.log(results);
            resolve(results);
        }

        //close connection to database
        dbclient.end();

    });

  });
}//function dbquery

module.exports = exports.dbquery;
