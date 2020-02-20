function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mesDelAño)
{
	case 'Febrero':
	alert('Tiene 28 dias');break;  // enero,marzo,mayo,julio,agosto,octubre,diciembre
	case 'Enero':
	case 'Marzo':
	case 'Mayo':
	case 'Julio':
	case 'Agosto':
	case 'Octubre':
	case 'Diciembre':
	alert('Tiene 31 dias');break;
	case 'Abril':
	case 'Junio':
	case 'Septiembre':
	case 'Noviembre':
	alert("Este mes tiene 30 dias");
	break;
	default: alert('Mes no compatible');break
}



}//FIN DE LA FUNCIÓN