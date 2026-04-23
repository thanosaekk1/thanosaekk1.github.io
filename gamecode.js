// ΤΙΜΩΡΙΕΣ
const deck = [
    "Δογματικός",
    "Κλειστοφοβικός",
    "Μπεκρής",
    "Γατομανής",
    "Παρορμητικός",
    "Επίμονος",
    "Πολιτισμένος",
    "Δειλός",
    "Αγύμναστος",
    "Ξεχασιάρης",
    "Θανατοποινίτης",
    "Λουδίτης",
    "Ζαλισμένος",
    "Προβλέψιμος",
    "5min Bonus",
    "5min Bonus",
    "5min Bonus",
    "10min Bonus",
    "10min Bonus",
    "10min Bonus",
    "15min Bonus",
    "15min Bonus",
    "15min Bonus",
    "Τυχαία επιλογή ερώτησης",
    "Τυχαία επιλογή ερώτησης",
    "Βέτο ερώτησης",
    "Πέτα 1, Πάρε 2",
];
const deck_descriptions = [
    "Δογματικός:<br>Για τα επόμενα 30 λεπτά, οι μόνες στροφές που επιτρέπεται να κάνετε είναι προς τα δεξιά.",
    "Κλειστοφοβικός:<br>Για τα επόμενα 30 λεπτά δεν επιτρέπεται να μπείτε σε γραμμή του Μετρό.",
    "Μπεκρής:<br>Δεν επιτρέπεται να κάνετε άλλες ερωτήσεις μέχρι κάποιος στην ομάδα να πιει ένα ολόκληρο ποτό (σε μπουκάλι ή κουτάκι).",
    "Γατομανής:<br>Δεν επιτρέπεται να κάνετε άλλες ερωτήσεις μέχρι να τραβήξετε φωτογραφία μιας γάτας.",
    "Παρορμητικός:<br>Πρέπει να αποβιβαστείτε στην επόμενη στάση του μέσου που χρησιμοποιείτε.",
    "Επίμονος:<br>Δεν επιτρέπεται να αποβιβαστείτε από το μέσο που χρησιμοποιείτε για τα επόμενα 15 λεπτά, εκτός αν φτάσετε στο τερματισμό.",
    "Πολιτισμένος:<br>Προτού κάνετε άλλες ερωτήσεις, βρείτε ένα έργο τέχνης (μπορεί να είναι γλυπτό, πίνακας ή street art (όχι ταγκιές!)) και θαυμάστε το για 5 λεπτά. Στείλτε μια φωτογραφία στην άλλη ομάδα.",
    "Δειλός:<br>Η ομάδα που κρύβεται επιλέγει μια 'σωστή' κατεύθυνση της πυξίδας που θα οδηγούσε τους κυνηγούς σε εκείνη, και οι κυνηγοί δε μπορούν να πάνε προς τα εκεί για τα επόμενα 15 λεπτά.<br>(π.χ. Είσαι ΒΔ των κυνηγών, διαλέγεις Β και οι κυνηγοί πρέπει να μείνουν πιο Νότια από εκεί που ξεκίνησαν για 15').",
    "Αγύμναστος:<br>Για τον υπόλοιπο γύρο, πρέπει να ξεκουράζεστε σε κάθε ελεύθερο παγκάκι (εκτός στάσεων) εντός του οπτικού σας πεδίου για 1 λεπτό. Αν τα παγκάκια είναι σε σειρά, σταματήστε μόνο σε 1.",
    "Ξεχασιάρης:<br>Η ομάδα που κρύβεται διαλέγει 2 ερωτήσεις τις οποίες δε μπορεί να ερωτηθεί για τον υπόλοιπο γύρο και τις στέλνει στους κυνηγούς.",
    "Θανατοποινίτης:<br>Προτού κάνετε άλλες ερωτήσεις, νικήστε την ομάδα που κρύβεται μαντεύωντας μια λέξη έως 7 γραμμάτων που διάλεξαν σε κρεμάλα με 7 σωματικά μέλη/λάθη. Αν χάσετε, μπορείτε να επαναλάβετε κάθε 10 λεπτά.",
    "Λουδίτης:<br>Για τα επόμενα 30 λεπτά, μπορείτε να χρησιμοποιείτε το κινητό μόνο για να επικοινωνείτε με την ομάδα που κρύβεται. Η χρήση Maps/internet απαγορεύεται.",
    "Ζαλισμένος:<br>Για τον υπόλοιπο γύρο, δεν επιτρέπεται να κάνετε ερωτήσεις ενώ βρίσκεστε πάνω σε οποιοδήποτε μέσο μεταφοράς.",
    "Προβλέψιμος:<br>Για τον υπόλοιπο γύρο, η ομάδα που κρύβεται μπορεί να μαντέυει ποια θα είναι η επόμενη ερώτηση που θα δεχθεί. Αν τη πετύχει, τραβάει 3 κάρτες αντί για 1.",
    "5min Bonus:<br>Αν κρατάς ακόμα αυτή τη κάρτα στο τέλος του γύρου, πρόσθεσε 5 λεπτά στο τελικό σου χρόνο.",
    "5min Bonus:<br>Αν κρατάς ακόμα αυτή τη κάρτα στο τέλος του γύρου, πρόσθεσε 5 λεπτά στο τελικό σου χρόνο.",
    "5min Bonus:<br>Αν κρατάς ακόμα αυτή τη κάρτα στο τέλος του γύρου, πρόσθεσε 5 λεπτά στο τελικό σου χρόνο.",
    "10min Bonus:<br>Αν κρατάς ακόμα αυτή τη κάρτα στο τέλος του γύρου, πρόσθεσε 10 λεπτά στο τελικό σου χρόνο.",
    "10min Bonus:<br>Αν κρατάς ακόμα αυτή τη κάρτα στο τέλος του γύρου, πρόσθεσε 10 λεπτά στο τελικό σου χρόνο.",
    "10min Bonus:<br>Αν κρατάς ακόμα αυτή τη κάρτα στο τέλος του γύρου, πρόσθεσε 10 λεπτά στο τελικό σου χρόνο.",
    "15min Bonus:<br>Αν κρατάς ακόμα αυτή τη κάρτα στο τέλος του γύρου, πρόσθεσε 15 λεπτά στο τελικό σου χρόνο.",
    "15min Bonus:<br>Αν κρατάς ακόμα αυτή τη κάρτα στο τέλος του γύρου, πρόσθεσε 15 λεπτά στο τελικό σου χρόνο.",
    "15min Bonus:<br>Αν κρατάς ακόμα αυτή τη κάρτα στο τέλος του γύρου, πρόσθεσε 15 λεπτά στο τελικό σου χρόνο.",
    "Τυχαία επιλογή ερώτησης:<br>Όταν δεχθείς ερώτηση, μπορείς να χρησιμοποιήσεις αυτή τη κάρτα και οι κυνηγοί πρέπει να την αντικαταστήσουν με μια τυχαία διαθέσιμη από το κατάλογο (random.org).",
    "Τυχαία επιλογή ερώτησης:<br>Όταν δεχθείς ερώτηση, μπορείς να χρησιμοποιήσεις αυτή τη κάρτα και οι κυνηγοί πρέπει να την αντικαταστήσουν με μια τυχαία διαθέσιμη από το κατάλογο (random.org).",
    "Βέτο ερώτησης:<br>Όταν δεχθείς ερώτηση, μπορείς να χρησιμοποιήσεις αυτή τη κάρτα και δεν υποχρεούσαι να απαντήσεις. Η ερώτηση θα μετράει ως χρησιμοποιημένη.",
    "Πέτα 1, Πάρε 2:<br>Όταν χρησιμοποιήσεις αυτή τη κάρτα, πέτα 1 ακόμα κάρτα της επιλογής σου (χρησιμοποίησέ τη και μη μετρήσεις το αποτέλεσμά της) και τράβα 2 καινούριες.",
];

function setCookie(name, value, days = 6) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
}

let savedHand = getCookie("hand");
let hand = savedHand ? JSON.parse(savedHand) : [null, null, null, null, null];
let selectedIndex = null;

function renderHand() {
    const handDiv = document.getElementById("hand");
    handDiv.innerHTML = "";

    hand.forEach((card, i) => {
        const div = document.createElement("div");
        div.className = "card";
        if (i === selectedIndex) div.classList.add("selected");

        div.textContent = card ? card : "+";

        div.onclick = () => {
            selectedIndex = i;
            updateSelectedDesc(i);
            renderHand();
        };

        handDiv.appendChild(div);
    });
    setCookie("hand", JSON.stringify(hand));
    //const savedChronicle = getCookie("chronicle");
    //if(savedChronicle) {
    //    document.getElementById("chronicle").innerHTML = savedChronicle;
    //}
}

function drawCard() {
    const emptyIndex = hand.findIndex(c => c === null);
    if (emptyIndex === -1) return;

    const randomCard = deck[Math.floor(Math.random() * deck.length)];
    hand[emptyIndex] = randomCard;

    updateSelectedDesc(selectedIndex);
    renderHand();
}

function useCard() {
    if (selectedIndex === null) return;
    if (!hand[selectedIndex]) return;

    document.getElementById("chronicle").innerHTML += ("<br>ΧΡΗΣΙΜΟΠΟΙΗΘΗΚΕ: " + deck_descriptions[deck.indexOf(hand[selectedIndex])]);
    //setCookie("chronicle", JSON.stringify(document.getElementById("chronicle").innerHTML));

    hand[selectedIndex] = null;
    selectedIndex = null;

    renderHand();
}

function updateSelectedDesc(i) {
    if (hand[i]!=null) {
        document.getElementById("card_desc").innerHTML = deck_descriptions[deck.indexOf(hand[i])];
    }
}

function saveQuestions() {
    const checks = [...document.querySelectorAll('#questions input[type="checkbox"]')]
        .map(cb => cb.checked);
    setCookie("questions", JSON.stringify(checks));
}

function loadQuestions() {
    const saved = getCookie("questions");
    if (!saved) return;

    const values = JSON.parse(saved);
    const boxes = document.querySelectorAll('#questions input[type="checkbox"]');

    boxes.forEach((cb, i) => {
        cb.checked = values[i] || false;
    });
}

document.querySelectorAll('#questions input[type="checkbox"]').forEach(cb => cb.addEventListener("change", saveQuestions));

// initialize UI
renderHand();

let map;
let mapInitialized = false;

let groupA, groupB;

function initMap() {
    map = L.map('map').setView([37.975, 23.734], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    // --- Polygon Set A ---
    groupA = L.layerGroup([
        L.polygon(Moschato, { color: 'blue' }).bindPopup("Μοσχάτο (Πειραιάς)"),
        L.polygon(Tavros, { color: 'blue' }).bindPopup("Ταύρος (Πειραιάς)"),
        L.polygon(Piraeus, { color: 'blue' }).bindPopup("Πειραιάς (Πειραιάς)"),
        L.polygon(Keratsini, { color: 'blue' }).bindPopup("Κερατσίνι (Πειραιάς)"),
        L.polygon(Drapetsona, { color: 'blue' }).bindPopup("Δραπετσώνα (Πειραιάς)"),
        L.polygon(Korydallos, { color: 'blue' }).bindPopup("Κορυδαλλός (Πειραιάς)"),
        L.polygon(Nikaia, { color: 'blue' }).bindPopup("Νίκαια (Πειραιάς)"),
        L.polygon(Renti, { color: 'blue' }).bindPopup("Ρέντη (Πειραιάς)"),

        L.polygon(Athens, { color: 'yellow' }).bindPopup("Αθηνών (Κεντρικός Τομέας)"),
        L.polygon(Byron, { color: 'yellow' }).bindPopup("Βύρωνας (Κεντρικός Τομέας)"),
        L.polygon(Galatsi, { color: 'yellow' }).bindPopup("Γαλάτσι (Κεντρικός Τομέας)"),
        L.polygon(Dafni1, { color: 'yellow' }).bindPopup("Δάφνη (Κεντρικός Τομέας)"),
        L.polygon(Dafni2, { color: 'yellow' }).bindPopup("Δάφνη (Κεντρικός Τομέας)"),
        L.polygon(YmittosM, { color: 'yellow' }).bindPopup("Υμηττός (Κεντρικός Τομέας)"),
        L.polygon(Zografou, { color: 'yellow' }).bindPopup("Ζωγράφου (Κεντρικός Τομέας)"),
        L.polygon(Helioupoli, { color: 'yellow' }).bindPopup("Ηλιούπολη (Κεντρικός Τομέας)"),
        L.polygon(Kaisariani, { color: 'yellow' }).bindPopup("Καισαριανή (Κεντρικός Τομέας)"),
        L.polygon(Filadelfeia, { color: 'yellow' }).bindPopup("Φιλαδέλφεια (Κεντρικός Τομέας)"),
        L.polygon(Chalkidona, { color: 'yellow' }).bindPopup("Χαλκηδόνα (Κεντρικός Τομέας)"),

        L.polygon(Marousi, { color: 'green' }).bindPopup("Μαρούσι (Βόρειος Τομέας)"),
        L.polygon(AgiaParaskevi, { color: 'green' }).bindPopup("Αγία Παρασκευή (Βόρειος Τομέας)"),
        L.polygon(Vrilissia, { color: 'green' }).bindPopup("Βριλήσσια (Βόρειος Τομέας)"),
        L.polygon(Irakleio, { color: 'green' }).bindPopup("Ηράκλειο (Βόρειος Τομέας)"),
        L.polygon(Kifissia, { color: 'green' }).bindPopup("Κηφισσιά (Βόρειος Τομέας)"),
        L.polygon(Pefki, { color: 'green' }).bindPopup("Πεύκη (Βόρειος Τομέας)"),
        L.polygon(Likovrisi, { color: 'green' }).bindPopup("Λυκόβρυση (Βόρειος Τομέας)"),
        L.polygon(Metamorfosi, { color: 'green' }).bindPopup("Μεταμόρφωση (Βόρειος Τομέας)"),
        L.polygon(NeaIonia, { color: 'green' }).bindPopup("Νέα Ιωνία (Βόρειος Τομέας)"),
        L.polygon(Holargos, { color: 'green' }).bindPopup("Χολαργός (Βόρειος Τομέας)"),
        L.polygon(Papagou, { color: 'green' }).bindPopup("Παπάγου (Βόρειος Τομέας)"),
        L.polygon(Melissia, { color: 'green' }).bindPopup("Μελίσσια (Βόρειος Τομέας)"),
        L.polygon(Psychiko, { color: 'green' }).bindPopup("Παλαιό Ψυχικό (Βόρειος Τομέας)"),
        L.polygon(NeoPsychiko, { color: 'green' }).bindPopup("Νέο Ψυχικό (Βόρειος Τομέας)"),
        L.polygon(Filothei, { color: 'green' }).bindPopup("Φιλοθέη (Βόρειος Τομέας)"),
        L.polygon(Halandri, { color: 'green' }).bindPopup("Χαλάνδρι (Βόρειος Τομέας)"),

        L.polygon(Peristeri, { color: 'orange' }).bindPopup("Περιστέρι (Δυτικός Τομέας)"),
        L.polygon(AgiaVarvara, { color: 'orange' }).bindPopup("Αγία Βαρβάρα (Δυτικός Τομέας)"),
        L.polygon(AgioiAnargyroi, { color: 'orange' }).bindPopup("Άγιοι Ανάργυροι (Δυτικός Τομέας)"),
        L.polygon(Kamatero, { color: 'orange' }).bindPopup("Καματερό (Δυτικός Τομέας)"),
        L.polygon(AigaleoM, { color: 'orange' }).bindPopup("Αιγάλεω (Δυτικός Τομέας)"),
        L.polygon(Ilion, { color: 'orange' }).bindPopup("Ίλιον (Δυτικός Τομέας)"),
        L.polygon(Petroupoli, { color: 'orange' }).bindPopup("Πετρούπολη (Δυτικός Τομέας)"),

        L.polygon(Kallithea, { color: 'red' }).bindPopup("Καλλιθέα (Νότιος Τομέας)"),
        L.polygon(AgiosDimitrios, { color: 'red' }).bindPopup("Άγιος Δημήτριος (Νότιος Τομέας)"),
        L.polygon(NeaSmyrni, { color: 'red' }).bindPopup("Νέα Σμύρνη (Νότιος Τομέας)"),
        L.polygon(Faliro, { color: 'red' }).bindPopup("Παλαιό Φάληρο (Νότιος Τομέας)"),
        L.polygon(Alimos, { color: 'red' }).bindPopup("Άλιμος (Νότιος Τομέας)"),
        L.polygon(Glyfada, { color: 'red' }).bindPopup("Γλυφάδα (Νότιος Τομέας)"),
        L.polygon(Argyroupoli, { color: 'red' }).bindPopup("Αργυρούπολη (Νότιος Τομέας)"),
        L.polygon(Elliniko, { color: 'red' }).bindPopup("Ελληνικό (Νότιος Τομέας)")
    ]);

    // --- Polygon Set B ---
    groupB = L.layerGroup([
        L.polygon(Penteli, { color: 'red' }).bindPopup("Πλησιέστερο στη Πεντέλη"),
        L.polygon(Ymittos, { color: 'orange' }).bindPopup("Πλησιέστερο στον Υμηττό"),
        L.polygon(Aigaleo, { color: 'yellow' }).bindPopup("Πλησιέστερο στο Αιγάλεω")
    ]);

    groupA.addTo(map); // default
    mapInitialized = true;
}

function showGroup(group) {
    map.removeLayer(groupA);
    map.removeLayer(groupB);

    document.getElementById('btnA').classList.remove('active');
    document.getElementById('btnB').classList.remove('active');

    if (group === 'A') {
        groupA.addTo(map);
        document.getElementById('btnA').classList.add('active');
    } else {
        groupB.addTo(map);
        document.getElementById('btnB').classList.add('active');
    }
}

function openTab(evt, tabId) {
    document.querySelectorAll('.content')
        .forEach(c => c.classList.remove('active'));

    document.querySelectorAll('.tab')
        .forEach(t => t.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');

    if (tabId === 'tab3') {
        if (!mapInitialized) {
        setTimeout(initMap, 0);
        } else {
        setTimeout(() => map.invalidateSize(), 0);
        }
    }
}

window.onload = () => {
  loadQuestions();
  renderHand();
};