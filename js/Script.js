
var fruta1, fruta2, fruta3;
var random;
var i;

var frutas = new Array (0, 1, 2, 3, 4, 5);
//console.log (frutas);
//console.log (fruta1);



console.log(devuelveAleatorio(random));





function panelUno(){
  let img = document.getElementById("panel1");
  fruta1 = devuelveAleatorio(random);
  img.src= "/img/" + frutas[fruta1] + ".png";
  return fruta1
}

function panelUno(){
  let img = document.getElementById("panel2");
  fruta1 = devuelveAleatorio(random);
  img.src= "/img/" + frutas[fruta2] + ".png";
  return fruta2
}

function panelUno(){
  let img = document.getElementById("panel3");
  fruta1 = devuelveAleatorio(random);
  img.src= "/img/" + frutas[fruta3] + ".png";
  return fruta3
}

function panel(){
  if (monedas<=0){
    alert("Debe insertar alguna moneda para poder jugar");
  } else{
    monedas-=1;
  }
}

 

//Devuelve numero aleatorio
function devuelveAleatorio(){
  
  for (i=0; i<=frutas.length; i++){
    random = Math.floor(Math.random()*(frutas.length));
    if (random == 0 | 1 | 2 | 3 | 4 | 5){
      break;
    }
    
  }
  switch(random){
    case 0: console.log("cerezas");
    break;
    case 1: console.log("manzana");
    break;
    case 2: console.log("naranja");
    break;
    case 3: console.log("pera");
    break;
    case 4: console.log("uvas");
    break;
    case 5: console.log("zanahoria");
    break;
  }

}