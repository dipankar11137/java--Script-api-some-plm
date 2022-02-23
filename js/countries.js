// load data 
const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country.name);
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>Name : ${country.name}</h3>
        <p>Capital : ${country.capital}</p>
        <button onClick="loadCountryByName('${country.name}')">Details</button>
        `;
        // const h3 = document.createElement('h3');
        // const p = document.createElement('p');
        // h3.innerText = `Name : ${country.name}`;
        // div.appendChild(h3);
        // p.innerText = `Capital : ${country.capital}`
        // div.appendChild(p);
        countriesDiv.appendChild(div);

    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    // console.log(url);
}




































/* // load data 
const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country.name);
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        h3.innerText = `Name : ${country.name}`;
        div.appendChild(h3);
        p.innerText = `Capital : ${country.capital}`
        div.appendChild(p);
        countriesDiv.appendChild(div);

    })
} */