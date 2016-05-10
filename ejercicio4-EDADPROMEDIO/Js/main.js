alert("Vamos a calcular el promedio de un grupo");

var n=prompt("De cuantos alumnos es el grupo?");//numero alumnos y a dividir
var acumulador=0;
 
for (var i= 1; i=n; i++) {
	edad= prompt("Dame las edades");
	acumulador=parseFloat(acumulador) + parseFloat(edad);	
}

	alert("El resultado final es = " + (acumulador/n) );