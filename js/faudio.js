window.addEventListener("load",function(){
	document.getElementById("insert").addEventListener("click",monedaMario);
    document.getElementsById("lucky").addEventListener("click",sonidoMaquina);	
    document.getElementsById("unlucky").addEventListener("click",silencioMaquina);		
});

function monedaMario(){
	var sonido = document.createElement("iframe");
	sonido.setAttribute("src","audio/moneda.mp3");
	document.body.appendChild(sonido);
	document.getElementsById("lucky").removeEventListener("click",monedaMario);
}

function sonidoMaquina(){
	var sonido = document.createElement("iframe");
	sonido.setAttribute("src","audio/sonido.mp3");
	document.body.appendChild(sonido);
	document.getElementsById("lucky").removeEventListener("click",sonidoMaquina);
}

function silencioMaquina(){
	var iframe = document.getElementsByTagName("iframe");

	if (iframe.length > 0){
		iframe[0].parentNode.removeChild(iframe[0]);
		document.getElementsById("lucky").addEventListener("click",sonidoMaquina);
	}
}