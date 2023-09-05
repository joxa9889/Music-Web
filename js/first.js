var coll = document.getElementsByClassName("collapsible");
var up = document.querySelector('.up');
var down = document.querySelector('.down');
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
    content.style.maxHeight = null;
    up.style.display = "none";
    down.style.display = "block";
    } else {
    content.style.maxHeight = content.scrollHeight + "px";
    up.style.display = "block";
    down.style.display = "none";
    } 
});
}

var btn = document.getElementsByClassName("collapsephone");
var x = document.querySelector(".X-icon");
var y = document.querySelector(".Y-icon")
    
btn[0].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = document.getElementById("smth");
    if (content.style.display === "block") {
        content.style.display = "none";
        x.style.display = "none";
        y.style.display = "block";
    } else {
        content.style.display = "block";
        x.style.display = "block";
        y.style.display = "none";
    }
});


var coll = document.getElementsByClassName("collapsible-for");
var upn = document.querySelector('.upn');
var downn = document.querySelector('.downn');
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
        content.style.padding = 0 + "px";
        upn.style.display = "none";
        downn.style.display = "block";
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        upn.style.display = "block";
        downn.style.display = "none";
    } 
});
}

let now_playing = document.querySelector('.now-playing');
let playpause_btn = document.querySelector('.playpause-track');

let seek_slider = document.querySelector('.seek_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        music : 'audio/Alan-Walker-Faded.mp3'
    },
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
}


function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}

function playTrack(){
    curr_track.play();
    isPlaying = true;
    playpause_btn.innerHTML = '<i class="fa-solid fa-pause sizing"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '<i class="fa-solid fa-play sizing"></i>';
}

function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}