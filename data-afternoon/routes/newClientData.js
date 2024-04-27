const express = require('express');
const router = express.Router();
exports.dbquery = require('./dbms_promise');


router.post('/newClientData', async function(req, res) {
  //values coming from post
  var postName = req.body.Name; //valid name verified by server 
  var postAddress = req.body.Address; //valid address verified by server 


  //construct sql statement 
  let sqlQuery = "INSERT INTO CLIENT_DATA (NAME, LOCATION) VALUES ('" + postName + "','" + postAddress + "')";

  
  try {
    await exports.dbquery(sqlQuery, [postName, postAddress]);
    res.json({ success: true }); // Indicate success

} catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ success: false, error: 'Database error' });
}


});


module.exports = router;
