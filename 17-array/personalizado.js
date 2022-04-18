var frutas = ["Abacate", "Abacaxi", "Amora", "Açaí", "Cereja", "Figo"];

//Contar a quantidade de itens no array
console.log("Quantidade de tipo de frutas: " + frutas.length );

//Acessar primeiro item do Array
console.log("Primeiro tipo de fruta: " + frutas[0]);

//Acessar um item do Array
console.log("Acessar um item do array: " + frutas[2]);

//Acessar último item do Array
console.log("Último tipo de fruta: " + frutas[frutas.length-1]);

//Adicionar um item ao final do Array
frutas.push("Maça");

//Adicionar ao início do Array mais um item
frutas.unshift("Kiwi");

//Remover um item do final do Array
frutas.pop();

//Remover do início do Array
frutas.shift();

//Remover um item pela posição do índice
//frutas.splice(pos, n);
//A partir da posição (pos) em direção ao fim da array
//(n) define o número de itens a se remover
frutas.splice(2, 3);

//Ler o um Array
frutas.forEach(function(item, indice, array){
	console.log(item, indice);
});

var carros = ["Voyage", "Virtus", "Jetta", "A1", "A2", "A3"];

//Adicionar um item ao final do Array
carros.push("A4");

//Remover um item pela posição do índice
carros.splice(2, 1);

//Ler o um Array
carros.forEach(function(item, indice, array){
	console.log(item, indice);
});