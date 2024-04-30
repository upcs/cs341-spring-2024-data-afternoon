
const express = require('express');
const router = express.Router();


const axios = require('axios');
const API_KEY = 'AIzaSyAmTyXedXrrglVFr2k31-OwQgybrJHbP60' //this key contains the perspective API 
const PERSPECTIVE_API_URL = 'https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze'; //this API checks for appropraite words 


router.post('/check-inappropriate', async (req, res) => {
    const name = req.body.name; //name 
    const address = req.body.address; //address

        axios.post('http://localhost:3000/newClientData', { Name: name, Address: address}, function(response) {
            //then we can send the results to the client 
        });

        res.json({ success: true }); // Indicate success
    
});

module.exports = router;