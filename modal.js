var modal_container = document.getElementById ('modal_container');
var close = document.getElementById ('close');
// Rather than putting the event listener on the "Get recipe" button itself, I added the event listener on the entire div that's used to show all of the potential recipes.
var results_display = document.querySelector("#results-display");
// This function fires when you click on anything in the div with the ID "results-display"
// "Event bubbling" was used to help discern what was clicked on. If it wasn't clicked on the "Get recipe" button, the function is told to do nothing.
results_display.addEventListener('click', (event)=> {
    // "event.target" will tell JS what HTML element was clicked on
    // In the console, this line will tell you all the properties of "event.target" that we can take advantage of
    console.dir(event.target);
    // "event.target.classList" is an array that shows all the classes that is on the HTML element that was clicked on
    // I added a class called "get-recipe-btn" on the "Get recipe" button. The loop below scans all of the classes that are in that HTML element to see whether it has a class called "get-recipe-btn".
    // If it does, it opens the modal.
    for (var i=0; i < event.target.classList.length; i++) {
        var className = "";
        className = event.target.classList[i];
        // If the HTML element has a class called "get-recipe-btn", tell the modal to open.
        if (className === "get-recipe-btn") {
            modal_container.classList.add('show');
        } else {
            // Do nothing
        }
    }
});
close.addEventListener('click', ()=> {
    modal_container.classList.remove('show');
});