const { response } = require('express');
const express = require('express');
const { request } = require('http');
const path = require('path');

//Create an instance of express
const app = express();

//Define port that application should listen to
const port = 3000;

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, './static/index.html'));   
});

app.get('/speakers', (request, response) => {
    response.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.get('/', (request, response) => {
    response.send('Hello Express');
});

app.listen(port, () => {
    console.log('Express server listening on port ${port}!');
});