//2018
var Africa18 = 1235.5;
var SouthAmerica18 = 1261.5;
var Europe18 = 4209.3;
var NorthAmerica18 = 6035.6;
var Asia18 = 16274.1;
var Australia18 = 2100.5;
var totalEmission18 = Europe18 + Asia18 + Australia18 + NorthAmerica18 + SouthAmerica18 + Africa18;
//2008
var Africa08 = 1028;
var SouthAmerica08 = 1132.6;
var Europe08 = 4965.7;
var NorthAmerica08 = 6600.4;
var Asia08 = 12954.7;
var Australia08 = 1993;
var totalEmission08 = Europe08 + Asia18 + Australia08 + NorthAmerica08 + SouthAmerica08 + Africa08;
//Europe
function europe() {
    var PartEurope = Europe18 * 100 / totalEmission18;
    var RateEurope = ((Europe18 - Europe08) / Europe08) * 100;
    var AbsEurope = Europe18 - Europe08;
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("#total h2").innerHTML = Europe18.toFixed(2);
    document.querySelector("#total p").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#part h2").innerHTML = PartEurope.toFixed(1) + "%";
    document.querySelector("#rate h2").innerHTML = RateEurope.toFixed(1) + "%";
    document.querySelector("#abs h2").innerHTML = AbsEurope.toFixed(1);
    document.querySelector(".cloud").setAttribute("style", "height:" + PartEurope * 2 + "%");
}
//NorthAmerica
function northamerica() {
    var PartNorthAmerica = NorthAmerica18 * 100 / totalEmission18;
    var RateNorthAmerica = ((NorthAmerica18 - NorthAmerica08) / NorthAmerica08) * 100;
    var AbsNorthAmerica = (NorthAmerica18 - NorthAmerica08);
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in North America";
    document.querySelector("#total h2").innerHTML = NorthAmerica18.toFixed(1);
    document.querySelector("#total p").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector("#part h2").innerHTML = PartNorthAmerica.toFixed(1) + "%";
    document.querySelector("#rate h2").innerHTML = RateNorthAmerica.toFixed(1) + "%";
    document.querySelector("#abs h2").innerHTML = AbsNorthAmerica.toFixed(1);
    document.querySelector(".cloud").setAttribute("style", "height:" + PartNorthAmerica * 2 + "%");
}
// South America
function southamerica() {
    var PartSouthAmerica = SouthAmerica18 * 100 / totalEmission18;
    var RateSouthAmerica = ((SouthAmerica18 - SouthAmerica08) / SouthAmerica08) * 100;
    var AbsSouthAmerica = SouthAmerica18 - SouthAmerica08;
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in South America";
    document.querySelector("#total h2").innerHTML = SouthAmerica18.toFixed(1);
    document.querySelector("#total p").innerHTML = "Emission absolute of South America in 2018";
    document.querySelector("#part h2").innerHTML = PartSouthAmerica.toFixed(1) + "%";
    document.querySelector("#rate h2").innerHTML = RateSouthAmerica.toFixed(1) + "%";
    document.querySelector("#abs h2").innerHTML = AbsSouthAmerica.toFixed(1);
    document.querySelector(".cloud").setAttribute("style", "height:" + PartSouthAmerica * 2 + "%");
}
//Africa
function africa() {
    var PartAfrica = Math.round(Africa18 * 100 / totalEmission18);
    var RateAfrica = Math.round(((Africa18 - Africa08) / Africa08) * 100);
    var AbsAfrica = Math.round(Africa18 - Africa08);
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector("#total h2").innerHTML = Africa18.toFixed(1);
    document.querySelector("#total p").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector("#part h2").innerHTML = PartAfrica.toFixed(1) + "%";
    document.querySelector("#rate h2").innerHTML = RateAfrica.toFixed(1) + "%";
    document.querySelector("#abs h2").innerHTML = AbsAfrica.toFixed(1);
    document.querySelector(".cloud").setAttribute("style", "height:" + PartAfrica * 2 + "%");
}
//Asia
function asia() {
    var PartAsia = Math.round(Asia18 * 100 / totalEmission18);
    var RateAsia = Math.round(((Asia18 - Asia08) / Asia08) * 100);
    var AbsAsia = Math.round(Asia18 - Asia08);
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector("#total h2").innerHTML = Asia18.toFixed(1);
    document.querySelector("#total p").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector("#part h2").innerHTML = PartAsia.toFixed(1) + "%";
    document.querySelector("#rate h2").innerHTML = RateAsia.toFixed(1) + "%";
    document.querySelector("#abs h2").innerHTML = AbsAsia.toFixed(1);
    document.querySelector(".cloud").setAttribute("style", "height:" + PartAsia * 2 + "%");
}
//Australia
function australia() {
    var PartAustralia = Math.round(Australia18 * 100 / totalEmission18);
    var RateAustralia = Math.round(((Australia18 - Australia08) / Australia08) * 100);
    var AbsAustralia = Math.round(Australia18 - Australia08);
    var australia = Australia18.toString();
    var p_au = PartAustralia.toString();
    var r_au = RateAustralia.toString();
    var a_au = AbsAustralia.toString();
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector("#total h2").innerHTML = Australia18.toFixed(1);
    document.querySelector("#total p").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector("#part h2").innerHTML = PartAustralia.toFixed(1) + "%";
    document.querySelector("#rate h2").innerHTML = RateAustralia.toFixed(1) + "%";
    document.querySelector("#abs h2").innerHTML = AbsAustralia.toFixed(1);
    document.querySelector(".cloud").setAttribute("style", "height:" + PartAustralia * 2 + "%");
}
window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener("click", europe);
    document.querySelector(".northamerica").addEventListener("click", northamerica);
    document.querySelector(".southamerica").addEventListener("click", southamerica);
    document.querySelector(".africa").addEventListener("click", africa);
    document.querySelector(".asia").addEventListener("click", asia);
    document.querySelector(".australia").addEventListener("click", australia);
});
//# sourceMappingURL=emission2.js.map