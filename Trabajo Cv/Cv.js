
var boton = document.getElementById("Correo");
var contenidoInicial = boton.innerHTML;

boton.addEventListener("click", function(){
  if (boton.innerHTML == contenidoInicial) {
    boton.innerHTML = "dawn.patterson@example.com";
    boton.id = "on";   
  } else {
    boton.innerHTML = contenidoInicial;
    boton.id = "Correo";
  }
});

var boton1 = document.getElementById("Cumpleaños");
var contenidoInicial1 = boton1.innerHTML;

boton1.addEventListener("click", function(){
  if (boton1.innerHTML == contenidoInicial1) {
    boton1.innerHTML = "04/06/1947";
    boton1.id = "on1";   
  } else {
    boton1.innerHTML = contenidoInicial1;
    boton1.id = "Cumpleaños";
  }
});

var boton2 = document.getElementById("DNI");
var contenidoInicial2 = boton2.innerHTML;

boton2.addEventListener("click", function(){
  if (boton2.innerHTML == contenidoInicial2) {
    boton2.innerHTML = "15.876.510";
    boton2.id = "on2";   
  } else {
    boton2.innerHTML = contenidoInicial2;
    boton2.id = "DNI";
  }
});

var boton3 = document.getElementById("Dirección");
var contenidoInicial3 = boton3.innerHTML;

boton3.addEventListener("click", function(){
  if (boton3.innerHTML == contenidoInicial3) {
    boton3.innerHTML = "Gaia Navarro, Buenos Aires";
    boton3.id = "on3";   
  } else {
    boton3.innerHTML = contenidoInicial3;
    boton3.id = "Dirección";
  }
});

var boton4 = document.getElementById("Youtube");
var contenidoInicial4 = boton4.innerHTML;

boton4.addEventListener("click", function(){
  if (boton4.innerHTML == contenidoInicial4) {
    boton4.innerHTML = "https://www.youtube.com/@dawnpatterson4457/featured";
    boton4.id = "on4";   
  } else {
    boton4.innerHTML = contenidoInicial4;
    boton4.id = "Youtube";
  }
});