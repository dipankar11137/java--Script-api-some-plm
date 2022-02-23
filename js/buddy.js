
const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = data => {
    // console.log(data);
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');

    for (const buddy of buddies) {
        // console.log(buddy.name.first);

        const p = document.createElement('p');
        p.innerText = `Name :${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        Email : ${buddy.email}`;
        buddiesDiv.appendChild(p);
    }

}

const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));

// console.log(q);
