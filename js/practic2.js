
const loadData = () => {

    fetch('https://api.randomuser.me/')
        .then(res => res.json())
        .then(data => displayData(data.results))
}

const displayData = (datas) => {

    for (const data of datas) {

        console.log(data);
        const containerDiv = document.getElementById('showData');
        const div = document.createElement('div');
        containerDiv.textContent = '';
        div.innerHTML = `
        <div class=" shadow p-1 bg-warning rounded-3">
    <div class=" shadow p-1 bg-light bg-gradient rounded-3">
        <img  src="${data.picture.large}" class="card-img-top img-size" alt="...">
        <div class="card-body mt-2 text-center bg-primary shadow rounded-3 text-light">
            <h5 class="card-title fw-bold fs-3 ">Name : ${data.name.title, data.name.first, data.name.last}</h5>
            <h4>Registered Age : ${data.registered.age}</h4>
            <h5>Phone : ${data.phone}</h5>
            <h5>City : ${data.location.city}</h5>
            <h5>Country : ${data.location.country}</h5>
            <h5>Location : ${data.location.state}</h5>
            <h5>Street Name : ${data.location.street.name}</h5>
            <h5>Street Number : ${data.location.street.number}</h5>
            <h5>Post Code: ${data.location.postcode}</h5>
            <h5>Time: ${data.location.timezone.offset}</h5>
            <h5>Description: ${data.location.timezone.description}</h5>
        </div>
        </div>
    </div>
        `;

        containerDiv.appendChild(div);


        // console.log(data.picture.large);
        // console.log(data.name.title, data.name.first, data.name.last);
        // console.log(data.registered.age);
        // console.log(data.phone);
        // console.log(data.location.city);
        // console.log(data.location.country);
        // console.log(data.location.postcode);
        // console.log(data.location.state);
        // console.log(data.location.timezone.offset);
        // console.log(data.location.timezone.description);
        // console.log(data.location.street.name);
        // console.log(data.location.street.number);
    }
}