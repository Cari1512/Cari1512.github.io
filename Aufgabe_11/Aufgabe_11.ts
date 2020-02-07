




//Variablen
var cardColour: string[] = ["#ff0000", "#00ff00", "#0000ff", "#ffff00"];
var cardNumber: string[] = ["1", "2", "3", "4", "5", "6", "7", "8"];
var drawP: any[] = [];
var playP: any[] = [];
var player: any[] = [];
var com: any[] = [];

window.addEventListener("load", function (): void {
    generateCard();
    document.querySelector(".start").addEventListener("click", GivingCards);
    document.querySelector(".draw-pile").addEventListener("click", DrawCard);
    
   
});


//Karten werden erstellt und in den Zieh stapel gepushed
function generateCard(): void {
    for (let i: number = 0; i < cardColour.length; i++) {
        for (let k: number = 0; k < cardNumber.length; k++) {

            interface Card {
                COLOUR: string;
                VALUE: string;
            }
            let newCard: Card = {
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
function shuffleCards(drawP: any[]): any[] {
    let arraylength: number = drawP.length;
    for (let i: number = 0; i < arraylength; i++) {
        let x: number = Math.floor(Math.random() * (arraylength - 1));
        let tempi: number = drawP[i];
        let tempx: number = drawP[x];
        drawP[i] = tempx;
        drawP[x] = tempi;
    }
    return drawP;
}

function preDrawGenerateHTML(): any {
    for (let i: number = 0; i < drawP.length; i++) {
        DrawGenerateHTML(i);
    }
}
//Ziehstapel in HTML abgebildet
function DrawGenerateHTML(count: number): any {
    let CardDiv: HTMLElement = document.createElement("div");
    document.querySelector(".draw-pile").appendChild(CardDiv);
    CardDiv.setAttribute("class", "Card black");
}
//Hand des Spielers wird abgebildet
function PlayerGenerateHTML(count: number): any {
    let CardDiv: HTMLElement = document.createElement("div");
    document.querySelector(".player").appendChild(CardDiv);

    let CardVal: HTMLElement = document.createElement("p");
    CardVal.innerHTML = player[count].VALUE;
    CardDiv.appendChild(CardVal);

    let CardValBack: HTMLElement = document.createElement("p");
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
function CompGenerateHTML(count: number): any {

    let CardDiv: HTMLElement = document.createElement("div");
    document.querySelector(".computer-player").appendChild(CardDiv);
    CardDiv.setAttribute("class", "Card black");
}
//Ablegstapel
function PlayingPileGenerateHTML(count: number): any {

    let CardDiv: HTMLElement = document.createElement("div");
    document.querySelector(".playing-pile").appendChild(CardDiv);

    let CardVal: HTMLElement = document.createElement("p");
    CardVal.innerHTML = playP[count].VALUE;
    CardDiv.appendChild(CardVal);

    let CardValBack: HTMLElement = document.createElement("p");
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
function GivingCards(): any {

    let divButton: Element = document.querySelector(".start");
    if (divButton.hasChildNodes) {
        while (divButton.firstChild) {
            divButton.removeChild(divButton.firstChild);
        }
    }

    let p: number = drawP.length;
    let q: number = player.length;
    let t: number = com.length;

    let a: number = drawP.length - 1; // letzte/oberste Karte der Ziehkarten-Stapels (Array)
    let b: number = drawP.length - 2; // zweitletzte Karte
    let c: number = drawP.length - 3;
    let d: number = drawP.length - 4;
    let e: number = drawP.length - 5;

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

    for (let i: number = 0; i < player.length; i++) {
        PlayerGenerateHTML(i);
        CompGenerateHTML(i);
    }
    updateHTML();
}
//Ziehen einer Karte
function DrawCard(): void {
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
function PlayCard(index: number): void {
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
function updateHTML(): void {
    clearDIVs();

    for (let i: number = 0; i < player.length; i++) {

        PlayerGenerateHTML(i);
    }

    for (let i: number = 0; i < com.length; i++) {

        CompGenerateHTML(i);
    }

    for (let i: number = 0; i < drawP.length; i++) {

        DrawGenerateHTML(i);

    }

    for (let i: number = 0; i < playP.length; i++) {

        PlayingPileGenerateHTML(i);

    }
}
//entfernen von DIVs
function clearDIVs(): void {
    let divCom: HTMLElement = document.querySelector(".computer-player");
    if (divCom.hasChildNodes) {
        while (divCom.firstChild) {
            divCom.removeChild(divCom.firstChild);
        }
    }
    let divPlay: HTMLElement = document.querySelector(".playing-pile");
    if (divPlay.hasChildNodes) {
        while (divPlay.firstChild) {
            divPlay.removeChild(divPlay.firstChild);
        }
    }

    let divDraw: HTMLElement = document.querySelector(".draw-pile");
    if (divDraw.hasChildNodes) {
        while (divDraw.firstChild) {
            divDraw.removeChild(divDraw.firstChild);
        }
    }

    let divPlayer: HTMLElement = document.querySelector(".player");
    if (divPlayer.hasChildNodes) {
        while (divPlayer.firstChild) {
            divPlayer.removeChild(divPlayer.firstChild);
        }
    }
}
//Zug des Computers
function ComPlay(): void {
    let gelegt: boolean = false;
    for (let i: number = 0; i < com.length; i++) {
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
function NewShuffel(): void {
    generateCard();
}
//Anzeige bei Gewinn
function win(counter: number, players: string): boolean {
    if (counter <= 0) {
        alert(players + " hat gewonnen!");
        return true;
    }
    return false;
}


