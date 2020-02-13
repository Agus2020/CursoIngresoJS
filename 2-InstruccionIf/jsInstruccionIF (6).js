function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if(edad<13)
	{
		alert("menor");
	}
	else
	{
		if(edad>12&&edad<17)
		{
			alert("adolescete");
		}
		else
		{
			alert("mayor de edad");
		}
	}	

}//FIN DE LA FUNCIÓN