
var fruta1, fruta2, fruta3;
var random;
var i;
var interval, interval2, interval3;
var monedas=0;
var monedasIntroducidas=0;


var frutas = new Array ("cerezas", "manzana", "naranja", "pera", "uvas", "zanahoria");
//console.log (frutas);
//console.log (fruta1);



console.log(devuelveAleatorio(0, 5));





function panelUno(){
  let img = document.getElementById("panel1");
  fruta1 = devuelveAleatorio(0, 5);
  img.src= "img/" + frutas[fruta1] + ".png";
  return fruta1;
}

function panelDos(){
  let img2 = document.getElementById("panel2");
  fruta2 = devuelveAleatorio(0, 5);
  img2.src= "img/" + frutas[fruta2] + ".png";
  return fruta2;
}

function panelTres(){
  let img3 = document.getElementById("panel3");
  fruta3 = devuelveAleatorio(0, 5);
  img3.src= "img/" + frutas[fruta3] + ".png";
  return fruta3;
}

function  panel (){
  if (monedas <= 0){
    alert("Inserta una moneda antes de jugar")
  } else{
    monedas -= 1;
    document.getElementById("monedas-disp").innerHTML=`Monedas disponibles : ${monedas}`
    interval= setInterval(panelUno, 100);
    interval2= setInterval(panelDos, 100);
    interval3= setInterval(panelTres, 100);
  }
}

  // Insertamos moneda. Cada click es una moneda más.

function insertMoneda (){ 
    monedasIntroducidas++;
    monedas = parseInt(monedasIntroducidas);
    document.getElementById("monedas-disp").innerHTML = `Monedas disponibles: ${monedasIntroducidas}`
    
  
  
    // //Otra manera de hacerlo
    // //----------------------
    // //----------------------
    //  if (!document.getElementById("coins").disabled) {
    // monedasIntroducidas = document.getElementById("coins").value;
    // monedas += parseInt(monedasIntroducidas);
    // document.getElementById("monedas-disp").innerHTML = `Monedas disponibles: ${monedasIntroducidas}`
    // document.getElementById("coins").disabled = true;
    // }
    


}
function actualizaMonedas() {
  monedas += parseInt(document.getElementById("coins").value);
  document.getElementById('monedas-disp').innerHTML = `Monedas disponibles: ${monedas}`
  document.getElementById("coins").value = 'Insert Coin';
}

// Paramos la máquina tragaperras
function stop() {
  setTimeout(() => {
      clearInterval(interval);
      console.log(fruta1)
     
  }, 800);
  setTimeout(() => {
      clearInterval(interval2);
      console.log(fruta2)
  }, 1400);
  setTimeout(() => {
      clearInterval(interval3);
      console.log(fruta3)
  }, 2000);
  setTimeout(() => {
      document.getElementById('coins').addEventListener('click', win(fruta1, fruta2, fruta3));
      console.log(monedas);
  }, 4000);
  setTimeout(() => {
      document.getElementById('monedas-disp').innerHTML = `Monedas disponibles: ${monedas}`
  }, 4000);
}

//Asignando valor a los premios

function win(uno, dos, tres){


  //Si salen tres zanahorias, se ganan 10 monedas
  if (uno==5 && dos==5 && tres==5){
    monedas+=10;
    document.getElementById("textarea").value += `Resultado: ${frutas[fruta1]}, ${frutas[fruta2]}, ${frutas[fruta3]}. Bonus: 10. Monedas: ${monedas}\n`;
  }
  if (uno==dos && dos==tres && uno==tres && (uno!=5 && dos!=5 && tres!=5)){
  // Si salen 3 hortalizas iguales que no sean zanahorias se ganan 5 monedas
  monedas+=5;
  document.getElementById("textarea").value += `Resultado: ${frutas[fruta1]}, ${frutas[fruta2]}, ${frutas[fruta3]}. Bonus: 5. Monedas: ${monedas}\n`;
}  else if((uno == dos || dos == tres || uno == tres) && (uno == 5 && dos == 5 && (tres!=5))){
    // Si salen 2 zanahorias, 4 monedas
    monedas+=4;
    document.getElementById("textarea").value += `Resultado: ${frutas[fruta1]}, ${frutas[fruta2]}, ${frutas[fruta3]}. Bonus: 4. Monedas: ${monedas}\n`;
 
}  else if ((uno == 5 || dos == 5 || tres == 5) && (uno == dos || dos == tres || uno == tres) && (uno != 5 || dos != 5)){
  // Si sale una zanahoria y dos hortalizas iguales se ganan 3 monedas.
  monedas+=3;
  document.getElementById("textarea").value += `Resultado: ${frutas[fruta1]}, ${frutas[fruta2]}, ${frutas[fruta3]}. Bonus: 3. Monedas: ${monedas}\n`;

}   else if ((uno==dos || dos==tres || tres==uno && (uno!=5))){
  // Si salen dos hortalizas iguales que no sean zanahorias se ganan 2 moneda
  monedas+=2;
    document.getElementById("textarea").value += `Resultado: ${frutas[fruta1]}, ${frutas[fruta2]}, ${frutas[fruta3]}. Bonus: 2. Monedas: ${monedas}\n`;

} else if (uno == 5 || dos== 5 || tres== 5){
  // Si sale una zanahora, 1 moneda
  monedas+=1;
  document.getElementById("textarea").value += `Resultado: ${frutas[fruta1]}, ${frutas[fruta2]}, ${frutas[fruta3]}. Bonus: 1. Monedas: ${monedas}\n`;
} else {
  document.getElementById("textarea").value += `Resultado: ${frutas[fruta1]}, ${frutas[fruta2]}, ${frutas[fruta3]}. Bonus: 0. Monedas: ${monedas} \n` ;
  
}
}

function exit() {
  alert(document.getElementById('monedas-disp').innerHTML = `Monedas disponibles: ${monedas}`)
  
  if (document.getElementById("coins").disabled = true) {
      document.getElementById("coins").disabled = false;
  }
  //Clear textarea
  document.getElementById("textarea").value = "";
  document.getElementById("coins").disabled;
}



//Devuelve numero aleatorio
function devuelveAleatorio( min, max){
  return Math.round(Math.random()* (max-min)+min);
}

