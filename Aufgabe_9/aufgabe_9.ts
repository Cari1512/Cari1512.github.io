var toDos: string [] = ["Go Home", "Drink Tea", "Sleep"];

window.addEventListener("load", function (): void {

    for (var index: number = 0; index < toDos.length; index++) {
        document.querySelector("#toDos").innerHTML += "<p>" + toDos [index] + "<p>";
}
});