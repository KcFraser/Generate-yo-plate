
// Text to Speech API test
// API provided by Voice RSS (voicerss.org)
// Documentation at http://www.voicerss.org/api/

var myAudio;

// Documentation on Audio object: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement

// Discern what was clicked and run the appropriate function
var processClick = function(event){
    var modalID = event.target;
    modalID = modalID.getAttribute("data-modal");
    modalID = "#modal" + modalID;
    console.log(modalID);

    var btnClass = event.target;
    btnClass = btnClass.getAttribute("class");

    if (btnClass === "play") {
        playAudio(modalID);
    } else if (btnClass === "pause") {
        stopAudio();
    }
}

// Generate a function to play the audio and add an event listener to a button to play that function
var playAudio = function(modalID) {

    // Get the div that contains the text to play as speech
    var instructionsDiv = modalID + " .instructions";
    console.log(instructionsDiv);
    var instructions = document.querySelector(instructionsDiv);
    instructions = instructions.textContent;
    // Generate the API URL by entering the needed parameters
    var apiURL = "http://api.voicerss.org/?key=7814e85b6cf347d58749c22162e3d4e7&hl=en-gb&src=" + instructions;

    fetch(apiURL)
        .then(function(response){
            return response;
        })
        .then(function(data){

            if(myAudio) {
                myAudio.pause();
            }
            // Create an "Audio" object and feed the API URL into it
            myAudio = new Audio(data.url);
            myAudio.play();
        })
        .catch(function(error) {
            // Catch any errors that are detected
            console.dir(error);
        })
}

// Stop the audio if it's playing
var stopAudio = function(){
    console.log("Audio stopped");
    myAudio.pause();
}


// For #modal1
var playBtn1 = document.querySelector("#modal1");
playBtn1.addEventListener("click", processClick);

var stopBtn1 = document.querySelector("#modal1");
stopBtn1.addEventListener("click", stopAudio);

// For #modal2
var playBtn2 = document.querySelector("#modal2");
playBtn2.addEventListener("click", processClick);

var stopBtn2 = document.querySelector("#modal2");
stopBtn2.addEventListener("click", stopAudio);