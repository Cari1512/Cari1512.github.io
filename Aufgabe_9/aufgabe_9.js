var arraytodo = [];
window.addEventListener("load", function () {
    //Input
    document.querySelector("#ADD").addEventListener("click", toDoInput);
});
//imput kriegen
function toDoInput(e) {
    e.preventDefault();
    var inputValue = document.querySelector(".INPUT").value;
    console.log(inputValue);
    if (inputValue)
        addTask(inputValue);
    document.querySelector(".INPUT").value = "";
}
//Task dazu
function addTask(inputValue) {
    //neue Liste
    var para = document.createElement("li");
    para.innerText = inputValue; //para nimmt den Wert vom input Feld
    para.classList.add("far", "fa-circle"); // ckeckbox wird vorne dran geklebt
    var trash = document.createElement("button"); //button für müll
    trash.classList.add("fa", "fa-trash-alt"); //Mülleimer auf button
    arraytodo.push(inputValue); //in array
    console.log(arraytodo);
    var counter = "" + arraytodo.length;
    document.querySelector(".header").innerHTML = counter + " tasks";
    para.appendChild(trash); //müll in para
    document.querySelector("#toDos").appendChild(para); //Liste para in den wrap/div der to do liste
    trash.addEventListener("click", Bin); // Müll funktion-->
    para.addEventListener("click", Check); //Check funktion
    function Check() {
        if (para.classList.contains("fa-circle")) {
            para.classList.remove("fa-circle");
            para.classList.add("fa-check-circle");
        }
        else {
            para.classList.remove("fa-check-circle");
            para.classList.add("fa-circle");
        }
    }
}
function Bin() {
    this.parentNode.remove();
    console.log("removed");
    arraytodo.pop();
    var counter = "" + arraytodo.length;
    document.querySelector(".header").innerHTML = counter + " tasks";
}
//# sourceMappingURL=aufgabe_9.js.map