var Inicio =[];
var Conteo = 1;

function fizzbuzz(){

  if (Conteo % 3 === 0 && Conteo % 5 === 0){
    Inicio.push("FizzBuzz");
  }
  else if (Conteo % 3 === 0){
    Inicio.push("FIZZ");

  } 
  else if (Conteo % 5 === 0){
    Inicio.push("BUZZ");
  } 
  else {
    Inicio.push(Conteo);
  }
  Conteo++;
  console.log(Inicio);
}
fizzbuzz(3);