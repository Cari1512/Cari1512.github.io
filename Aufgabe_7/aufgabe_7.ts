
//Buttons
window.addEventListener("load", function(tone){
  document.querySelector("#button1").addEventListener("mousedown", function(){playSample("kick"); });
  document.querySelector("#button2").addEventListener("mousedown", function(){playSample("hihat"); });
  document.querySelector("#button3").addEventListener("mousedown", function(){playSample("snare"); });
  document.querySelector("#button4").addEventListener("mousedown", function(){playSample("F"); });
  document.querySelector("#button5").addEventListener("mousedown", function(){playSample("G"); });
  document.querySelector("#button6").addEventListener("mousedown", function(){playSample("A"); });
  document.querySelector("#button7").addEventListener("mousedown", function(){playSample("C"); });
  document.querySelector("#button8").addEventListener("mousedown", function(){playSample("laugh-1"); });
  document.querySelector("#button9").addEventListener("mousedown", function(){playSample("laugh-2"); });
  document.querySelector("#play").addEventListener("click",mytrack);
});
function playSample(tone){
    var sound = new Audio("assets/"+ tone +".mp3");
    sound.play();
}

//Beat

function mytrack () {
  var tempo = setInterval(myBeat, 300);
  var index = 0;
  var Beat = ["assets/kick.mp3","assets/kick.mp3", "assets/hihat.mp3", "assets/snare.mp3","assets/hihat.mp3","assets/kick.mp3",  "assets/hihat.mp3", "assets/snare.mp3","assets/hihat.mp3"];
  function myBeat() {
      var mySound = new Audio(Beat[index]);
      mySound.play();
      index += 1;
      if (index > 9)
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
