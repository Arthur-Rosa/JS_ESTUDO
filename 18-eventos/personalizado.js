function carConteudo() {
	document.getElementById("conteudo").innerHTML = "Integer ac pulvinar risus, vel lobortis sapien. Maecenas ut iaculis velit. Fusce diam augue, sodales et purus sed, pharetra rutrum erat.";
}

function mouseOver() {
	document.getElementById("mouseAlt").innerHTML = "Retire o mouse";
}

function mouseOut() {
	document.getElementById("mouseAlt").innerHTML = "Passe o mouse";
}

function converTexto() {
	var nome = document.getElementById("nome");
	nome.value = nome.value.toUpperCase();
}

function validarSenha() {
	var senha = document.getElementById("senha").value;

	if (senha == "" || senha.length <= 5) {
		document.getElementById("erroSenha").innerHTML = "<span style='color: #ff0000;'>Preecha o campo senha com minino 6 caracteres</span>";
	} else {
		document.getElementById("erroSenha").innerHTML = "<span style='color: #00FF00;'>Senha válida</span>";
	}
}