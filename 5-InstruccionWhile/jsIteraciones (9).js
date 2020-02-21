function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';

	do
	{
		num=prompt('Ingrese un numero');
		num=parseInt(num);
		if(contador==0)
		{
			max=num;
			min=num;
		}
		if(max<num)
		{
			max=num;
		}
		if(min>num)
		{
			min=num;
		}
		contador++;
		respuesta=prompt('Desea continuar? si/no');
	}
	while(respuesta=='si');
	document.getElementById('maximo').value=max;
	document.getElementById('minimo').value=min;



}//FIN DE LA FUNCIÓN