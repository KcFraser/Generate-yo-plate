var searchText = document.querySelector("#search-input");
var searchBtn = document.querySelector("#search-btn");


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
            //set the variables for the content
            console.log(data);
        })
    } else {
        alert("No Meals Found with this ingredient");
    }
})
}