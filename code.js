//LEAFLET
var map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 13,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//LEAFLET END

const city_num = 29;

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
        city_name: "Cairo",
        X: 31.236,
        Y: 30.044,
        full_name: "Cairo",
        country: "Egypt",
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
        city_name: "Edinburgh",
        X: -3.183,
        Y: 55.950,
        full_name: "Edinburgh",
        country: "United Kingdom",
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
        city_name: "Lagos",
        X: 3.384,
        Y: 6.455,
        full_name: "Lagos",
        country: "Nigeria",
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
        city_name: "Saint_Petersburg",
        X: 30.309,
        Y: 59.937,
        full_name: "Saint Petersburg",
        country: "Russia",
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
        city_name: "Tangier",
        X: -5.804,
        Y: 35.777,
        full_name: "Tangier",
        country: "Morocco",
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
        city_name: "Yerevan",
        X: 44.514,
        Y: 40.181,
        full_name: "Yerevan",
        country: "Armenia",
        variants: 1
    }
];

//soundwave initialization
const soundwave = WaveSurfer.create({
  container: '#waveform',
  waveColor: '#4F4A85',
  progressColor: '#383351',
  height: 700,
  barWidth: 2,
  barGap: 1,
  barRadius: 2
})

const playButton = document.querySelector('#play_button');

let round = 0;
let score = 0;
let round_score = 0;

let roll = 0;
let made_guess = false;
let guessed = "None";

//map assets
var marker = [city_num];
var line = [5];

var default_icon = L.icon(
    {
        iconUrl: 'assets/city_default.png',
        iconSize: [9, 9]
    }
);
var selected_icon = L.icon(
    {
        iconUrl: 'assets/city_selected.png',
        iconSize: [9, 9]
    }
);
var correct_icon = L.icon(
    {
        iconUrl: 'assets/city_correct.png',
        iconSize: [9, 9]
    }
);
var wrong_icon = L.icon(
    {
        iconUrl: 'assets/city_wrong.png',
        iconSize: [9, 9]
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
    } else nextRound();
}

function nextRound() {
    if (round>4 && score == 5000) {
        alert("Game over! You have earned all 5000 possible points you could!");
        return 0;
    }
    else if (round>4) {
        alert("Game over! You earned " + score + " points out of possible 5000!");
        return 0;
    }
    
    round = round+1;
    document.getElementById("score_num").innerHTML = "Score: " + score + " — Round: " + round + "/5";

    document.getElementById("result_overlay").style.visibility = "hidden";

    cities.forEach((Data, i) => {
        marker[i].setIcon(default_icon);
    });
    for (i=0; i<round-1; i++) {
        line[i].setStyle({color: '#ffa0a0'});
    }

    roll = Math.floor(Math.random()*city_num);

    const audio_name = "sounds/" + cities[roll].city_name + ".mp3";
    soundwave.load(audio_name);
    soundwave.setTime(0);
    playButton.src = "assets/play_sound.png";

    correct_X = cities[roll].X;
    correct_Y = cities[roll].Y;

    //create cookie
    document.cookie = "score=" + score + "; path=/";
    document.cookie = "round=" + round + "; path=/";
    document.cookie = "roll=" + roll + "; path=/";

    made_guess = false;
}

function startGame() { //activated from loading the window
    //let save_fields = document.cookie.split(';');
    //let score_str = save_fields[0].split('=');
    //let round_str = save_fields[1].split('=');
    //let roll_str = save_fields[2].split('=');

    //score = parseFloat(score_str[1]);
    //round = parseFloat(round_str[1]); //causes issues
    //roll = parseFloat(roll_str[1]);
    score = 0;
    round = 0;
    
    nextRound();
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

window.onload = startGame();