//Variablen
var cardColour = ["#ff0000", "#00ff00", "#0000ff", "#ffff00"];
var cardNumber = ["1", "2", "3", "4", "5", "6", "7", "8"];
var drawP = [];
var playP = [];
var player = [];
var com = [];
window.addEventListener("load", function () {
    generateCard();
    document.querySelector(".start").addEventListener("click", GivingCards);
    document.querySelector(".draw-pile").addEventListener("click", DrawCard);
});
//Karten werden erstellt und in den Zieh stapel gepushed
function generateCard() {
    for (var i = 0; i < cardColour.length; i++) {
        for (var k = 0; k < cardNumber.length; k++) {
            var newCard = {
                COLOUR: cardColour[i],
                VALUE: cardNumber[k]
            };
            drawP.push(newCard);
            shuffleCards(drawP);
        }
    }
    preDrawGenerateHTML();
}
//Karten im Ziehstapel werden gemischt
function shuffleCards(drawP) {
    var arraylength = drawP.length;
    for (var i = 0; i < arraylength; i++) {
        var x = Math.floor(Math.random() * (arraylength - 1));
        var tempi = drawP[i];
        var tempx = drawP[x];
        drawP[i] = tempx;
        drawP[x] = tempi;
    }
    return drawP;
}
function preDrawGenerateHTML() {
    for (var i = 0; i < drawP.length; i++) {
        DrawGenerateHTML(i);
    }
}
//Ziehstapel in HTML abgebildet
function DrawGenerateHTML(count) {
    var CardDiv = document.createElement("div");
    document.querySelector(".draw-pile").appendChild(CardDiv);
    CardDiv.setAttribute("class", "Card black");
}
//Hand des Spielers wird abgebildet
function PlayerGenerateHTML(count) {
    var CardDiv = document.createElement("div");
    document.querySelector(".player").appendChild(CardDiv);
    var CardVal = document.createElement("p");
    CardVal.innerHTML = player[count].VALUE;
    CardDiv.appendChild(CardVal);
    var CardValBack = document.createElement("p");
    CardValBack.innerHTML = player[count].VALUE;
    CardValBack.setAttribute("id", "back");
    CardDiv.appendChild(CardValBack);
    switch (player[count].COLOUR) {
        case "#ff0000":
            CardDiv.setAttribute("class", "Card RED");
            break;
        case "#00ff00":
            CardDiv.setAttribute("class", "Card GREEN");
            break;
        case "#0000ff":
            CardDiv.setAttribute("class", "Card BLUE");
            break;
        case "#ffff00":
            CardDiv.setAttribute("class", "Card YELLOW");
            break;
    }
    CardDiv.addEventListener("click", function () { PlayCard(count); }, false);
}
//Gegenspieler (Computer)
function CompGenerateHTML(count) {
    var CardDiv = document.createElement("div");
    document.querySelector(".computer-player").appendChild(CardDiv);
    CardDiv.setAttribute("class", "Card black");
}
//Ablegstapel
function PlayingPileGenerateHTML(count) {
    var CardDiv = document.createElement("div");
    document.querySelector(".playing-pile").appendChild(CardDiv);
    var CardVal = document.createElement("p");
    CardVal.innerHTML = playP[count].VALUE;
    CardDiv.appendChild(CardVal);
    var CardValBack = document.createElement("p");
    CardValBack.innerHTML = playP[count].VALUE;
    CardValBack.setAttribute("id", "back");
    CardDiv.appendChild(CardValBack);
    switch (playP[count].COLOUR) {
        case "#ff0000":
            CardDiv.setAttribute("class", "Card RED");
            break;
        case "#00ff00":
            CardDiv.setAttribute("class", "Card GREEN");
            break;
        case "#0000ff":
            CardDiv.setAttribute("class", "Card BLUE");
            break;
        case "#ffff00":
            CardDiv.setAttribute("class", "Card YELLOW");
            break;
    }
}
//Karten werden aufgeteilt
function GivingCards() {
    var divButton = document.querySelector(".start");
    if (divButton.hasChildNodes) {
        while (divButton.firstChild) {
            divButton.removeChild(divButton.firstChild);
        }
    }
    var p = drawP.length;
    var q = player.length;
    var t = com.length;
    var a = drawP.length - 1; // letzte/oberste Karte der Ziehkarten-Stapels (Array)
    var b = drawP.length - 2; // zweitletzte Karte
    var c = drawP.length - 3;
    var d = drawP.length - 4;
    var e = drawP.length - 5;
    console.log("drawP-Array hat eine Länge von " + p);
    console.log("Player-Array hat eine Länge von " + q);
    console.log("Com-Array hat eine Länge von " + t);
    player.push(drawP[a], drawP[b], drawP[c], drawP[d], drawP[e]);
    drawP.splice(e, 5);
    p = drawP.length;
    q = player.length;
    console.log("drawP-Array hat eine Länge von " + p);
    console.log("Player-Array hat eine Länge von " + q);
    a = drawP.length - 1;
    b = drawP.length - 2;
    c = drawP.length - 3;
    d = drawP.length - 4;
    e = drawP.length - 5;
    com.push(drawP[a], drawP[b], drawP[c], drawP[d], drawP[e]);
    drawP.splice(e, 5);
    p = drawP.length;
    t = com.length;
    console.log("drawP-Array hat eine Länge von " + p);
    console.log("com-Array hat eine Länge von " + t);
    playP.push(drawP[drawP.length - 1]);
    drawP.splice(drawP.length - 1, 1);
    for (var i = 0; i < player.length; i++) {
        PlayerGenerateHTML(i);
        CompGenerateHTML(i);
    }
    updateHTML();
}
//Ziehen einer Karte
function DrawCard() {
    if (drawP.length > 0) {
        player.push(drawP[drawP.length - 1]);
        drawP.splice(drawP.length - 1, 1);
        updateHTML();
        if (drawP.length <= 0) {
            NewShuffel();
        }
        ComPlay();
    }
}
//Ablegen einer Karte
function PlayCard(index) {
    if (player[index].COLOUR == playP[playP.length - 1].COLOUR || player[index].VALUE == playP[playP.length - 1].VALUE) {
        playP.push(player[index]);
        player.splice(index, 1);
        updateHTML();
        if (!win(player.length, "player")) {
            ComPlay();
        }
    }
}
//Update zum jetztigen Standpunkt
function updateHTML() {
    clearDIVs();
    for (var i = 0; i < player.length; i++) {
        PlayerGenerateHTML(i);
    }
    for (var i = 0; i < com.length; i++) {
        CompGenerateHTML(i);
    }
    for (var i = 0; i < drawP.length; i++) {
        DrawGenerateHTML(i);
    }
    for (var i = 0; i < playP.length; i++) {
        PlayingPileGenerateHTML(i);
    }
}
//entfernen von DIVs
function clearDIVs() {
    var divCom = document.querySelector(".computer-player");
    if (divCom.hasChildNodes) {
        while (divCom.firstChild) {
            divCom.removeChild(divCom.firstChild);
        }
    }
    var divPlay = document.querySelector(".playing-pile");
    if (divPlay.hasChildNodes) {
        while (divPlay.firstChild) {
            divPlay.removeChild(divPlay.firstChild);
        }
    }
    var divDraw = document.querySelector(".draw-pile");
    if (divDraw.hasChildNodes) {
        while (divDraw.firstChild) {
            divDraw.removeChild(divDraw.firstChild);
        }
    }
    var divPlayer = document.querySelector(".player");
    if (divPlayer.hasChildNodes) {
        while (divPlayer.firstChild) {
            divPlayer.removeChild(divPlayer.firstChild);
        }
    }
}
//Zug des Computers
function ComPlay() {
    var gelegt = false;
    for (var i = 0; i < com.length; i++) {
        if (com[i].farbe == playP[playP.length - 1].COLOUR || com[i].VALUE == playP[playP.length - 1].VALUE) {
            playP.push(com[i]);
            com.splice(i, 1);
            updateHTML();
            gelegt = true;
            break;
        }
    }
    if (!gelegt) {
        if (drawP.length > 0) {
            com.push(drawP[drawP.length - 1]);
            drawP.splice(drawP.length - 1, 1);
            updateHTML();
            if (drawP.length <= 0) {
                NewShuffel();
            }
        }
    }
    win(com.length, "Computer");
}
//neues austeilen
function NewShuffel() {
    generateCard();
}
//Anzeige bei Gewinn
function win(counter, players) {
    if (counter <= 0) {
        alert(players + " hat gewonnen!");
        return true;
    }
    return false;
}
//# sourceMappingURL=Aufgabe_11.js.map