function mostrar()
{
	var hora;
	hora=document.getElementById('laHora').value;
	hora=parseInt(hora);
	if(hora<20)
	{
		switch(hora)
		{
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			alert('es de mañana');
			break;
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			alert('es de tarde');
			break;
		}	

	}
	else
	{
		alert('es de noche');
		switch(hora)
		{
			case 20:
			case 21:
			case 22:
			case 23:
			alert('a dormir');break;
			case 24:
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:;break;
			default:alert('hora no valida') ;break;
		}
	}
}
