num = 0;
i = 0;//n es el contador

do{ 
	num ++;
  i += num;// i el valor anterior de n
	alert("Obedece al DO la primera vez "+ (i-num) + " + " + num + " es = " + i);
}while(num<10);
	alert( "Obedece al While "+"La suma de valores del 1 al 10 es igual a " + i);