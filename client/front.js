

const btn = document.querySelector('#btn')
const btnRandom = document.getElementById('btn-random')
const text = document.getElementById('text')

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
btn.addEventListener('click', readAllResults);

randomSearchItem();