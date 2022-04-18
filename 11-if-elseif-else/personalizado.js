var nota = 2;

if(nota >= 7){
	document.write("Aprovado: " + nota + "<br>");
}else if((nota < 7) && (nota >= 4)){
	document.write("Recuperação: " + nota + "<br>");
}else{
	document.write("Reprovado: " + nota + "<br>");
}

var sol = true;
var nublado = false;
if(sol){
	document.write("Vamos para praia porque tem sol!<br>");
}else if(nublado){
	document.write("Vamos para o parque!<br>");
}else{
	document.write("Vamos ficar em casa estudando JavaScript!<br>");
}