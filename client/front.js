const { text } = require("express");

const btn = document.querySelector('button')
const btnRandom = document.querySelector('button')

const randomSearchItem = () => {
    fetch('http://localhost:3000/results/random')
    .then(r=>r.text())
    .then(renderResult)
    .catch(console.warn());
}

const readAllResults = () => {
    fetch('http://localhost:3000/results')
    .then(r =>r.text())
    .then(renderResult)
    .catch(console.warn());
}

const renderResult = resultText => {
    const result = document.createElement('p');
    result.textContent =resultText;
    text.appendChild(result);
}

btnRandom.addEventListener('click', randomSearchItem);