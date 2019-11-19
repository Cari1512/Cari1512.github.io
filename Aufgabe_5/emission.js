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
//% Part of the world
var PartAfrica = Africa18 * 100 / totalEmission18;
var PartSouthAmerica = SouthAmerica18 * 100 / totalEmission18;
var PartEurope = Europe18 * 100 / totalEmission18;
var PartNorthAmerica = NorthAmerica18 * 100 / totalEmission18;
var PartAsia = Asia18 * 100 / totalEmission18;
var PartAustralia = Australia18 * 100 / totalEmission18;
//% Rate
var RateAfrica = ((Africa18 - Africa08) / Africa08) * 100;
var RateSouthAmerica = ((SouthAmerica18 - SouthAmerica08) / SouthAmerica08) * 100;
var RateEurope = ((Europe18 - Europe08) / Europe08) * 100;
var RateNorthAmerica = ((NorthAmerica18 - NorthAmerica08) / NorthAmerica08) * 100;
var RateAsia = ((Asia18 - Asia08) / Asia08) * 100;
var RateAustralia = ((Australia18 - Australia08) / Australia08) * 100;
//Absolute Rate
var AbsAfrica = Africa18 - Africa08;
var AbsSouthAmerica = SouthAmerica18 - SouthAmerica08;
var AbsEurope = Europe18 - Europe08;
var AbsNorthAmerica = NorthAmerica18 - NorthAmerica08;
var AbsAsia = Asia18 - Asia08;
var AbsAustralia = Australia18 - Australia08;
//Console
//Europe
console.log("Die Emission von Europa ist: " + Europe18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + PartEurope + " %");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + RateEurope + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + AbsEurope + " kg CO2");
//North America
console.log("Die Emission von Nordamerika ist: " + NorthAmerica18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + PartNorthAmerica + " %");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + RateNorthAmerica + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + AbsNorthAmerica + " kg CO2");
//South America
console.log("Die Emission von Südamerika ist: " + SouthAmerica18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + PartSouthAmerica + " %");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + RateSouthAmerica + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + AbsSouthAmerica + " kg CO2");
//Africa
console.log("Die Emission von Afrika ist: " + Africa18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + PartAfrica + " %");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + RateAfrica + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + AbsAfrica + " kg CO2");
//Asia
console.log("Die Emission von Asien ist: " + Asia18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + PartAsia + " %");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + RateAsia + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + AbsAsia + " kg CO2");
//Australia
console.log("Die Emission von Australien ist: " + Australia18 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + PartAustralia + " %");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + RateAustralia + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + AbsAustralia + " kg CO2");
//# sourceMappingURL=emission.js.map