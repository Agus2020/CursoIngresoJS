function mostrar()
{
	var nota;
	var total;
	var sexo;
	var contador;
	var f;
	var m;
	f=0;
	m=0;
	contador=0;
	total=0;
	while(contador<5)
	{
		nota=prompt('Ingrese nota');
		nota=parseInt(nota);
		while(!isNaN(nota))
		{
			nota=prompt('Ingrese una nota entre 1 y 10');
			nota=parseInt(nota);
		}
		total=total+nota;
		sexo=prompt('Ingrese sexo');
		if(sexo=='m'&&nota>5)
		{
			m++;
			m2++;
		}
		if(sexo=='f')
		{
			f++;
		}
	}
	alert('El promedio de las notas es '+total/contador);
	alert('La nota mas baja fue '+ +' y el sexo es ');
	if(m2==true)
	{
		alert('Cantidad de varones con nota 6 o mayor'+m);
	}
}
