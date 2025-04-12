const express = require('express');
const app = express();
const port = 3000;

// Get the API_URL from the environment variables
const API_URL = process.env.API_URL;

// Log the API_URL when the app starts
console.log(`API_URL from environment: ${API_URL.split('#')[0]}`);

app.get('/', (req, res) => {
    res.send('Hello World! API_URL logged to console.');
});

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`);
});
