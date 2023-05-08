


function encriptar() {
	var texto = document.getElementById("inputTexto").value.toLowerCase();
    inputTexto.value = "";
	
	var txtCifrado = texto.replace(/e/igm, "enter");
	var txtCifrado = txtCifrado.replace(/o/igm, "ober");
	var txtCifrado = txtCifrado.replace(/i/igm, "ines");
	var txtCifrado = txtCifrado.replace(/a/igm, "ai");
	var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

	document.getElementById("imgDer").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("texto2").innerHTML = txtCifrado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
	var texto = document.getElementById("inputTexto").value.toLowerCase();
	
	var txtCifrado = texto.replace(/enter/igm, "e");
	var txtCifrado = txtCifrado.replace(/ober/igm, "o");
	var txtCifrado = txtCifrado.replace(/ines/igm, "i");
	var txtCifrado = txtCifrado.replace(/ai/igm, "a");
	var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

	document.getElementById("imgDer").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("texto2").innerHTML = txtCifrado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";

}
// Función para copiar texto
function copy(){

    var contenido = document.querySelector("#texto2");
	texto2.select();
	texto2.setSelectionRange(0, 99999);
	document.querySelector("#texto2").addEventListener("click", copy);

	navigator.clipboard.writeText(texto2.value);
		swal("Copiado","En el porta papeles","success");
	}
	
