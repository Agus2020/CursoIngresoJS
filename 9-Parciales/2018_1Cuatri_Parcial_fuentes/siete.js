function mostrar()
{
	var nota;
	var total;
	var sexo;
	var contador;
	var min;
	var max=0;
	var minsexo;
	contador=0;
	total=0;
	while(contador<5)
	{
		nota=prompt('Ingrese nota');
		nota=parseInt(nota);
		while(isNaN(nota))
		{
			nota=prompt('Ingrese una nota entre 1 y 10');
			nota=parseInt(nota);
		}
		sexo=prompt('Ingrese sexo');
		while(sexo!='f'&&sexo!='m')
		{
			sexo=prompt('Ingrese sexo');
		}
		if(contador==0)
		{
			total=total+nota;
			min=total;
			minsexo=sexo;
		}
		else
		{
			total=total+nota;
		}
		if(min>nota)
		{
			min=nota;
			minsexo=sexo;
		}
		if(nota>5&&sexo=='m')
		{
			max++;
		}
		contador++;
	}
	alert('El promedio de las notas es '+total/contador);
	alert('La nota mas baja fue '+min+' y el sexo es '+minsexo);
	alert('Cantidad de varones con nota 6 o mayor '+max);
}
