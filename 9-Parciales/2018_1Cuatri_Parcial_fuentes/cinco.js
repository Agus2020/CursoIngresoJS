function mostrar()
{
	var planeta;
	planeta=prompt('Ingrese un planeta');
	switch(planeta)
	{
		case 'mercurio':
		case 'venus':
		alert('aca hace mas calor');break;
		case 'tierra':
		alert('aca vivimos');break;
		case 'marte':
		case 'jupiter':
		case 'saturno':
		case 'urano':
		case 'neptuno':
		case 'pluton':
		alert('aca hace mas frio');break;
		default:alert('el planeta no existe');
	}
}
