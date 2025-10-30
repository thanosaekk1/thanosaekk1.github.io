//LEAFLET
var map = L.map('map', {
    maxBounds: [[-90, -200], [90, 200]]
}).setView([0, 0], 2);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 13,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//LEAFLET END

//WAVESURFER
const soundwave = WaveSurfer.create({
  container: '#waveform',
  waveColor: '#464646ff',
  progressColor: '#2b2b2bff',
  height: 680,
  barWidth: 2,
  barGap: 1,
  barRadius: 2
})
//WAVESURFER END

const city_num = cities.length;
let sound_num = 0;
for (let i=0; i<cities.length; i++) {
    sound_num += cities[i].variants;
}
console.log(city_num + " cities total");
console.log(sound_num + " sounds total");

const playButton = document.querySelector('#play_button');

let round = 0;
let score = 0; //total score
let round_score = 0;

let roll = 0;
let rolled_city = 0;
let variant = 1;
let made_guess = false;
let guessed = 0; //index of the city selected

let save_sound = false; //when to keep the previous sound or roll a new one

//map assets
var marker = [city_num];
var line = [5];

var default_icon = L.icon(
    {
        iconUrl: 'assets/city_default.png',
        iconSize: [11, 11]
    }
);
var selected_icon = L.icon(
    {
        iconUrl: 'assets/city_selected.png',
        iconSize: [11, 11]
    }
);
var correct_icon = L.icon(
    {
        iconUrl: 'assets/city_correct.png',
        iconSize: [11, 11]
    }
);
var wrong_icon = L.icon(
    {
        iconUrl: 'assets/city_wrong.png',
        iconSize: [11, 11]
    }
);
var prev_correct_icon = L.icon(
    {
        iconUrl: 'assets/city_prev_correct.png',
        iconSize: [11, 11]
    }
);
var prev_wrong_icon = L.icon(
    {
        iconUrl: 'assets/city_prev_wrong.png',
        iconSize: [11, 11]
    }
);

//initialize city markers on the map
cities.forEach((Data, i) => {
    marker[i] = L.marker(
        [Data.Y, Data.X],
        {icon: default_icon},
    ).addTo(map);
    marker[i].bindTooltip(Data.full_name);
}
);

//initialize click function for each city
cities.forEach((Data, i) => {
    marker[i].on('click', cityClick, marker[i]);
    }
);

function cityClick() {
    if (made_guess == true)
        return 0;
    //clean slate
    cities.forEach((Data, i) => {
        marker[i].setIcon(default_icon);
        }
    );
    //add previous wrong/correct guesses
    colorGuesses();
    //select new city
    this.setIcon(selected_icon);
    return 0;
}

function confirmGuess() {
    cities.forEach((Data, i) => {
        if (marker[i].getIcon()==selected_icon) {
            guessed = i;
            guessed_X = Data.X;
            guessed_Y = Data.Y;
        }
    });
    if (guessed == -1) { //no guess made
        return 0;
    }
    if (guessed == rolled_city) { //correct guess
        marker[guessed].setIcon(correct_icon);
    } else { //wrong guess
        marker[guessed].setIcon(wrong_icon);
        marker[rolled_city].setIcon(correct_icon);
    }

    //score
    const distance = calcDistance(guessed_Y, guessed_X, correct_Y, correct_X);
    round_score = 1000 * (0.9995 ** distance);
    round_score = parseFloat(round_score.toFixed(0));
    score = score + round_score;
    document.getElementById("score_num").innerHTML = "Score: " + score + " — Round: " + round + "/5";

    //draw the line
    line[round-1] = L.polyline(
        [[guessed_Y, guessed_X], [correct_Y, correct_X]], {color: '#FF0000'}
    ).addTo(map);
    const polyline_tooltip = "Round " + round + "<br>Guessed: " + cities[guessed].full_name + "<br>Correct: " + cities[rolled_city].full_name + "<br>Distance: " + distance.toFixed(2) + " km<br>Score: " + round_score;
    line[round-1].bindTooltip(polyline_tooltip);

    //overlay
    document.getElementById("result_overlay").style.visibility = "visible";
    var sound;
    if (round_score == 1000) {
        document.getElementById("result_overlay").style.backgroundColor = 'rgba(162, 197, 100, 0.75)';
        sound = new Audio('effects/correct.mp3');
    }
    else if (round_score > 0) {
        document.getElementById("result_overlay").style.backgroundColor = 'rgba(197, 179, 100, 0.75)';
        sound = new Audio('effects/half_wrong.mp3');
    }
    else {
        document.getElementById("result_overlay").style.backgroundColor = 'rgba(194, 123, 123, 0.75)';
        sound = new Audio('effects/wrong.mp3');
    }
    sound.play();
    document.getElementById("revealed_city_name").innerHTML = cities[rolled_city].full_name + ", " + cities[rolled_city].country;
    document.getElementById("round_score").innerHTML = round_score + " points earned";

    //save cookies for the round//create cookie
    document.cookie = "score=" + score + "; path=/";
    document.cookie = "round=" + round + "; path=/";
    document.cookie = "rolled_city=" + rolled_city + "; path=/";
    document.cookie = "variant=" + variant + "; path=/";

    document.cookie = "line" + (round-1) + "origin" + "=" + guessed;
    document.cookie = "line" + (round-1) + "dest" + "=" + rolled_city;
    document.cookie = "line" + (round-1) + "round_score" + "=" + round_score;
    document.cookie = "line" + (round-1) + "tooltip" + "=" + polyline_tooltip;

    guessed = -1;
    made_guess = true;

    if (round==5) resultsScreen();

    return 0;
}

function calcDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km

    // Convert latitude and longitude from degrees to radians
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    // Haversine formula
    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in km
}

function nextRoundButton() {
    if (made_guess==false) {
        alert("No guess made yet!");
        return 0;
    } else {
        line.forEach((Data, i) => {
            line[i].setStyle({color: '#ffa0a0'}); //here to not cause bug when refreshing
        });
        nextRound();
    }
}

function nextRound() {
    if (round>4) { //game over
        resultsScreen();
        return 0;
    }
    
    round = round+1;
    document.getElementById("score_num").innerHTML = "Score: " + score + " — Round: " + round + "/5";

    document.getElementById("result_overlay").style.visibility = "hidden";

    cities.forEach((Data, i) => {
        marker[i].setIcon(default_icon);
    });
    
    if (save_sound == false) {
        roll = Math.floor(Math.random()*sound_num); //only roll anew in case of new round or new game, not refresh
        let sounds_passed = 0;
        for (let i=0; i<city_num; i++) {
            sounds_passed += cities[i].variants;
            if (sounds_passed > roll) {
                rolled_city = i;
                break;
            }
        }
        variant = Math.floor(Math.random()*cities[rolled_city].variants) + 1;
        //console.log(cities[rolled_city].city_name + variant);
        document.getElementById("audio_source").href = cities[rolled_city].sources[variant-1];

        //insurance against getting the same city twice in a game
        let re_roll = false;
        for (let i=0; i<round-1; i++) {
            //console.log(cities[parseFloat(getCookieValue("line" + i + "dest"))].city_name);
            if (parseFloat(getCookieValue("line" + i + "dest"))==rolled_city) re_roll = true;
        }

        while (re_roll == true) {
            roll = Math.floor(Math.random()*sound_num);
            sounds_passed = 0;
            for (let i=0; i<city_num; i++) {
                sounds_passed += cities[i].variants;
                if (sounds_passed > roll) {
                    rolled_city = i;
                    break;
                }
            }
            variant = Math.floor(Math.random()*cities[rolled_city].variants) + 1;
            re_roll = false;
            for (let i=0; i<round-1; i++)
                if (parseFloat(getCookieValue("line" + i + "dest"))==rolled_city) re_roll = true;
        }
    } else { //restore sound from previous session
        rolled_city = getCookieValue("rolled_city");
        variant = getCookieValue("variant");
    }
    save_sound = false;

    //color icons from previous guesses
    colorGuesses();

    const audio_name = "sounds/" + cities[rolled_city].city_name + variant + ".mp3";
    document.cookie = "rolled_city=" + rolled_city + "; path=/";
    document.cookie = "variant=" + variant + "; path=/";
    
    soundwave.load(audio_name);
    soundwave.setTime(0);
    //soundwave.setVolume(0.5);
    if (round>1) {
        soundwave.once('ready', () => {
            soundwave.play();
            playButton.src = "assets/pause_sound.png";
        });
    } else playButton.src = "assets/play_sound.png";

    correct_X = cities[rolled_city].X;
    correct_Y = cities[rolled_city].Y;

    made_guess = false;
}

function loadGame() { //activated from loading the window
    //touchscreen compatibility
    if(window.matchMedia("(pointer: coarse)").matches) {
        map.gestureHandling.enable();
    } else map.gestureHandling.disable();

    score = parseFloat(getCookieValue("score"));
    round = parseFloat(getCookieValue("round"));
    rolled_city = parseFloat(getCookieValue("rolled_city"));
    variant = parseFloat(getCookieValue("variant"));
    
    //restore existing lines
    for (let i=0; i<round; i++) {
        guessed = parseFloat(getCookieValue("line" + i + "origin"));
        correct = parseFloat(getCookieValue("line" + i + "dest"));
        line[i] = L.polyline(
            [[cities[guessed].Y, cities[guessed].X], [cities[correct].Y, cities[correct].X]], {color: '#ffa0a0'}
        ).addTo(map);
        const polyline_tooltip = getCookieValue("line" + i + "tooltip");
        line[i].bindTooltip(polyline_tooltip);
    }
    //restore highscore
    document.getElementById("highscore").innerHTML = "Weekly Highscore: " + parseFloat(getCookieValue("highscore"));
    
    //no guess made yet: save sound from cookie
    //confirmed guess: advance to next round
    if (getCookieValue("round")>0)
        save_sound = true;
    else save_sound = false;
    nextRound();
}

function resultsScreen() {
    document.getElementById("results_popup").style.display = "block";
    document.getElementById("result_stat").innerHTML = "Final Score: " + score + "/5000";
    let detailedResults = "";
    for (let i=0; i<5; i++) {
        detailedResults += cities[parseFloat(getCookieValue("line" + i + "dest"))].full_name
                        + ": +"
                        + parseFloat(getCookieValue("line" + i + "round_score"))
                        + " (Guessed: "
                        + cities[parseFloat(getCookieValue("line" + i + "origin"))].full_name
                        + ") "
                        + "<br>";
    }
    document.getElementById("detailed_results").innerHTML = detailedResults;

    //update highscore
    if (score > parseFloat(getCookieValue("highscore"))) {
        const exp_date = new Date();
        exp_date.setTime(exp_date.getTime() + (7*24*60*60*1000));
        document.cookie = "highscore=" + score + "; expires=" + exp_date.toUTCString() + "; path=/";
        document.getElementById("highscore").innerHTML = "Weekly Highscore: " + score;
    }

    //prevent the game from choking out previous results when you refresh at the results screen
    document.cookie = "score=" + 0 + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = "round=" + 0 + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = "rolled_city=" + 0 + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = "variant=" + 0 + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

function hideResults() {
    document.getElementById("results_popup").style.display = "none";
}

function colorGuesses() {
    for (let i=0; i<round-1; i++) {
        let prev_city = parseFloat(getCookieValue("line" + i + "origin"));
        marker[prev_city].setIcon(prev_wrong_icon);

        prev_city = parseFloat(getCookieValue("line" + i + "dest"));
        marker[prev_city].setIcon(prev_correct_icon);
    }
}

function getCookieValue(name) {
    const fields = document.cookie.split(';');
    for (let c of fields) {
        const [key, value] = c.trim().split('=');
        if (key === name) return value;
    }
    return 0;
}

function newGame() { //activated from pressing the New Game button
    score = 0;
    round = 0;
    nextRound();
    line.forEach((Data, i) => {
        line[i].removeFrom(map);
    });
    //clear all past memory
    document.cookie = "score=" + 0 + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = "round=" + 0 + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = "rolled_city=" + 0 + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = "variant=" + 0 + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

    for (let i=0; i<5; i++) {
        document.cookie = "line" + i + "origin" + "=" + 0 + "; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = "line" + i + "dest" + "=" + 0 + "; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = "line" + i + "round_score" + "=" + 0 + "; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = "line" + i + "tooltip" + "=" + 0 + "; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    }
}

//AUDIO CONTROL

document.onkeydown = function(e) {
    if (e.key == ' ') {
        e.preventDefault();
        toggleAudio();
    }
    else if (e.key == 'ArrowRight')
        soundwave.setTime(soundwave.getCurrentTime() + 5);
    else if (e.key == 'ArrowLeft')
        soundwave.setTime(soundwave.getCurrentTime() - 5);
    else if (e.key == 'Escape')
        hideResults();
}

function toggleAudio() {
    if (soundwave.getCurrentTime() >= soundwave.getDuration()) { //pressing play after having finished the clip
        soundwave.setTime(0);
        soundwave.play();
        playButton.src = "assets/pause_sound.png";
    } else { //normal toggle
        soundwave.playPause();
        if (soundwave.isPlaying()) {
            playButton.src = "assets/pause_sound.png";
        } else {
            playButton.src = "assets/play_sound.png";
        }
    }
}
playButton.addEventListener('click', toggleAudio);

let volume = document.getElementById('volume-slider');
volume.addEventListener("change", function(e) {
    soundwave.setVolume(e.currentTarget.value / 100);
})

const muteButton = document.querySelector('#volume_icon');
const muted = 0;

function toggleMute() {
    if (soundwave.getMuted() == false) {
        soundwave.setMuted(true);
        muteButton.src = "assets/muted_icon.png";
        volume.value = 0;
    }
    else {
        soundwave.setMuted(false);
        muteButton.src = "assets/volume_icon.png";
        volume.value = 100 * soundwave.getVolume();
    }
}
muteButton.addEventListener('click', toggleMute);

soundwave.on('finish', function() {
    playButton.src = "assets/play_sound.png";
});

//START

window.onload = loadGame();