
// Text to Speech API test
// API provided by Voice RSS (voicerss.org)
// Documentation at http://www.voicerss.org/api/

// Get the div that contains the text to play as speech
var instructions = document.querySelector("#instructions");

// Generate the API URL by entering the needed parameters
var apiURL = "http://api.voicerss.org/?key=7814e85b6cf347d58749c22162e3d4e7&hl=en-gb&src=" + instructions.textContent;

// Create an "Audio" object and feed the API URL into it
// Documentation on Audio object: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
var myAudio = new Audio(apiURL);

// Generate a function to play the audio and add an event listener to a button to play that function
var playAudio = function() {
    myAudio.play();
}
var playBtn = document.querySelector("#play");
playBtn.addEventListener("click", playAudio);