let homeScore = 0
function addOneHome() {
    homeScore += 1
    document.getElementById("home-score").innerText = homeScore
}

function addTwoHome() {
    homeScore += 2
    document.getElementById("home-score").innerText = homeScore
}

function addThreeHome() {
    homeScore += 3
    document.getElementById("home-score").innerText = homeScore
}

let guestScore = 0
function addOneGuest() {
    guestScore += 1
    document.getElementById("guest-score").innerText = guestScore
}

function addTwoGuest() {
    guestScore += 2
    document.getElementById("guest-score").innerText = guestScore
}

function addThreeGuest() {
    guestScore += 3
    document.getElementById("guest-score").innerText = guestScore
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    document.getElementById("home-score").innerText = 0
    document.getElementById("guest-score").innerText = 0
    document.getElementById("guest-score-bg").style.border = "none";
    document.getElementById("home-score-bg").style.border = "none";
}

