

const btn = document.querySelector('#btn')
const btnRandom = document.getElementById('btn-random')
const text = document.getElementById('text')
const textAll = document.getElementById('text-all')
const searchBar = document.getElementById('searchbar');

searchBar.addEventListener('keyup', (e)=>{
    console.log(e);
})

const randomSearchItem = () => {
    fetch('http://localhost:3000/results/random')
    .then(r=>r.text())
    .then(renderResult)
    .catch(console.warn());
}

const readAllResults = () => {
    fetch('http://localhost:3000/results')
    .then(r =>r.text())
    .then(renderAllResults)
    .catch(console.warn());
}


const renderAllResults = resultText => {
    const result = document.createElement('p');
    result.textContent =resultText;
    textAll.appendChild(result);
}
const renderResult = resultText => {
    const result = document.createElement('p');
    if(result){
        result.remove();
    }
    result.textContent =resultText;
    text.appendChild(result);
}
    const visitRandomAPI = () =>{
    window.location = randomSearchItem;
}

btnRandom.addEventListener('click', randomSearchItem);
btn.addEventListener('click', readAllResults);

randomSearchItem();