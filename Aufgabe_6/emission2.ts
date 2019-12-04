
//2018
var Africa18:number = 1235.5;
var SouthAmerica18:number = 1261.5;
var Europe18:number = 4209.3;
var NorthAmerica18:number = 6035.6;
var Asia18:number = 16274.1;
var Australia18:number = 2100.5;
var totalEmission18:number= Europe18+Asia18+Australia18+NorthAmerica18+SouthAmerica18+Africa18;

//2008
var Africa08:number = 1028;
var SouthAmerica08:number = 1132.6;
var Europe08:number = 4965.7;
var NorthAmerica08:number = 6600.4;
var Asia08:number = 12954.7;
var Australia08:number = 1993;
var totalEmission08:number= Europe08+Asia18+Australia08+NorthAmerica08+SouthAmerica08+Africa08;


//Europe
function  europe() {
    var PartEurope:number= Europe18*100/totalEmission18
    var RateEurope:number= ((Europe18-Europe08)/Europe08)*100
    var AbsEurope:number= Europe18-Europe08
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("#total h2").innerHTML = Europe18.toFixed(2) ;
    document.querySelector("#total p").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#part h2").innerHTML = PartEurope.toFixed(1)+"%";
    document.querySelector("#rate h2").innerHTML = RateEurope.toFixed(1)+"%";
    document.querySelector("#abs h2").innerHTML = AbsEurope.toFixed(1);  
    document.querySelector(".cloud").setAttribute("style","height:"+PartEurope*2+"%")
    
}

//NorthAmerica
function  northamerica() {
    var PartNorthAmerica:number= NorthAmerica18*100/totalEmission18
    var RateNorthAmerica:number= ((NorthAmerica18-NorthAmerica08)/NorthAmerica08)*100
    var AbsNorthAmerica:number= (NorthAmerica18-NorthAmerica08)
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in North America";
    document.querySelector("#total h2").innerHTML = NorthAmerica18.toFixed(1);
    document.querySelector("#total p").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector("#part h2").innerHTML = PartNorthAmerica.toFixed(1)+"%";
    document.querySelector("#rate h2").innerHTML = RateNorthAmerica.toFixed(1)+"%";
    document.querySelector("#abs h2").innerHTML = AbsNorthAmerica.toFixed(1);  
    document.querySelector(".cloud").setAttribute("style","height:"+PartNorthAmerica*2+"%")
}

// South America
function  southamerica() {
    var PartSouthAmerica:number= SouthAmerica18*100/totalEmission18
    var RateSouthAmerica:number= ((SouthAmerica18-SouthAmerica08)/SouthAmerica08)*100
    var AbsSouthAmerica:number= SouthAmerica18-SouthAmerica08
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in South America";
    document.querySelector("#total h2").innerHTML = SouthAmerica18.toFixed(1) ;
    document.querySelector("#total p").innerHTML = "Emission absolute of South America in 2018";
    document.querySelector("#part h2").innerHTML = PartSouthAmerica.toFixed(1)+"%";
    document.querySelector("#rate h2").innerHTML = RateSouthAmerica.toFixed(1)+"%";
    document.querySelector("#abs h2").innerHTML = AbsSouthAmerica.toFixed(1);  
    document.querySelector(".cloud").setAttribute("style","height:"+PartSouthAmerica*2+"%")
}

//Africa
function  africa() {
    var PartAfrica:number= Math.round(Africa18*100/totalEmission18)
    var RateAfrica:number= Math.round(((Africa18-Africa08)/Africa08)*100)
    var AbsAfrica:number= Math.round(Africa18-Africa08)
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector("#total h2").innerHTML = Africa18.toFixed(1) ;
    document.querySelector("#total p").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector("#part h2").innerHTML = PartAfrica.toFixed(1)+"%";
    document.querySelector("#rate h2").innerHTML =RateAfrica.toFixed(1) +"%";
    document.querySelector("#abs h2").innerHTML = AbsAfrica.toFixed(1);  
    document.querySelector(".cloud").setAttribute("style","height:"+PartAfrica*2+"%")
}

//Asia
function  asia() {
    var PartAsia:number= Math.round(Asia18*100/totalEmission18)
    var RateAsia:number= Math.round(((Asia18-Asia08)/Asia08)*100)
    var AbsAsia:number= Math.round(Asia18-Asia08)
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector("#total h2").innerHTML = Asia18.toFixed(1) ;
    document.querySelector("#total p").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector("#part h2").innerHTML = PartAsia.toFixed(1)+"%";
    document.querySelector("#rate h2").innerHTML = RateAsia.toFixed(1)+"%";
    document.querySelector("#abs h2").innerHTML = AbsAsia.toFixed(1);  
    document.querySelector(".cloud").setAttribute("style","height:"+PartAsia*2+"%")
}

//Australia
function  australia() {
    var PartAustralia:number= Math.round(Australia18*100/totalEmission18)
    var RateAustralia:number= Math.round(((Australia18-Australia08)/Australia08)*100)
    var AbsAustralia:number= Math.round(Australia18-Australia08)
    var australia = Australia18.toString();
    var p_au = PartAustralia.toString();
    var r_au = RateAustralia.toString();
    var a_au = AbsAustralia.toString();
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector("#total h2").innerHTML = Australia18.toFixed(1) ;
    document.querySelector("#total p").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector("#part h2").innerHTML = PartAustralia.toFixed(1)+"%";
    document.querySelector("#rate h2").innerHTML = RateAustralia.toFixed(1)+"%";
    document.querySelector("#abs h2").innerHTML = AbsAustralia.toFixed(1);  
    document.querySelector(".cloud").setAttribute("style","height:"+PartAustralia*2+"%")
}


window.addEventListener("load", function(){
    document.querySelector(".europe").addEventListener("click", europe);
    document.querySelector(".northamerica").addEventListener("click", northamerica);
    document.querySelector(".southamerica").addEventListener("click", southamerica);
    document.querySelector(".africa").addEventListener("click", africa);
    document.querySelector(".asia").addEventListener("click", asia);
    document.querySelector(".australia").addEventListener("click", australia);
});








