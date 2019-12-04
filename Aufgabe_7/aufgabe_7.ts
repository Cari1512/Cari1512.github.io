
//Buttons
window.addEventListener("load", function(tone){
  document.querySelector("#button1").addEventListener("mousedown", function(){playSample("kick.mp3"); });
  document.querySelector("#button2").addEventListener("mousedown", function(){playSample("hihat.mp3"); });
  document.querySelector("#button3").addEventListener("mousedown", function(){playSample("snare.mp3"); });
  document.querySelector("#button4").addEventListener("mousedown", function(){playSample("F.mp3"); });
  document.querySelector("#button5").addEventListener("mousedown", function(){playSample("G.mp3"); });
  document.querySelector("#button6").addEventListener("mousedown", function(){playSample("A.mp3"); });
  document.querySelector("#button7").addEventListener("mousedown", function(){playSample("C.mp3"); });
  document.querySelector("#button8").addEventListener("mousedown", function(){playSample("laugh-1.mp3"); });
  document.querySelector("#button9").addEventListener("mousedown", function(){playSample("laugh-2.mp3"); });
  document.querySelector("#play").addEventListener("click",StartBeat);
});
function playSample(tone){
    var sound = new Audio("assets/"+ tone);
    sound.play();
}

//Beat

function StartBeat() {
  var Kick = setInterval(myBeat, 300);
  var index = 0;
  var Beat = ["kick.mp3", "kick.mp3", "snare.mp3", "hihat.mp3"];
  function myBeat() {
      var mySound = new Audio(Beat[index]);
      mySound.play();
      index += 1;
      if (index > 3)
          index = 0;
      console.log(Beat[index]);
  }
  ;
}
;

     



//   Arrays
//soundName:string
//setInterval(function(){
  //  play();
//},1000);
//
// var list:string[]=["peter","paul"];
//setInterval(function({
 //   console.log (list[index]);
 //index++;
 //}, 1000);
