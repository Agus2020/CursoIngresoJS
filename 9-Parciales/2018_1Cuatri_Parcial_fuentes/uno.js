function mostrar()
{
	var alto;
	var ancho;
	var total=0;
	alto=prompt('Ingrese alto');
	alto=parseInt(alto);
	ancho=prompt('Ingrese ancho');
	ancho=parseInt(ancho);
	total=2*(alto+ancho);
	alert('El perimetro es '+total);
}
