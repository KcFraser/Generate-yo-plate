var searchText = document.querySelector("#search-input");
var searchBtn = document.querySelector("#search-btn");
var mealsArr = [];


//add an event listener to capture the text from the input form
searchBtn.addEventListener("click", function(){
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
            //set the variables for the content, first check if any meals. if not, return out of function
            if(!data.meals) {
                alert("no meals found");
                return;
            } else {
               //display the HTML results formatted in cards learn the HTML from this vid: https://www.youtube.com/watch?v=opikz5x_1ak&t=358s
               //loop should go through first all found meals, displaying each one.;
               for(var i = 0; i < data.meals.length; i++) {
                    console.log(data.meals[i]);
                    //dynamically create the card content here!!!
               }
            }

        })
    } 
})
}