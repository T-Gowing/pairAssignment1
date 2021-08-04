const http = require("http");
const express = require('express')
const app = express()

const searchItems = require('../data/results')

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



module.exports = app;