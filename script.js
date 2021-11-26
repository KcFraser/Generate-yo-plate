var searchText = document.querySelector("#search-input");
var searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", function(){
    var ingredientInput = searchText.value.trim();
    console.log(ingredientInput);
})