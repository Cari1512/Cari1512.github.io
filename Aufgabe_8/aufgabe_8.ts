var record: boolean = false;
var Beat = ["assets/kick.mp3", "assets/kick.mp3", "assets/hihat.mp3", "assets/snare.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/hihat.mp3", "assets/snare.mp3", "assets/hihat.mp3"];
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
function PlaySample (tone): void {
  var sound = new Audio("assets/" + tone + ".mp3");
  sound.play();
  if (record == true) {
    Beat.push(tone);
}
}

//Beat
var index: number = 0;
var tempo: number;

function myTrack(): void {
  
  
  if (document.getElementById("playButton").classList.contains("fa-play")) {
    document.getElementById("playButton").classList.remove("fa-play");
    document.getElementById("playButton").classList.add("fa-pause");
    var tempo: number = setInterval(myBeat, 300);
    record = false;
  }
  else {
    document.getElementById("playButton").classList.remove("fa-pause");
    document.getElementById("playButton").classList.add("fa-play");
    clearInterval(tempo);

  }
}
function myBeat(): void {
    playSample(Beat[index]);
    index += 1;
    if (index > 9)
      index = 0;
    console.log(Beat[index]);
  }
  

function recording(): void {
  record = true;
}
function deleting(): void {
  Beat.length = 0;
}




