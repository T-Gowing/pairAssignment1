const http = require("http");
const express = require('express')
const app = express()
const cors = require('cors');
const searchItems = require('../data/results')

app.use(cors());

// const requestListener = (request, response) => {
//     response.setHeader('Access-Control-Allow-Origin', '*'); // NEW LINE
//     response.writeHead(200);
//     response.end('Hello, client!');
//   };


const randomSearchItem = () =>{
    let idx = Math.floor(Math.random()*results.length);
    return searchItems[idx];
}

app.get('/', (req, res) => res.send('Woop its off and running!'))

app.get('/results', (req,res) =>{
    res.send(JSON.stringify(searchItems));
})

app.get('/results/random', (req,res) =>{
    let result = randomSearchItem();
    res.send(result);
})

//requestListener();

module.exports = app;