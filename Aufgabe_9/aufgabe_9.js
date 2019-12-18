var toDos = ["Go Home", "Drink Tea", "Sleep"];
window.addEventListener("load", function () {
    for (var index = 0; index < toDos.length; index++) {
        document.querySelector("#toDos").innerHTML += "<p>" + toDos[index] + "<p>";
    }
});
//# sourceMappingURL=aufgabe_9.js.map