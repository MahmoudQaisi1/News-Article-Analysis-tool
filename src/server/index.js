var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

console.log(__dirname);

app.use(express.static('dist'))

// Variables for url and api key
const apiKey = process.env.API_KEY;

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

//Post request to analyze the URL form the Meaning Cloud API
app.post('/analyze-url', async (req, res) => {
    //API response parameters
    const formData = {
        key: apiKey,
        lang: "en", 
        ilang: "en", 
        url: req.body.url
    };

    const searchParams = new URLSearchParams(formData);

    try {
        const response = await fetch('https://api.meaningcloud.com/sentiment-2.1', {
            method: 'POST',
            body: searchParams,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            redirect: 'follow'
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.log(error);
    }
});


// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


