Proceso Suma_n_numeros
	Definir Num Como Real;
	Definir acumulador Como Real;
	Definir i Como Real;
	Para i<-1 Hasta 10 Hacer
		Escribir 'Dame el número a sumar';
		Leer Num;
		acumulador<-(acumulador+Num);
	FinPara
	Total<-acumulador;
	Escribir 'El resultado final es = ',Total;
FinProceso

