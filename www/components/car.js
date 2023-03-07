function calcularEficiencia() {
	var marca = document.getElementById("marca").value;
	var modelo = document.getElementById("modelo").value;
	var quilometragem = parseFloat(document.getElementById("quilometragem").value);
	var litros = parseFloat(document.getElementById("litros").value);

			var eficiencia = quilometragem / litros;

			var resultado = "Seu " + marca + " " + modelo + " fez " + eficiencia.toFixed(2) + " quilômetros por litro."

			document.getElementById("resultado").innerHTML = resultado
}