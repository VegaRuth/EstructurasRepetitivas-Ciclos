alert("Vamos a sumar 10 numeros con Ciclo for");

var num=0;
var acumulador=0;

for (var n= 1; n<=10; n++) {
	num= prompt("agrega un numero a la suma");
	acumulador=parseFloat(acumulador) + parseFloat(num);	
}

	alert("El resultado final es = " +acumulador);