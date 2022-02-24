const loadData = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = datas => {
    console.log(datas);
    for (const data of datas) {
        console.log(data.name);

        const containerDiv = document.getElementById('showData');
        const div = document.createElement('div');
        div.innerHTML = `
    <div class=" shadow p-4 bg-info rounded-3">
    <div class=" shadow p-2 bg-light rounded-3">
        <img  src="${data.flag}" class="card-img-top img-size" alt="...">
        <div class="card-body mt-3 text-center bg-primary shadow rounded-3 text-light">
            <h5 class="card-title fw-bold fs-3 ">${data.name}</h5>
            <p class="card-text">Independent : ${independentStatus(data.independent)}</p>
            <p class="card-text">Population : ${data.population}</p>
        </div>
        </div>
    </div>        
        `;
        containerDiv.appendChild(div);
    }

}

const independentStatus = (value) => {
    if (value == false) {
        return 'We are not independant';
    } else {
        return 'We are independant';
    }
}
// console.log('mama paice');