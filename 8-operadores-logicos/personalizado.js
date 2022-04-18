var nota = 8;
var falta = 27;

if((nota < 4) || (falta > 25)){
    document.write("Reprovado: " + nota + ". Falta: " + falta + "<br>");
}

nota = 3;
falta = 27;
if((nota < 4) && (falta > 25)){
    document.write("Reprovado: " + nota + ". Falta: " + falta + "<br>");
}

var situacao = !true;
document.write("Situação: " + situacao + "<br>");
