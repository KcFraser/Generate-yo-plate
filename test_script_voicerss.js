// THIS FILE IS STRICTLY 

// Text to Speech API test
// API provided by Voice RSS (voicerss.org)
// Documentation at http://www.voicerss.org/api/

// Get the div that contains the text to play as speech
//var instructions = document.querySelector("#instructions");
var instructions = "Hello world";
// Generate the API URL by entering the needed parameters
var apiURL = "http://api.voicerss.org/?key=7814e85b6cf347d58749c22162e3d4e7&hl=en-gb&src=" + instructions;

// Create an "Audio" object and feed the API URL into it
// Documentation on Audio object: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement

function playAudioFetchVer () {
    fetch(apiURL)
        .then(function(response) {
            console.log(response.url);
            return response.url;
        })
        .then(function(data) {
	        console.log(data);
            document.querySelector("#player").setAttribute("src",data);
            //var myAudio = new Audio(data);
            //console.dir(myAudio);
            //myAudio.play();
        })
        .catch(function(error){
            alert("error");
        });
}


// Generate a function to play the audio and add an event listener to a button to play that function
var playAudio = function() {
    
    // Audio plays on safari if it's already downloaded
    //var myAudio = new Audio("test.wav");
    
    var myAudio = new Audio(apiURL);
    console.log(apiURL);
    console.dir(myAudio);
    myAudio.play();
}

var playAudioV2 = function() {
    
    // Audio plays on safari if it's already downloaded
    //var myAudio = new Audio("test.wav");
    
    var myAudio = new Audio(apiURL);
    console.log(apiURL);
    var promise = myAudio.play();

    if (promise !== undefined) {
        promise.then(() => {}).catch(error => console.error);
    }
}
var playBtn = document.querySelector("#play");
playBtn.addEventListener("click", playAudioFetchVer);