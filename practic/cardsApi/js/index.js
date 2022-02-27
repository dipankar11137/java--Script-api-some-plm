// 1. button event handler setup
// 2. get input value
// error handling for string value

// https://deckofcardsapi.com/api/deck/new/draw/?count=10
// https://api.thedogapi.com/v1/breeds


const containerDiv = document.getElementById('container-div');
const searchButton = () => {
    const input = document.getElementById('input-value');
    const error = document.getElementById('error');
    const inputValue = parseInt(input.value);
    // console.log(inputValue);
    if (isNaN(inputValue) || inputValue == "") { //isNaN chake number or string /others
        // alert('Plaease entar a number');
        error.innerText = "Plaease entar a number";
        input.value = '';
        containerDiv.innerHTML = '';
    } else if (inputValue < 0) {
        error.innerText = "Plaease entar a positive number";
        input.value = '';
        containerDiv.innerHTML = '';
    }
    else {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(res => res.json())
            .then(data => displayCard(data.cards))

        input.value = '';
        error.innerHTML = "";
        containerDiv.innerHTML = '';
    }

}

const displayCard = (cardList) => {
    // console.log(cardList);
    for (const card of cardList) {
        // console.log(card);
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.classList.add('mb-5');
        div.innerHTML = `
       <div class="card" style="width: 18rem;">
       <img src="${card.image}" class="card-img-top" alt="...">
       <div class="card-body">
           <h5 class="card-title">${card.suit}</h5>
           <p class="card-text">${card.code}</p>
           <button onclick="cardDetails('${card.code}')" class="btn btn-primary">See Details</button>
        </div>
        </div>
       `

        containerDiv.appendChild(div);
    }
}

const cardDetails = (code) => {
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
        .then(res => res.json())
        .then(data => {
            const allCards = data.cards;
            const singleCard = allCards.find(card => card.code === code);
            const div = document.createElement('div');
            containerDiv.innerHTML = '';
            div.innerHTML = `
            <div class="card" style="width: 18rem;">
       <img src="${singleCard.image}" class="card-img-top" alt="...">
       <div class="card-body">
           <h5 class="card-title">${singleCard.suit}</h5>
           <p class="card-text">${singleCard.code}</p>
           
        </div>
        </div>
            `
            containerDiv.appendChild(div);
        })

}










/* const loadCard = () => {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
        .then(res => res.json())
        .then(data => displayCard(data.cards))
}
const displayCard = (cardList) => { 


    for (const card of cardList) {
        console.log(card);
        const containerDiv = document.getElementById('container-div');
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card">
            <img src="${card.images.png}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.</p>
             </div>
        </div>
        `
        containerDiv.appendChild(div);
}
} */