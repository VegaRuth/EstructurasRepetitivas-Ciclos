// Este codigo ha sido generado por el modulo psexport 20150303-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function suma_n_numeros() {
	var total;
	var num = new Number();
	var acumulador = new Number();
	var i = new Number();
	for (i=1;i<=10;i++) {
		document.write("Dame el número a sumar",'<BR/>');
		num = Number(prompt());
		acumulador = (acumulador+num);
	}
	total = acumulador;
	document.write("El resultado final es = ",total,'<BR/>');
}

