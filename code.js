//LEAFLET
var map = L.map('map').setView([0, 0], 2);
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
  height: 700,
  width: 700,
  barWidth: 2,
  barGap: 1,
  barRadius: 2
})
//WAVESURFER END

const cities = [
    {
        city_name: "Amsterdam",
        X: 4.894,
        Y: 52.373,
        full_name: "Amsterdam",
        country: "Netherlands",
        variants: 1
    },
    {
        city_name: "Athens",
        X: 23.728,
        Y: 37.984,
        full_name: "Athens",
        country: "Greece",
        variants: 1
    },
    {
        city_name: "Barcelona",
        X: 2.183,
        Y: 41.383,
        full_name: "Barcelona",
        country: "Spain",
        variants: 1
    },
    {
        city_name: "Belgrade",
        X: 20.457,
        Y: 44.818,
        full_name: "Belgrade",
        country: "Serbia",
        variants: 1
    },
    {
        city_name: "Bengaluru",
        X: 77.592,
        Y: 12.979,
        full_name: "Bengaluru",
        country: "India",
        variants: 1
    },
    {
        city_name: "Buenos_Aires",
        X: -58.381,
        Y: -34.604,
        full_name: "Buenos Aires",
        country: "Argentina",
        variants: 1
    },
    {
        city_name: "Cairo",
        X: 31.236,
        Y: 30.044,
        full_name: "Cairo",
        country: "Egypt",
        variants: 1
    },
    {
        city_name: "Cap_Haitien",
        X: -72.200,
        Y: 19.760,
        full_name: "Cap-Haïtien",
        country: "Haiti",
        variants: 1
    },
    {
        city_name: "Damascus",
        X: 36.309,
        Y: 33.513,
        full_name: "Damascus",
        country: "Syria",
        variants: 1
    },
    {
        city_name: "Dhaka",
        X: 90.415,
        Y: 23.804,
        full_name: "Dhaka",
        country: "Bangladesh",
        variants: 1
    },
    {
        city_name: "Edinburgh",
        X: -3.183,
        Y: 55.950,
        full_name: "Edinburgh",
        country: "United Kingdom",
        variants: 1
    },
    {
        city_name: "Geneva",
        X: 6.147,
        Y: 46.202,
        full_name: "Geneva",
        country: "Switzerland",
        variants: 1
    },
    {
        city_name: "Havana",
        X: -82.359,
        Y: 23.137,
        full_name: "Havana",
        country: "Cuba",
        variants: 1
    },
    {
        city_name: "Istanbul",
        X: 28.955,
        Y: 41.014,
        full_name: "Istanbul",
        country: "Turkey",
        variants: 1
    },
    {
        city_name: "Kinshasa",
        X: 15.312,
        Y: -4.322,
        full_name: "Kinshasa",
        country: "DR Congo",
        variants: 1
    },
    {
        city_name: "Kyiv",
        X: 30.523,
        Y: 50.450,
        full_name: "Kyiv",
        country: "Ukraine",
        variants: 1
    },
    {
        city_name: "Lagos",
        X: 3.384,
        Y: 6.455,
        full_name: "Lagos",
        country: "Nigeria",
        variants: 1
    },
    {
        city_name: "Lahore",
        X: 74.344,
        Y: 31.550,
        full_name: "Lahore",
        country: "Pakistan",
        variants: 1
    },
    {
        city_name: "London",
        X: -0.127,
        Y: 51.507,
        full_name: "London",
        country: "United Kingdom",
        variants: 1
    },
    {
        city_name: "Manila",
        X: 120.977,
        Y: 14.596,
        full_name: "Manila",
        country: "Philippines",
        variants: 1
    },
    {
        city_name: "Maputo",
        X: 32.583,
        Y: -25.967,
        full_name: "Maputo",
        country: "Mozambique",
        variants: 1
    },
    {
        city_name: "Mexico_City",
        X: -99.133,
        Y: 19.433,
        full_name: "Mexico City",
        country: "Mexico",
        variants: 1
    },
    {
        city_name: "Mumbai",
        X: 72.877,
        Y: 19.076,
        full_name: "Mumbai",
        country: "India",
        variants: 1
    },
    {
        city_name: "Munich",
        X: 11.575,
        Y: 48.137,
        full_name: "Munich",
        country: "Germany",
        variants: 1
    },
    {
        city_name: "Nairobi",
        X: 36.817,
        Y: -1.286,
        full_name: "Nairobi",
        country: "Kenya",
        variants: 1
    },
    {
        city_name: "New_Orleans",
        X: -90.078,
        Y: 29.976,
        full_name: "New Orleans",
        country: "United States",
        variants: 1
    },
    {
        city_name: "New_York",
        X: -74.006,
        Y: 40.713,
        full_name: "New York City",
        country: "United States",
        variants: 1
    },
    {
        city_name: "Oslo",
        X: 10.739,
        Y: 59.913,
        full_name: "Oslo",
        country: "Norway",
        variants: 1
    },
    {
        city_name: "Paris",
        X: 2.352,
        Y: 48.857,
        full_name: "Paris",
        country: "France",
        variants: 1
    },
    {
        city_name: "Phnom_Penh",
        X: 104.921,
        Y: 11.569,
        full_name: "Phnom Penh",
        country: "Cambodia",
        variants: 1
    },
    {
        city_name: "Rio_de_Janeiro",
        X: -43.206,
        Y: -22.911,
        full_name: "Rio de Janeiro",
        country: "Brazil",
        variants: 1
    },
    {
        city_name: "Riyadh",
        X: 46.717,
        Y: 24.633,
        full_name: "Riyadh",
        country: "Saudi Arabia",
        variants: 1
    },
    {
        city_name: "Saint_Petersburg",
        X: 30.309,
        Y: 59.937,
        full_name: "Saint Petersburg",
        country: "Russia",
        variants: 1
    },
    {
        city_name: "San_Francisco",
        X: -122.417,
        Y: 37.783,
        full_name: "San Francisco",
        country: "United States",
        variants: 1
    },
    {
        city_name: "Santiago",
        X: -70.650,
        Y: -33.437,
        full_name: "Santiago",
        country: "Chile",
        variants: 1
    },
    {
        city_name: "Seoul",
        X: 126.983,
        Y: 37.567,
        full_name: "Seoul",
        country: "South Korea",
        variants: 1
    },
    {
        city_name: "Shanghai",
        X: 121.475,
        Y: 31.229,
        full_name: "Shanghai",
        country: "China",
        variants: 1
    },
    {
        city_name: "Singapore",
        X: 103.833,
        Y: 1.283,
        full_name: "Singapore",
        country: "Singapore",
        variants: 1
    },
    {
        city_name: "Sydney",
        X: 151.200,
        Y: -33.867,
        full_name: "Sydney",
        country: "Australia",
        variants: 1
    },
    {
        city_name: "Taipei",
        X: 121.562,
        Y: 25.037,
        full_name: "Taipei",
        country: "Taiwan",
        variants: 1
    },
    {
        city_name: "Tangier",
        X: -5.804,
        Y: 35.777,
        full_name: "Tangier",
        country: "Morocco",
        variants: 1
    },
    {
        city_name: "Tehran",
        X: 51.390,
        Y: 35.689,
        full_name: "Tehran",
        country: "Iran",
        variants: 1
    },
    {
        city_name: "Tokyo",
        X: 139.767,
        Y: 35.683,
        full_name: "Tokyo",
        country: "Japan",
        variants: 1
    },
    {
        city_name: "Tunis",
        X: 10.182,
        Y: 36.806,
        full_name: "Tunis",
        country: "Tunisia",
        variants: 1
    },
    {
        city_name: "Ulaanbaatar",
        X: 106.915,
        Y: 47.922,
        full_name: "Ulaanbaatar",
        country: "Mongolia",
        variants: 1
    },
    {
        city_name: "Venice",
        X: 12.336,
        Y: 45.437,
        full_name: "Venice",
        country: "Italy",
        variants: 1
    },
    {
        city_name: "Vienna",
        X: 16.372,
        Y: 48.208,
        full_name: "Vienna",
        country: "Austria",
        variants: 1
    },
    {
        city_name: "Warsaw",
        X: 21.011,
        Y: 52.230,
        full_name: "Warsaw",
        country: "Poland",
        variants: 1
    },
    {
        city_name: "Yangon",
        X: 96.160,
        Y: 16.795,
        full_name: "Yangon",
        country: "Myanmar",
        variants: 1
    },
    {
        city_name: "Yerevan",
        X: 44.514,
        Y: 40.181,
        full_name: "Yerevan",
        country: "Armenia",
        variants: 1
    }
];

const city_num = cities.length;

const playButton = document.querySelector('#play_button');

let round = 0;
let score = 0; //total score
let round_score = 0;

let roll = 0;
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
    if (guessed == -1) {    //no guess made
        return 0;
    }
    if (guessed == roll) {  //correct guess
        marker[guessed].setIcon(correct_icon);
    } else {                //wrong guess
        marker[guessed].setIcon(wrong_icon);
        marker[roll].setIcon(correct_icon);
    }

    //score
    const distance = calcDistance(guessed_Y, guessed_X, correct_Y, correct_X);
    round_score = 1000 * (0.9995 ** distance);
    score = score + round_score;
    round_score = parseFloat(round_score.toFixed(2));
    score = parseFloat(score.toFixed(2));
    document.getElementById("score_num").innerHTML = "Score: " + score + " — Round: " + round + "/5";

    //draw the line
    line[round-1] = L.polyline(
        [[guessed_Y, guessed_X], [correct_Y, correct_X]], {color: '#FF0000'}
    ).addTo(map);
    const polyline_tooltip = "Round " + round + "<br>Guessed: " + cities[guessed].full_name + "<br>Correct: " + cities[roll].full_name + "<br>Distance: " + distance.toFixed(2) + " km<br>Score: " + round_score;
    line[round-1].bindTooltip(polyline_tooltip);

    //overlay
    document.getElementById("result_overlay").style.visibility = "visible";
    document.getElementById("revealed_city_name").innerHTML = cities[roll].full_name + ", " + cities[roll].country;
    document.getElementById("round_score").innerHTML = round_score + " points earned";

    //save cookies for the round//create cookie
    document.cookie = "score=" + score + "; path=/";
    document.cookie = "round=" + round + "; path=/";
    document.cookie = "roll=" + roll + "; path=/";

    document.cookie = "line" + (round-1) + "origin" + "=" + guessed;
    document.cookie = "line" + (round-1) + "dest" + "=" + roll;
    document.cookie = "line" + (round-1) + "tooltip" + "=" + polyline_tooltip;

    guessed = -1;
    made_guess = true;

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
        if (score == 5000) {
            alert("Game over! You have earned all 5000 possible points you could!");
        }
        else {
            alert("Game over! You earned " + score + " points out of possible 5000!");
        }
        //update highscore
        if (score>parseFloat(getCookieValue("highscore"))) {
            const exp_date = new Date();
            exp_date.setTime(exp_date.getTime() + (7*24*60*60*1000));
            document.cookie = "highscore=" + score + "; expires=" + exp_date.toUTCString() + "; path=/";
            document.getElementById("highscore").innerHTML = "Weekly Highscore: " + score;
        }
        return 0;
    }
    
    round = round+1;
    document.getElementById("score_num").innerHTML = "Score: " + score + " — Round: " + round + "/5";

    document.getElementById("result_overlay").style.visibility = "hidden";

    cities.forEach((Data, i) => {
        marker[i].setIcon(default_icon);
    });
    
    if (save_sound == false) {
        roll = Math.floor(Math.random()*city_num); //only roll anew in case of new round or new game, not refresh

        //DOESN'T WORK
        //insurance against getting the same city twice in a game
        /*let re_roll = false;
        for (let i=0; i<round-1; i++) {
            console.log(cities[parseFloat(getCookieValue("line" + i + "dest"))].city_name);
            if (parseFloat(getCookieValue("line" + i + "dest"))==roll) re_roll = true;
        }

        while (re_roll == true) {
            roll = Math.floor(Math.random()*city_num);
            console.log(cities[roll].city_name);
            re_roll = false;
            for (let i=0; i<round-1; i++)
                if (parseFloat(getCookieValue("line" + i + "dest"))==roll) re_roll = true;
        }*/
    }
    save_sound = false;

    const audio_name = "sounds/" + cities[roll].city_name + ".mp3";
    soundwave.load(audio_name);
    soundwave.setTime(0);
    soundwave.setVolume(0.5);
    playButton.src = "assets/play_sound.png";

    correct_X = cities[roll].X;
    correct_Y = cities[roll].Y;

    made_guess = false;
}

function loadGame() { //activated from loading the window
    score = parseFloat(getCookieValue("score"));
    round = parseFloat(getCookieValue("round"));
    roll = parseFloat(getCookieValue("roll"));
    
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
    
    save_sound = true;
    nextRound();
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
}

function toggleAudio() {
    soundwave.playPause();
    if (soundwave.isPlaying()) {
        playButton.src = "assets/pause_sound.png";
    } else {
        playButton.src = "assets/play_sound.png";
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

//START

window.onload = loadGame();