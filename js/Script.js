var frutas = new Array (1, 2, 3, 4, 5, 6);
console.log (frutas);

console.log (devuelveAleatorio);





//Devuelve numero aleatorio

function devuelveAleatorio(){
  var random;
  random =   Math.random() * (frutas.length);
     
return random;

}