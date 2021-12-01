var searchText = document.querySelector("#search-input");
var searchBtn = document.querySelector("#search-btn");
var recipeBtn = document.querySelector("#recipe-btn");
var mealCreate = document.querySelector("#results-display");



//add an event listener to capture the text from the input form
searchBtn.addEventListener("click", function(){
    //clear out any old meals
    mealCreate.innerHTML = "";
    var searchInput = searchText.value.trim();
    console.log(searchInput);
    //check to see if user entered anything, if not alert them to enter an ingredient
    if (searchInput) {
        getMeals(searchInput);
    } else {
        alert("Please enter an ingredient!");
    }
});

//fetch the recipes form the API based on main ingredient
var getMeals = function(userInput) {
var urlApi = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=' + userInput;
fetch(urlApi).then(function(response){
    //check to see if the response was good, if not, alert that theres no meals found
    if(response.ok) {
        response.json().then(function(data){    

            //create the elements for appending

            //if there are results, append the html
            if(data.meals) {
                var i = 0;
                data.meals.forEach(meal => {
                    console.log(i);
                    i++;
                    console.log(meal.strMeal);

                    // Get recipe/meal ID No.
                    console.log("meal ID",meal.idMeal);

                    mealCreate.innerHTML += "<div class='meals w-full overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-1 md:px-1 md:w-full lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3 border border-solid bg-gray-200 rounded-lg ...'><img class='w-full' src=" + meal.strMealThumb + " alt='Mountain'><div class='px-6 py-4'><div class='font-bold text-xl mb-2' id='search-result-0'>" + meal.strMeal + "</div><div class='px-6 pt-4 pb-2 flex justify-end'><button data-meal_id='" + meal.idMeal + "' id='recipe-btn-" + i +"' class='bg-red-500 text-white font-bold uppercase w-50 text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 items-center' type='button'>Get Recipe</button></div>";
                
                    
                });
            } else {
                alert("There is no meals for that ingredient!");
            }
            //save the HTML content to local storage
            localStorage.setItem('searchResults', mealCreate.innerHTML);
        }

        );

    }
});



}

var loadStorage = function() {
    var loadResults = localStorage.getItem('searchResults');
    mealCreate.innerHTML = loadResults;
}

var loadMealDetails = function(mealID){

    //Fetch the meal details
    var mealIDAPI = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID;
    fetch(mealIDAPI)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log("Recipe",data);
            console.log(data.meals[0].strMeal);

            var instructionsElem = document.querySelector("#instructions");
            instructionsElem.textContent = data.meals[0].strInstructions;
        })
        .then(function () {

            //Run the text to speech api
            var instructions = document.querySelector("#instructions");
            instructions = instructions.textContent;
            var apiURL = "http://api.voicerss.org/?key=7814e85b6cf347d58749c22162e3d4e7&hl=en-gb&src=" + instructions;
            var myAudio = new Audio(apiURL);
            myAudio.play();
            
        });

}

var getMealDetails = function(event){
    console.log(event.target);
    var mealID = event.target;
    mealID = mealID.getAttribute("data-meal_id");
    console.log(mealID);
    loadMealDetails(mealID);
}

var mealList = document.querySelector("#results-display");
mealList.addEventListener("click", getMealDetails);
loadStorage();

//load any local storage content thus far on load

