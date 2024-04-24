const express = require('express');
const router = express.Router();


const axios = require('axios');
const API_KEY = 'AIzaSyAmTyXedXrrglVFr2k31-OwQgybrJHbP60' //this key contains the perspective API 
const PERSPECTIVE_API_URL = 'https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze'; //this API checks for appropraite words 


router.post('/check-inappropriate', async (req, res) => {
    const name = req.body.name; //name 
    const address = req.body.address; //address
    const isValid = await validateAddress(address); //the result of whether we have a valid address

    /* this data object is for the perspective API to handle */
    const data = {
        comment: {
            text: name //name to check
        },
        requestedAttributes: {
            TOXICITY: {}
        },
        languages: ["en"]
    };

   
  
    try {
          const response = await axios.post(`${PERSPECTIVE_API_URL}?key=${API_KEY}`, data); //get result from perspective API
        //  console.log("Full API Response:", response.data);
          const toxicityScore = response.data.attributeScores.TOXICITY.summaryScore.value; //obtain the toxicity score 
          console.log("Toxicity Score:", toxicityScore); //output the toxicity score in the terminal for testing 

         if (toxicityScore < 0.6 && isValid) //if toxicity score is less than 0.6 (a higher number means more inappropriate word) and we have a valid address
         {
            axios.post('http://localhost:3000/newClientData', { Name: name, Address: address}, function(response) {
                //then we can send the results to the client 
            });

         }
         else //otherwise we will not send anything 
         {
            console.log("User has either inserted inappropriate name or an invalid address");
         }


    } catch (error) { //proper error handling of the perspective API
        console.error('Error calling Perspective API:', error);
    }
    
  });


// Function to check if an address is valid using Google Maps Geocoding API
async function validateAddress(address) {
    const apiKey = API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === 'OK') {
            console.log('Valid address:', address);
            return true;
        } else {
            console.log('Invalid address:', address);
            return false;
        }
    } catch (error) {
        console.error('Error during geocoding:', error);
        return false;
    }
}


module.exports = router;