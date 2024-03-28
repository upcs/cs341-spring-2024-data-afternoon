const express = require('express');
const router = express.Router();
exports.dbquery = require('./dbms_promise');


router.post('/newClientData', async function(req, res) {
  //values coming from post
  var postName = req.body.Name;
  var postAddress = req.body.Address;



  //construct sql statement 
  let sqlQuery = "INSERT INTO CLIENT_DATA (NAME, LOCATION) VALUES ('" + postName + "','" + postAddress + "')";
  
    await exports.dbquery(sqlQuery); //await used for promise



});

module.exports = router;
