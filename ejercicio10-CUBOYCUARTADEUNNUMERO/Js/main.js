alert("Vamos a calcular el cubo y cuarta de 10 numeros");

for (var i= 1; i<=10; i++) {
	num= prompt("Dame en número a potenciar");
	var cubo= Math.pow(num, 3);
	var cuarta=Math.pow(num,4 );
	alert("el cubo de " + num + " es = " + cubo + 
		"\n y " + num + " elevado a la cuarta es = " + cuarta );
}