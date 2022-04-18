document.getElementById("exemplo-um").innerHTML = "Inserir texto no exemplo um";

function exemploDois(){
	var nomeElemento = document.getElementsByName("curso");
	console.log(nomeElemento);
}

function exemploTres(){
	var nomeTag = document.getElementsByTagName("span");
	console.log(nomeTag);
}

function exemploQuatro(){
	var nomeTagLista = document.getElementsByTagName("li");
	console.log(nomeTagLista);
}

function exemploCinco(){
	var nomeClasse = document.getElementsByClassName("produto");
	console.log(nomeClasse);
}