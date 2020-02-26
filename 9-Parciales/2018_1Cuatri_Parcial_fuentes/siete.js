function mostrar()
{
	var nota=new Array();
	var total;
	var sexo=new Array();
	var contador;
	var min;
	var max=0;
	var minsexo;
	total=0;
	for(i=0;i<5;i++)
	{
		nota[i]=prompt('Ingrese nota');
		nota[i]=parseInt(nota[i]);
		while(isNaN(nota[i])||nota[i]>10||nota[i]<0)
		{
			nota[i]=prompt('Ingrese una nota entre 1 y 10');
			nota[i]=parseInt(nota[i]);
		}
		sexo[i]=prompt('Ingrese sexo');
		while(sexo[i]!='f'&&sexo[i]!='m')
		{
			sexo[i]=prompt('Ingrese sexo.');
		}
		if(i==0)
		{
			min=nota[i];
			minsexo=sexo[i];
		}
		else
		{
			if(min>nota[i])
			{
				min=nota[i];
				minsexo=sexo[i];
			}
		}
		if(nota[i]>5&&sexo[i]=='m')
		{
			max++;
		}
		total=total+nota[i];
	}
	alert('El promedio de las notas es '+total/i);
	alert('La nota mas baja fue '+min+' y el sexo es '+minsexo);
	alert('Cantidad de varones aprobados '+max);
}
/*
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
			min=total;
			minsexo=sexo;
		}
		else
		{
			total=total+nota;
			if(min>nota)
			{
				min=nota;
				minsexo=sexo;
			}
		}
		if(nota>5&&sexo=='m')
		{
			max++;
		}
		total=total+nota;
		contador++;
	}
	alert('El promedio de las notas es '+total/contador);
	alert('La nota mas baja fue '+min+' y el sexo es '+minsexo);
	alert('Cantidad de varones con nota 6 o mayor '+max);
}
*/