// Generador de un numero cualquiera para novios 
var N = Math.random();
console.log(N);

// Para que nos de numeros mayores a 1;
var N1 = Math.random();
N1 = Math.floor(N1 * 6)  + 1;
console.log(N1);
alert("Hola perra");

// 
var Mujer = prompt("Hola amiga, ¿como te llamas?");
var Hombre = prompt("La persona que te gusta como se llama");

var PrimerLetraDeMujer = Mujer.slice(0,1);
var PrimerLetraDeMujerMayus = PrimerLetraDeMujer.toUpperCase();
var RestoDelNombreMujer = Mujer.slice(1,Mujer.length);
var RestoDelNombreMujer = RestoDelNombreMujer.toLowerCase();
var NombreDeMujercompleto = PrimerLetraDeMujerMayus + RestoDelNombreMujer;

console.log(NombreDeMujercompleto);
alert("ahora con el nombre del hombre ");

var PrimerLetraDeNombreDeHombre = Hombre.slice(0,1);
var PrimerLetraDeNombreDeHombreMayus = PrimerLetraDeNombreDeHombre.toUpperCase();
var NombreRestanteDelHombre = Hombre.slice(1,Hombre.length);
var NombreRestanteDelHombre = NombreRestanteDelHombre.toLocaleLowerCase();
var NombreCompletoHombre = PrimerLetraDeNombreDeHombreMayus + NombreRestanteDelHombre;
console.log(NombreCompletoHombre);
console.log(NombreDeMujercompleto + " ama a " + NombreCompletoHombre);

alert("Ahora veremos un numero cualquiera");
var PuntuacionDeAmor = Math.random() * 100;
PuntuacionDeAmor = Math.floor(PuntuacionDeAmor) +1;

console.log("La puntuacion de amor es: " + PuntuacionDeAmor);

if (PuntuacionDeAmor === 100){
  console.log("Vaya " + NombreCompletoHombre + " si que te ama");
}
if (PuntuacionDeAmor >= 70 && PuntuacionDeAmor <= 90){
  console.log("Es amor puro");
}
else {
  console.log("No te ama chimgadamadre");
}