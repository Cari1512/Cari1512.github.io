// Variablen
var record = false;
var beat = ["kick", "kick", "hihat", "snare", "hihat", "kick", "hihat", "snare", "hihat"];
var tempo;
var index = 0;
//Buttons
window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("mousedown", function () { PlaySample("kick"); });
    document.querySelector("#button2").addEventListener("mousedown", function () { PlaySample("hihat"); });
    document.querySelector("#button3").addEventListener("mousedown", function () { PlaySample("snare"); });
    document.querySelector("#button4").addEventListener("mousedown", function () { PlaySample("F"); });
    document.querySelector("#button5").addEventListener("mousedown", function () { PlaySample("G"); });
    document.querySelector("#button6").addEventListener("mousedown", function () { PlaySample("A"); });
    document.querySelector("#button7").addEventListener("mousedown", function () { PlaySample("C"); });
    document.querySelector("#button8").addEventListener("mousedown", function () { PlaySample("laugh-1"); });
    document.querySelector("#button9").addEventListener("mousedown", function () { PlaySample("laugh-2"); });
    document.querySelector("#playButton").addEventListener("click", myTrack);
    document.querySelector("#recordButton").addEventListener("click", recording);
    document.querySelector("#deleteButton").addEventListener("click", deleting);
});
//Abspielen eines Tons
function PlaySample(tone) {
    var sound = new Audio("assets/" + tone + ".mp3");
    sound.play();
    if (record == true) {
        beat.push(tone);
    }
}
//playButton
function myTrack() {
    if (document.getElementById("playButton").classList.contains("fa-play")) {
        document.getElementById("playButton").classList.remove("fa-play");
        document.getElementById("playButton").classList.add("fa-pause");
        tempo = setInterval(myBeat, 300);
        record = false;
    }
    else {
        document.getElementById("playButton").classList.remove("fa-pause");
        document.getElementById("playButton").classList.add("fa-play");
        clearInterval(tempo);
        console.log("Pause");
    }
}
//Abspielen vom Array (pre-set beat oder Aufnahme)
function myBeat() {
    PlaySample(beat[index]);
    index += 1;
    if (index > 9)
        index = 0;
    if (beat.length == 0) {
        beat = ["kick", "kick", "hihat", "snare", "hihat", "kick", "hihat", "snare", "hihat"];
    }
}
//recordButton
function recording() {
    if (record == false) {
        record = true;
        document.getElementById("recordButton").style.color = "#BF1932";
    }
    else {
        record = false;
        document.getElementById("recordButton").style.color = "white";
    }
}
//deleteButton
function deleting() {
    beat.length = 0;
}
//# sourceMappingURL=aufgabe_8.js.map