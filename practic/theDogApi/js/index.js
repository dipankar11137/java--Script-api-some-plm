
const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => displayDog(data))
}



const displayDog = (dogList) => {
    // console.log(dogList);
    const main = document.getElementById('main');
    const first10Data = dogList.slice(0, 10);
    // console.log(first10Data);   

    for (const dog of first10Data) {
        const div = document.createElement('div');
        div.className = "col-lg-3 m-3";
        div.innerHTML = `        
        <img width="400px" height="250px" src="${dog.image.url}" alt=""> 
        <h3>Dog Name : ${dog.name}</h3> 
        <p>${dog.temperament}</p>
        <h4>${dog.weight.imperial}</h4>          
        `
        main.appendChild(div);
    }

    /* for (const data of dogList) {

        // console.log(data.id);
        // console.log(data.name);
        // console.log(data.image.url);
        // console.log(data.life_span);
        // console.log(data.height.imperial);
    } */
}