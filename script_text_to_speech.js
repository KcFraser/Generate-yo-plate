
// Text to Speech API test
// API provided by Voice RSS (voicerss.org)
// Documentation at http://www.voicerss.org/api/

// Get the div that contains the text to play as speech
var instructions = document.querySelector(".instructions");
instructions = instructions.textContent;
// Generate the API URL by entering the needed parameters
var apiURL = "http://api.voicerss.org/?key=7814e85b6cf347d58749c22162e3d4e7&hl=en-gb&src=" + instructions;

// Create an "Audio" object and feed the API URL into it
// Documentation on Audio object: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement

// Generate a function to play the audio and add an event listener to a button to play that function
var playAudio = function() {
    var myAudio = new Audio(apiURL);
    myAudio.play();
}

var playBtn = document.querySelector("#play");
playBtn.addEventListener("click", playAudio);