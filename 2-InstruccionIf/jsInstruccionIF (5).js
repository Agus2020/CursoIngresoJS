function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if(edad>17||edad<14)
	{
		alert("No es adolescente");
	}
}//FIN DE LA FUNCIÓN