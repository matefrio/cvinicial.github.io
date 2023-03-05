
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
    boton4.innerHTML = "you.../@dawnpatterson4457/featured";
    boton4.id = "on4";   
  } else {
    boton4.innerHTML = contenidoInicial4;
    boton4.id = "Youtube";
  }
});

/**
document.getElementById('violin').addEventListener('mouseover', mouseOver);
document.getElementById('violin').addEventListener('mouseout', mouseOut);

function mouseOver() {document.getElementById("miaudio").play();}
function mouseOut() {document.getElementById("miaudio").pause();}*/
/** 
var boton5 = document.getElementById("violin");
var contenidoInicial5 = boton5.innerHTML;
var audio = document.getElementById("miaudio");

boton5.addEventListener("mouseover", function(){
  if (boton5.innerHTML == contenidoInicial5) {
    audio.play();
    boton5.id = "on5";   
  } else {
    boton5.innerHTML == contenidoInicial5;
    boton5.id = "violin";
  }
});*/
/** 
document.getElementById("violin").addEventListener("mouseover", function(){
  console.log("play");
  document.getElementById("miaudio").play();  
});

document.getElementById("violin").addEventListener("mouseout", function(){
  console.log("play");
  document.getElementById("miaudio").pause();
})*/
/**
document.getElementById('violin').ready(function(){
  document.getElementById('violin').mouseover(function(){
            document.getElementById("miaudio").play();
  });
});
 
document.getElementById('violin').ready(function(){
  document.getElementById('violin').mouseout(function(){
              document.getElementById("miaudio").pause();
  });
});*/

function enviarFormulario(){
  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  if(nombre=="" || email==""){
    alert("Por favor, complete los campos requeridos");
  }else{
    document.getElementById('nombre').value = "";
    document.getElementById('email').value = "";
    alert("Gracias por enviar su correo, a la brevedad me comunicaré con usted");
  }
};
/**
function reemplazar() {
  var palabra = document.getElementById('poema').value;
  if (palabra == 'fuente') {
    document.getElementById('poema').style.display = 'none';
    document.getElementById('probar').style.display = 'none';
    document.getElementById('Rayuela1').innerHTML = '<pre id="completo">Salta la rana\ny el sapo se queda quieto\nen los charcos de la tarde.\n\nSalta el sapo\ny la rana se queda sentada\nen el borde de la fuente.\n\nSalta el viento\ny los dos se quedan inmóviles\nen el aire de la noche.\n\nHomero Aridjis.</pre>';
    document.getElementById('reiniciar').style.display = 'block';
  }
  else {alert('La palabra ingresada no es correcta.');
}}
 
function reemplazar() {
  var palabra = document.getElementById('poema').value;
  if (palabra == 'fuente') {
    document.getElementById('poema').style.display = 'none';
    document.getElementById('probar').style.display = 'none';
    document.getElementById('resultado').innerHTML = 'fuente.\n\nSalta el sapo\ny la rana se queda sentada\nen el borde de la fuente.\n\nSalta el viento\ny los dos se quedan inmóviles\nen el aire de la noche.\n\nHomero Aridjis.</pre>'
  }
  else {
    alert('La palabra ingresada no es correcta.');
  }}*/
/** 
function reemplazar() {
  var palabra = document.getElementById('poema').value;
  var rayuela1= document.getElementById('rayuela1')
  
  if (palabra == 'fuente') {
    document.getElementById('probar').addEventListener('click', function () {
    document.getElementById('poema').style.display = "none";
    document.getElementById('probar').style.display = "none";
    rayuela1.id = "completo";
    document.getElementById('completo').innerHTML = '<pre>Salta la rana\ny el sapo se queda quieto\nen los charcos de la tarde.\n\nSalta el sapo\ny la rana se queda sentada\nen el borde de la fuente.\n\nSalta el viento\ny los dos se quedan inmóviles\nen el aire de la noche.\n\nHomero Aridjis.<input id="reiniciar" type="button" value="reiniciar" onclick="reiniciar();" style="display:block"></pre>';  
  })}
  else {alert('La palabra ingresada no es correcta.');
}}

function reiniciar() {
  var completo = document.getElementById('completo');
  var contenidoInicial6 = completo.innerHTML;

  if (completo.innerHTML == contenidoInicial6) {
    document.getElementById('reiniciar').addEventListener('click', function () {
    document.getElementById('poema').style.display = "block";
    document.getElementById('probar').style.display = "block";
    completo.innerHTML = document.getElementById('rayuela1');
    completo.id = "rayuela1";
  })}}*/

function reemplazar() {
  var palabra = document.getElementById('poema').value;
    
  if (palabra == 'fuente') {
    document.getElementById('probar').addEventListener('click', function () {
    document.getElementById('poema').style.display = "none";
    document.getElementById('probar').style.display = "none";
    document.getElementById('rayuela1').style.display = "none";
    document.getElementById('completo').style.display = "block";
    document.getElementById('reiniciar').style.display = "block";
  })}
  else {alert('La palabra ingresada no es correcta.');
}}

function reiniciar() {
  var completo = document.getElementById('completo');
  var contenidoInicial6 = completo.innerHTML;

  if (completo.innerHTML == contenidoInicial6) {
    document.getElementById('reiniciar').addEventListener('click', function () {
    document.getElementById('poema').style.display = "block";
    document.getElementById('probar').style.display = "block";
    document.getElementById('rayuela1').style.display = "block";
    document.getElementById('completo').style.display = "none";
    document.getElementById('reiniciar').style.display = "none";
  })}}