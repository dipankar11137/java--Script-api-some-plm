const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchTex = searchField.value;
    // console.log(searchTex);

    // clear data 
    searchField.value = ' ';

    if (searchField == ' ') {
        //please wright something to display
    } else {
        // load data 
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTex}`
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
            .catch(error => console.log(error))
    }


}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    // clear data 
    // searchResult.innerHTML = '';
    if (meals.length == 0) {
        // show no result
    }
    searchResult.textContent = '';
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMeadDetail(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(1, 100)}.</p>
                </div>
               
            </div>
        `;
        searchResult.appendChild(div);
    })

}

const loadMeadDetail = mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))

}

const displayMealDetail = meal => {
    console.log(meal);

    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
               <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(1, 100)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
    
    `;
    mealDetails.appendChild(div);
}