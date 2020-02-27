function mostrar()
{
	var numeroIngresado
	var bandera;
	bandera=0;
	numeroIngresado=prompt('Ingrese numero');
	numeroIngresado=parseInt(numeroIngresado);
	for(i=2;i<numeroIngresado;i++)
	{
		if(numeroIngresado%i==0)
		{
			bandera=1;
		}
	}
	if(bandera==1)
	{
		alert('Es primo el '+numeroIngresado);
	}
	else
	{
		alert('No es primo el numero '+numeroIngresado);
	}

}//FIN DE LA FUNCIÓN